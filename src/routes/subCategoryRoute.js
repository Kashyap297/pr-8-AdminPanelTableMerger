const {Router} = require('express')
const subCatController = require('../controllers/subCategoryController')

const subCatRouter = Router()

subCatRouter.post('/', subCatController.create)
subCatRouter.get('/', subCatController.get)

module.exports = subCatRouter