const express = require('express');
const dbConnection = require('./config/db');
const categoryRouter = require('./routes/categoryRoute');
const subCatRouter = require('./routes/subCategoryRoute');
const app = express()

// port
const PORT = 8090;

// dbConnection
dbConnection()

// body-Parser
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/category', categoryRouter)
app.use('/subcategory', subCatRouter)

app.listen(PORT, (err) => {
    if (err) {
        console.log('server Not Start')
    }
    console.log(`listing on port http://localhost:${PORT}`)
})