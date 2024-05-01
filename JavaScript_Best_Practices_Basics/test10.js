// Title: FizzBuzz Algorithm in JavaScript
// Explanation: This JavaScript code implements the FizzBuzz algorithm, which prints numbers from 1 to a specified limit, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to implement the FizzBuzz algorithm
function fizzBuzz(limit) {
    for (var i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Print numbers from 1 to 20 using the FizzBuzz algorithm
fizzBuzz(20);
