const express = require('express')
const app = express()
// 🧩 Task:
// Write a middleware that checks if the request Content-Type is 'application/json'.
// If not, respond with status 400 and the message:

// Bad Request: Only JSON data allowed.


// ✅ Hint: Use req.headers['content-type'].
app.use((req,res,next) => {
    const contentType = req.headers['content-type']
    if(contentType !== 'application/json'){
        return res.status(400).send('BadRequest: Only JSON data allowed');
    }
    next()
})