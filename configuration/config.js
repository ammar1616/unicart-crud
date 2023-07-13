const sequelize = require("sequelize")

const objsequelize = new sequelize("task2", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = objsequelize