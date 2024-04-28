const { Router } = require('express')
const categoryController = require('../controllers/categoryController')

const categoryRouter = Router()

categoryRouter.post('/create', categoryController.create)
categoryRouter.get('/', categoryController.get)
categoryRouter.get('/create', categoryController.form)
categoryRouter.get('/delete/:id', categoryController.delete)

module.exports = categoryRouter