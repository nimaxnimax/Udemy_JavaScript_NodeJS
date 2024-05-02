// Title: Array Sum Calculator in JavaScript
// Explanation: This JavaScript code calculates the sum of all elements in an array of numbers and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to calculate the sum of elements in an array
function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Test the arraySum function with an array of numbers
var numbers = [5, 10, 15, 20, 25];
console.log("Array:", numbers);
console.log("Sum of Array Elements:", arraySum(numbers));
