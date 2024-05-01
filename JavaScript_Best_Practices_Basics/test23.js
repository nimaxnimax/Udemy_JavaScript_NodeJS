// Title: Sum of Numbers using For Loop in JavaScript
// Explanation: This JavaScript code calculates the sum of all numbers from 1 to a given positive integer using a for loop. It prints the sum to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to calculate the sum of numbers from 1 to n using a for loop
function sumOfNumbers(n) {
    var sum = 0; // Initialize sum variable
    for (var i = 1; i <= n; i++) { // Loop from 1 to n
        sum += i; // Add current number to sum
    }
    return sum; // Return the total sum
}

// Test the sumOfNumbers function with an example positive integer
var num = 10; // Example positive integer
console.log("Sum of numbers from 1 to", num + ":", sumOfNumbers(num)); // Print the result
