const express = require('express')
const router = express.Router()

const { UserController } = require('../controllers')
const TokenHandler = require('../middlewares/token')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.post('/joinTeam', [TokenHandler.verifyToken, UserController.joinTeam])

module.exports = router
