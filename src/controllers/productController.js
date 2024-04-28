const productModel = require("../models/productModel")
const subCategoryModel = require("../models/subCategoryModel")

const productController = {
    create: async (req, res) => {
        try {
            const product = await productModel.create(req.body)
            res.redirect('back')
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const product = await productModel.find({}).populate({
                path: 'subCategoryID',
                populate: {
                    path: 'categoryID'
                }
            })
            res.render('Pages/products', { products: product })
        } catch (error) {
            console.log(error)
        }
    },
    form: async (req, res) => {
        try {
            const subCategoryData = await subCategoryModel.find({})
            console.log(subCategoryData)
            res.render('Pages/addproduct', { subcategories: subCategoryData })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = productController