const {Router} = require('express')
const productController = require('../controllers/productController')

const productRouter = Router()

productRouter.post('/create', productController.create)
productRouter.get('/', productController.get)
productRouter.get('/create', productController.form)

module.exports = productRouter