// Title: Array Operations in JavaScript
// Explanation: This JavaScript code demonstrates various operations on arrays including adding elements, deleting elements, and manipulating array elements.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Add an element to the end of the array
numbers.push(6);

// Print the array
console.log("Array after adding an element:", numbers);

// Delete an element from the end of the array
numbers.pop();

// Print the array
console.log("Array after deleting an element:", numbers);

// Add an element to the beginning of the array
numbers.unshift(0);

// Print the array
console.log("Array after adding an element to the beginning:", numbers);

// Delete an element from the beginning of the array
numbers.shift();

// Print the array
console.log("Array after deleting an element from the beginning:", numbers);

// Access and manipulate array elements
var firstElement = numbers[0]; // Access the first element
console.log("First element of the array:", firstElement);

numbers[1] = 20; // Change the value of the second element
console.log("Array after changing the value of the second element:", numbers);

// Remove an element from a specific index
var removedElement = numbers.splice(2, 1); // Remove one element starting from index 2
console.log("Removed element from index 2:", removedElement);
console.log("Array after removing element from index 2:", numbers);

// Insert an element at a specific index
numbers.splice(2, 0, 30); // Insert 30 at index 2
console.log("Array after inserting element at index 2:", numbers);

// Concatenate arrays
var moreNumbers = [7, 8, 9];
var combinedArray = numbers.concat(moreNumbers); // Concatenate numbers and moreNumbers arrays
console.log("Combined array:", combinedArray);

