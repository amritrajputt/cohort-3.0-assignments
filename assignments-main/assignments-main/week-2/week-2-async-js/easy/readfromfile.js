const { error } = require("console")
const fs = require("fs")

// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

fs.readFile("example.txt" , 'utf-8',(error,data) => {
    if(error)
        console.log(error);
        
    if(data)
    console.log(data);
    
})
