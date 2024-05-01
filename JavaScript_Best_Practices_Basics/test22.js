// Title: Countdown using While Loop in JavaScript
// Explanation: This JavaScript code demonstrates a countdown from a given positive integer to 1 using a while loop. It prints each number in the countdown to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to perform countdown using a while loop
function countdown(n) {
    while (n >= 1) { // While n is greater than or equal to 1
        console.log(n); // Print the current value of n
        n--; // Decrement n by 1
    }
}

// Test the countdown function with an example positive integer
var num = 5; // Example positive integer
console.log("Countdown from", num + ":");
countdown(num); // Call the function to perform the countdown

