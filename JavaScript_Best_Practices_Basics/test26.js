// Title: Data Type Checker in JavaScript
// Explanation: This JavaScript code checks the data type of a given value using if-else-if statements and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to check the data type of a value
function checkDataType(value) {
    if (typeof value === "string") {
        console.log("Type: String");
    } else if (typeof value === "number") {
        console.log("Type: Number");
    } else if (typeof value === "boolean") {
        console.log("Type: Boolean");
    } else if (typeof value === "undefined") {
        console.log("Type: Undefined");
    } else if (typeof value === "object" && value !== null) {
        console.log("Type: Object");
    } else if (typeof value === "function") {
        console.log("Type: Function");
    } else {
        console.log("Type: Unknown");
    }
}

// Test the checkDataType function with example values
var value1 = "Hello"; // Example string
var value2 = 123; // Example number
var value3 = true; // Example boolean
var value4; // Example undefined
var value5 = { key: "value" }; // Example object
var value6 = function() {}; // Example function
var value7 = null; // Example null

console.log("Value:", value1);
checkDataType(value1);

console.log("Value:", value2);
checkDataType(value2);

console.log("Value:", value3);
checkDataType(value3);

console.log("Value:", value4);
checkDataType(value4);

console.log("Value:", value5);
checkDataType(value5);

console.log("Value:", value6);
checkDataType(value6);

console.log("Value:", value7);
checkDataType(value7);
