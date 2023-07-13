const app = require("express").Router()

const { addtocart, getcartitems, deletecartitem } = require("../controller/cart_item.controller")

app.post("/addtocart/:id", addtocart)

app.get("/getcartitems", getcartitems)

app.delete("/deletecartitem/:id", deletecartitem)

module.exports = app