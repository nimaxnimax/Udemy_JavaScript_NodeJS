// Title: Grade Checker with if-else-if in JavaScript
// Explanation: This JavaScript code checks the grade based on a given numerical score using if-else-if statements and prints the corresponding grade to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to check the grade based on a numerical score
function checkGrade(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else if (score >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
}

// Test the checkGrade function with example scores
var score1 = 95; // Example score
var score2 = 82; // Example score
var score3 = 70; // Example score

console.log("Score:", score1);
checkGrade(score1);

console.log("Score:", score2);
checkGrade(score2);

console.log("Score:", score3);
checkGrade(score3);

