const express = require('express')
const router = express.Router()

const { TeamController } = require('../controllers')
const TokenHandler = require('../middlewares/token')

router.get('/', [TokenHandler.verifyToken, TeamController.getAllTeams])
router.post('/', [TokenHandler.verifyToken, TeamController.createTeam])

module.exports = router
