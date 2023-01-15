const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { UserDb, TeamDb } = require('../models')

const controller = {
  register: async (req, res) => {
    const payload = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isProfessor: req.body.isProfessor
    }

    for (let camp in payload) {
      if (payload[camp] === null || payload[camp] === undefined || payload[camp] === '') {
        return res.status(400).send('One or more fields are empty!')
      }
    }

    try {
      payload.password = await bcrypt.hash(payload.password, 10)
      const newUser = await UserDb.create(payload)
      res.status(200).send(newUser)
    } catch (err) {
      res.status(500).send({ message: 'Server error!', error: err.message })
    }
  },

  login: async (req, res) => {
    const payload = {
      email: req.body.email,
      password: req.body.password
    }

    for (let camp in payload) {
      if (payload[camp] === null || payload[camp] === undefined || payload[camp] === '') {
        return res.status(400).send('One or more fields are empty!')
      }
    }

    try {
      const user = await UserDb.findOne({
        where: {
          email: payload.email
        }
      })
      if (user) {
        const match = await bcrypt.compare(payload.password, user.password)
        if (match) {
          jwt.sign(
            user.get(),
            'secretkey',
            {
              algorithm: 'HS256',
              expiresIn: '1h'
            },
            (err, token) => {
              if (err) {
                return res.status(500).send('jwt')
              }
              res.cookie('bearer', token, {
                httpOnly: true,
                expire: process.env.COOKIE_AGE,
                secure: true,
                sameSite: 'none'
              })

              res.status(200).send({ message: 'Login!', token: token, user: user })
            }
          )
        } else {
          return res.status(400).send('Email or password wrong')
        }
      } else {
        return res.status(400).send('Email or password wrong')
      }
    } catch (err) {
      res.status(500).send({ message: 'Server error!', error: err.message })
    }
  },
  logout: (req, res) => {
    console.log(req.cookies.bearer)

    if (!req.cookies.bearer) {
      res.status(400).send('Nu esti logat!')
    } else {
      res.clearCookie('bearer')
      res.status(205).send('Te-ai delogat cu succes!')
    }
  },

  joinTeam: async (req, res) => {
    const payload = {
      teamId: req.body.teamId
    }

    if (!payload.teamId) {
      return res.status(400).send('Team Id not found!')
    }
    try {
      const team = await TeamDb.findByPk(payload.teamId)
      if (team) {
        const user = await UserDb.findByPk(res.locals.currentUser.id)
        await user.update({
          teamId: payload.teamId,
          isTeamLead: false
        })
        res.status(200).send(user)
      } else {
        return res.status(400).send('Team not found!')
      }
    } catch (err) {
      res.status(500).send({ message: 'Server error!', error: err.message })
    }
  }
}

module.exports = controller
