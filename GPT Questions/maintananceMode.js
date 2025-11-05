const express = require('express')
const app = express()

// Write a middleware that temporarily disables all routes and responds with:

// 503 Service Unavailable — The server is under maintenance.
let isMaintainance = true
app.use((req,res,next) => {
    if(isMaintainance && req.path === '/user'){
        return res.send(503).send('Server under maintenance')
    }
    next()
})