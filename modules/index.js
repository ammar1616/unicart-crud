const sequelize = require("../configuration/config")

let createtable = () => {
    sequelize.sync().then(
        res => console.log("Table Created")
    ).catch(err => console.log(`Error Occured ${err}`))
}

module.exports = createtable