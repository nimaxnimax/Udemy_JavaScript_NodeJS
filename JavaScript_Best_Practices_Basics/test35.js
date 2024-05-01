const fs = require('fs');

// Function to store data in a file
function storeDataToFile(filePath, data) {
    return new Promise((resolve, reject) => {
        // Convert data to JSON string
        const jsonData = JSON.stringify(data, null, 2);

        // Write data to the file asynchronously
        fs.writeFile(filePath, jsonData, 'utf8', (error) => {
            if (error) {
                reject(error); // Reject with error if writing to file fails
            } else {
                resolve(); // Resolve if writing is successful
            }
        });
    });
}

// Example data to be stored in the file
const exampleData = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
};

// Example file path
const filePath = 'data.json';

// Usage example: Store data in a file
storeDataToFile(filePath, exampleData)
    .then(() => {
        console.log('Data successfully stored in', filePath);
    })
    .catch((error) => {
        console.error('An error occurred while storing data in the file:', error);
    });

