const subCategoryModel = require("../models/subCategoryModel")

const subCatController = {
    create: async (req, res) => {
        try {
            const subcategory = await subCategoryModel.create(req.body)
            res.send(subcategory)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const subcategory = await subCategoryModel.find({}).populate('categoryID')
            res.send(subcategory)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = subCatController