const product = require("../model/product.model")
const { Op } = require("sequelize")

let getallproducts = async(req, res) => {
    let products = await product.findAll({})
    res.json({ message: "All Products", products })
}

let addproduct = async(req, res) => {
    const { name, price, description } = req.body
    await product.create({
        name,
        price,
        description
    })
    res.json({ message: "Added" })
}


let updateproduct = async(req, res) => {
    const { name, price, description } = req.body
    const { id } = req.params
    await product.update({ name, price, description }, {
        where: {
            id
        }
    })
    res.json({ message: "updated" })
}

let deleteproduct = async(req, res) => {
    const { id } = req.params;
    await product.destroy({
        where: { id }
    })
    res.json({ message: "Deleted" })
}

let getproduct = async(req, res) => {
    const { id } = req.params
    let data = await product.findAll({
        where: {
            id
        }
    })
    res.json({ message: "Your product", data })
}

let searchproduct = async(req, res) => {
    const { searchkey } = req.query
        // console.log(searchkey)
    let data = searchkey ? await product.findAll({
        where: {
            name: {
                [Op.like]: `%${searchkey}%`
            }
        }
    }) : await product.findAll({})
    res.json({ message: "Found Product", data })
}

module.exports = {
    addproduct,
    updateproduct,
    deleteproduct,
    getallproducts,
    getproduct,
    searchproduct
}