const express = require('express')
const app = express()
// Method Blocker

// Write a middleware that blocks all DELETE requests and responds with 403 Forbidden.

// All other methods should continue normally.
app.use((req,res,next) => {
    if(req.method == 'DELETE'){
        return res.status(403).send('Forbidden: DELETE requests are not allowed')
    }
    next()
})
app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});