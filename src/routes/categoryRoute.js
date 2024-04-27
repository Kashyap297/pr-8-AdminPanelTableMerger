const { Router } = require('express')
const categoryController = require('../controllers/categoryController')

const categoryRouter = Router()

categoryRouter.post('/', categoryController.create)
categoryRouter.get('/', categoryController.get)

module.exports = categoryRouter