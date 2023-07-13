const sequelize = require("sequelize")
const objsequelize = require("../../../configuration/config")

const cart = objsequelize.define("cart_item", {
    product_id: {
        type: sequelize.STRING
    },
    quantity: {
        type: sequelize.INTEGER
    }
})

module.exports = cart