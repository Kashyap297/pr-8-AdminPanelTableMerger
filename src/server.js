const express = require('express');
const dbConnection = require('./config/db');
const categoryRouter = require('./routes/categoryRoute');
const app = express()

// port
const PORT = 8090;

// dbConnection
dbConnection()

// body-Parser
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/category', categoryRouter)

app.listen(PORT, (err) => {
    if (err) {
        console.log('server Not Start')
    }
    console.log(`listing on port http://localhost:${PORT}`)
})