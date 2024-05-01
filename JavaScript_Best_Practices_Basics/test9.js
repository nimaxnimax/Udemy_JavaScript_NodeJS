// Title: Factorial Calculator in JavaScript
// Explanation: This JavaScript code calculates the factorial of a given non-negative integer and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Test the factorial function with different values
var num1 = 5;
var num2 = 0;
var num3 = 10;

console.log("Factorial of", num1 + ":", factorial(num1));
console.log("Factorial of", num2 + ":", factorial(num2));
console.log("Factorial of", num3 + ":", factorial(num3));
