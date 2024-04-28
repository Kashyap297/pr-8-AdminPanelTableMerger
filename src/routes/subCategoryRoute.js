const {Router} = require('express')
const subCatController = require('../controllers/subCategoryController')

const subCatRouter = Router()

subCatRouter.post('/create', subCatController.create)
subCatRouter.get('/', subCatController.get)
subCatRouter.get('/create', subCatController.form)

module.exports = subCatRouter