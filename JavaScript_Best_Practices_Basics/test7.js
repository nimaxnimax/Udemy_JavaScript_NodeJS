// Title: Random Number Generator in JavaScript
// Explanation: This JavaScript code generates a random number between a specified range and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to generate a random number within a specified range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number between 1 and 100
var randomNumber = generateRandomNumber(1, 100);

// Print the generated random number to the console
console.log("Random Number:", randomNumber);
