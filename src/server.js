const express = require('express');
const dbConnection = require('./config/db');
const categoryRouter = require('./routes/categoryRoute');
const subCatRouter = require('./routes/subCategoryRoute');
const productRouter = require('./routes/productRoute');
const app = express()

// port
const PORT = 8090;

// Connect to the database
dbConnection()

// Set up view engine and views directory
app.set('view engine', 'ejs')
app.set('views', 'src/views')

// Middleware
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/category', categoryRouter)
app.use('/subcategory', subCatRouter)
app.use('/product', productRouter)

// Start the server
app.listen(PORT, (err) => {
    if (err) {
        console.log('server Not Start')
    }
    console.log(`listing on port http://localhost:${PORT}`)
})