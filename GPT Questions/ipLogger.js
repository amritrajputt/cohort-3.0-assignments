const express = require('express')
const app = express()
// Q5: IP Logger

// 🧩 Task:
// Create a middleware that logs the client's IP address and the route they accessed.

// ✅ Example Output:

// Client IP: 127.0.0.1 accessed /home
app.use((req,res,next) => {
   console.log(`Client IP: ${req.ip} accessed ${req.path}`);
  next();
})