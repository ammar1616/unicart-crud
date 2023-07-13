const { where } = require("sequelize")
const cart = require("../model/cart_item.model")

let addtocart = async(req, res) => {
    const { id } = req.params
        // let q = 0

    const item = await cart.findOne({
        where: {
            product_id: id
        }
    })

    if (!item) {
        await cart.create({
            product_id: id,
            quantity: 1
        })
    } else {
        cart.update({
            quantity: item.quantity + 1
        }, {
            where: {
                product_id: id
            }
        })
    }

    // console.log(item)
    res.json({ message: "Added" })

}

let getcartitems = async(req, res) => {
    let data = await cart.findAll({})
    res.json({ message: "All Cart Items", data })
}

let deletecartitem = async(req, res) => {
    const id = req.params.id

    const item = await cart.findOne({
        where: {
            product_id: id
        }
    })
    console.log(item)
    if (item && item.quantity > 1) {
        // dec
        await cart.update({
            quantity: item.quantity - 1
        }, {
            where: {
                product_id: id
            }
        })
    } else {
        await cart.destroy({
            where: {
                product_id: id
            }
        })
    }

    res.json({ message: "Deleted" })
}


module.exports = {
    addtocart,
    getcartitems,
    deletecartitem
}