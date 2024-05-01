// Title: Vowel Counter in JavaScript
// Explanation: This JavaScript code counts the number of vowels (a, e, i, o, u) in a given string and prints the count to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to count the number of vowels in a string
function countVowels(str) {
    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    str = str.toLowerCase();
    // Define a regular expression to match vowels
    var vowelRegex = /[aeiou]/g;
    // Use the match() method to find all occurrences of vowels in the string
    var matches = str.match(vowelRegex);
    // Return the count of matches (number of vowels)
    return matches ? matches.length : 0;
}

// Test the countVowels function with example strings
var str1 = "Hello World";
var str2 = "OpenAI";
var str3 = "JavaScript";

console.log("\"" + str1 + "\" contains", countVowels(str1), "vowels.");
console.log("\"" + str2 + "\" contains", countVowels(str2), "vowels.");
console.log("\"" + str3 + "\" contains", countVowels(str3), "vowels.");
