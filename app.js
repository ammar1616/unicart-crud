const express = require("express")
const app = express()

app.use(express.json())
app.use(require("./modules/products/routes/product.route"))
app.use(require("./modules/cart_item/routes/cart_item.route"))

let createtable = require("./modules/index")
createtable()

app.get("/", (req, res) => {
    res.send("Welcome home")
})


app.listen(3000)