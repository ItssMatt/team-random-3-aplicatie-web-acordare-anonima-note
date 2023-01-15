const Sequelize = require('sequelize');

const db = new Sequelize("f0x", "root", "", {
    dialect: "mysql",
    host: "localhost",
    logging: false,
    define: {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: true,
    },
});

module.exports = db;