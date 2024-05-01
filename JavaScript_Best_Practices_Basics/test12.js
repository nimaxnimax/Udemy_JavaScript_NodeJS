// Title: Email Validation in JavaScript
// Explanation: This JavaScript code validates an email address using a regular expression and prints whether the email address is valid or not to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to validate an email address
function validateEmail(email) {
    // Regular expression for email validation
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Test the validateEmail function with example email addresses
var email1 = "user@example.com";
var email2 = "invalid_email.com";

console.log("Email:", email1);
console.log("Is Valid:", validateEmail(email1));

console.log("Email:", email2);
console.log("Is Valid:", validateEmail(email2));

