const app = require("express").Router()

const { addproduct, updateproduct, deleteproduct, getallproducts, getproduct, searchproduct } = require("../controller/product.controller")

app.post("/addproduct", addproduct)

app.get("/getallproducts", getallproducts)

app.get("/getproduct/:id", getproduct)

app.get("/searchproduct", searchproduct)

app.put("/updateproduct/:id", updateproduct)

app.delete("/deleteproduct/:id", deleteproduct)


module.exports = app