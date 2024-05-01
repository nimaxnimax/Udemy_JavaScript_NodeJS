// Title: Asynchronous Operations with Async/Await in JavaScript
// Explanation: This JavaScript code demonstrates asynchronous operations using async/await syntax to fetch data from a mock API endpoint.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Mock function to simulate fetching data from an API
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "John Doe" };
            resolve(data);
        }, 2000); // Simulate a delay of 2 seconds
    });
}

// Async function to fetch and process data
async function processData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData(); // Wait for data to be fetched
        console.log("Data fetched:", data);
        // Process the fetched data
        console.log("Processing data...");
        console.log("Data processed successfully.");
    } catch (error) {
        console.error("An error occurred while fetching or processing data:", error);
    }
}

// Call the processData function
processData();

