// Title: Simple Calculator in JavaScript
// Explanation: This JavaScript code implements a simple calculator that can perform basic arithmetic operations such as addition, subtraction, multiplication, and division on two numbers provided by the user.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to perform addition
function add(x, y) {
    return x + y;
}

// Function to perform subtraction
function subtract(x, y) {
    return x - y;
}

// Function to perform multiplication
function multiply(x, y) {
    return x * y;
}

// Function to perform division
function divide(x, y) {
    if (y === 0) {
        return "Error: Division by zero";
    }
    return x / y;
}

// Test the calculator functions
var num1 = 10;
var num2 = 5;

console.log("Addition:", num1, "+", num2, "=", add(num1, num2));
console.log("Subtraction:", num1, "-", num2, "=", subtract(num1, num2));
console.log("Multiplication:", num1, "*", num2, "=", multiply(num1, num2));
console.log("Division:", num1, "/", num2, "=", divide(num1, num2));

