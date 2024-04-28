const {Router} = require('express')
const productController = require('../controllers/productController')

const productRouter = Router()

productRouter.post('/create', productController.create)
productRouter.get('/', productController.get)
productRouter.get('/create', productController.form)
productRouter.get('/delete/:id', productController.delete)

module.exports = productRouter