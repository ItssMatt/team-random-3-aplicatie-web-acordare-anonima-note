const Sequelize = require('sequelize');
const db = require("../config/db");


const UserModel = require("./user");
const TeamModel = require("./team");


const User = UserModel(db, Sequelize);
const Team = TeamModel(db, Sequelize);

Team.hasMany(User);

module.exports = {
    UserDb: User,
    TeamDb: Team,
    connection: db,
};