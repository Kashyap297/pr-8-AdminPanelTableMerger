const productModel = require("../models/productModel")

const productController = {
    create: async (req, res) => {
        try {
            const product = await productModel.create(req.body)
            res.send(product)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const product = await productModel.find({})
            res.send(product)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = productController