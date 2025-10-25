const { error } = require("console")
const fs = require("fs")
// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

function fileCleaner(path) {
    fs.readFile(path, "utf-8", (error, data) => {
        if (error) {
            console.error("Something went wrong:", error);
            return;
        }
        const cleanedData = data.replace(/\s+/g, ' ').trim();

        fs.writeFile(path, cleanedData, (error) => {
            if (error) {
                console.error("Cannot write to file:", error);
                return;
            }
            console.log("File cleaned successfully!");
        });
    });
}

fileCleaner("example.txt");
