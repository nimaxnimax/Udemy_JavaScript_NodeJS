const fs = require('fs');

// Function to read the contents of a file
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        // Read the file asynchronously
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                reject(error); // Reject with error if reading file fails
            } else {
                resolve(data); // Resolve with file contents if reading is successful
            }
        });
    });
}

// Usage example: Read the contents of a file
const filePath = 'example.txt'; // Path to the file to be read
readFile(filePath)
    .then((fileContents) => {
        console.log(`Contents of ${filePath}:`);
        console.log(fileContents);
    })
    .catch((error) => {
        console.error('An error occurred while reading the file:', error);
    });
