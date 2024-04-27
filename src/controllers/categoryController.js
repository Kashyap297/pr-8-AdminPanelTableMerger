const categoryModel = require("../models/categoryModel")

const categoryController = {
    create: async (req, res) => {
        try {
            const category = await categoryModel.create(req.body)
            res.send(category)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const category = await categoryModel.find({})
            res.send(category)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = categoryController