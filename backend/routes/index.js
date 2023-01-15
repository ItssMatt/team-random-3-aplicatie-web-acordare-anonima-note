const express = require("express");
const router = express.Router();

const UserRouter = require('./user');
const TeamRouter = require('./team');

router.use("/user", UserRouter);
router.use("/team", TeamRouter);

module.exports = router;
