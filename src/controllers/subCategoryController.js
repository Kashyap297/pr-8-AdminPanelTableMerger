const categoryModel = require("../models/categoryModel")
const subCategoryModel = require("../models/subCategoryModel")

const subCatController = {
    create: async (req, res) => {
        try {
            const subcategory = await subCategoryModel.create(req.body)
            res.redirect('back')
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req, res) => {
        try {
            const subcategory = await subCategoryModel.find({}).populate('categoryID')
            res.render('Pages/subcategory', { subcategories: subcategory })
        } catch (error) {
            console.log(error)
        }
    },
    form: async (req, res) => {
        try {
            const categoryData = await categoryModel.find({})
            res.render('Pages/addsubcategory', { categories: categoryData })
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        const { id } = req.params
        try {
            const subcategory = await subCategoryModel.findByIdAndDelete(id)
            res.redirect('/subcategory')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = subCatController