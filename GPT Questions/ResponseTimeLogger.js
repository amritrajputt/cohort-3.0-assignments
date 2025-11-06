const express = require('express')
const app = express()
// Q7: Response Time Logger

// 🧩 Task:
// Create a middleware that logs how long each request took to process.

// ✅ Example Output:

// GET /users - 12ms

app.use((req,res,next) => {
    const time = Date.now()
    res.on('finish',() => {
        const duration = Date.now() - time
        console.log(`${req.method} ${req.url} - ${duration}ms`);
    })
    next()
})