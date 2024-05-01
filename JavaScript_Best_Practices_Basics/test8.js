// Title: Palindrome Checker in JavaScript
// Explanation: This JavaScript code checks if a given string is a palindrome (reads the same forwards and backwards) and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Reverse the string
    var reversedStr = cleanStr.split('').reverse().join('');
    // Check if the original and reversed strings are equal
    return cleanStr === reversedStr;
}

// Test the isPalindrome function
var testString1 = "A man, a plan, a canal, Panama!";
var testString2 = "Hello, World!";

console.log("Is \"" + testString1 + "\" a palindrome?", isPalindrome(testString1));
console.log("Is \"" + testString2 + "\" a palindrome?", isPalindrome(testString2));

