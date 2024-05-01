// Title: Simple Interest Calculation in JavaScript
// Explanation: This JavaScript code calculates the simple interest based on the principal amount, interest rate, and time period provided, and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Declare variables for principal amount, interest rate, and time period
var principal = 1000; // Principal amount ($)
var rate = 5; // Interest rate (% per year)
var time = 3; // Time period (years)

// Calculate simple interest using the formula: Interest = (Principal * Rate * Time) / 100
var interest = (principal * rate * time) / 100;

// Print the calculated interest to the console
console.log("Principal Amount: $" + principal);
console.log("Interest Rate: " + rate + "%");
console.log("Time Period: " + time + " years");
console.log("Simple Interest: $" + interest);
