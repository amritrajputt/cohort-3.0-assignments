const express = require('express')
const app = express()
// Time Logger

// Create a middleware that logs the current date and time of every incoming request.

// Example console output:

// [2025-11-05T20:32:00Z] GET /user

app.use((req, res, next) => {
   const date = new Date()
const dateToday = date.getDate()
const month = date.getMonth()+1
const year = date.getFullYear()
let hour = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()


let TodaysDateAndTime = `${year}-${month}-${dateToday}T${hour}:${min}:${sec} ${req.method} ${req.url}`
console.log(TodaysDateAndTime);
    next()
})
app.listen('3000',()=>{
    console.log("server is running...")
    
})

