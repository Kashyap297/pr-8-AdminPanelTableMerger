const express = require('express');
const dbConnection = require('./config/db');
const app = express()



// port
const PORT = 8090;

// dbConnection
dbConnection()

app.listen(PORT, (err) => {
    if(err){
        console.log('server Not Start')
    }
    console.log(`listing on port http://localhost:${PORT}`)
})