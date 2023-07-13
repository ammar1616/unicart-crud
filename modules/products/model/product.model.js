const sequelize = require("sequelize")

const objsequelize = require("../../../configuration/config")

const product = objsequelize.define("product", {
    name: {
        type: sequelize.STRING
    },
    price: {
        type: sequelize.FLOAT,
    },
    description: {
        type: sequelize.STRING
    }
})

module.exports = product