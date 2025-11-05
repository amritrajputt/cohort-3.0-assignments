const express = require('express')
const app = express()
// Create a middleware that counts how many requests have
//  been made to the server since it started and logs the count 
//  for each incoming request.
let count = 0;
app.use((req,res,next) => {
    count++
    console.log("Request Count:", count);
    next()
})