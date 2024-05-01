const http = require('http');

// Function to check the response code of a website
function checkResponseCode(url) {
    return new Promise((resolve, reject) => {
        // Parse URL
        const parsedUrl = new URL(url);

        // Set options for the HTTP request
        const options = {
            hostname: parsedUrl.hostname,
            port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
            path: parsedUrl.pathname,
            method: 'GET',
            timeout: 5000 // Timeout in milliseconds (adjust as needed)
        };

        // Create the HTTP request
        const req = http.request(options, (res) => {
            // Resolve with the response code
            resolve(res.statusCode);
        });

        // Handle request errors
        req.on('error', (error) => {
            reject(error);
        });

        // Set a timeout for the request
        req.setTimeout(options.timeout, () => {
            req.abort(); // Abort the request if it takes longer than the timeout
            reject(new Error('Request timed out'));
        });

        // End the request
        req.end();
    });
}

// Usage example: Check the response code of google.com
const url = 'http://www.google.com';
checkResponseCode(url)
    .then((statusCode) => {
        console.log(`Response code of ${url}: ${statusCode}`);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });

