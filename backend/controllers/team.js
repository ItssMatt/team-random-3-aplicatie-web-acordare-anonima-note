const { UserDb, TeamDb } = require('../models')

const controller = {
  getAllTeams: async (req, res) => {
    try {
      console.log(res.locals.currentUser)
      const teams = await TeamDb.findAll({
        include: [UserDb]
      })
      res.status(200).send(teams)
    } catch (err) {
      res.status(500).send({ message: 'Server error!', error: err.message })
    }
  },

  createTeam: async (req, res) => {
    const payload = {
      name: req.body.name,
      finishedProject: false
    }

    if (!payload.name) {
      return res.status(400).send('Name not found!')
    }

    try {
      const team = await TeamDb.create(payload)
      const user = await UserDb.findByPk(res.locals.currentUser.id)
      await user.update({
        teamId: team.id,
        isTeamLead: true
      })

      res.status(200).send(team)
    } catch (err) {
      res.status(500).send({ message: 'Server error!', error: err.message })
    }
  }
}

module.exports = controller
