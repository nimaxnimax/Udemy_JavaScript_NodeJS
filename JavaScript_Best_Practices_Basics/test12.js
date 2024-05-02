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
var email3 = "adrian.adrian@email.com";

console.log("Email:", email1);
console.log("Is Valid:", validateEmail(email1));

console.log("Email:", email2);
console.log("Is Valid:", validateEmail(email2));

console.log("Email:", email3);
console.log("Is Valid:", validateEmail(email3));

// This regular expression in JavaScript is used to validate email addresses. Let's break it down:
// - `/^`: This indicates the start of the string.
// - `[^\s@]+`: Matches one or more characters that are not whitespace or '@'.
// - `@`: Matches the '@' symbol.
// - `[^\s@]+`: Matches one or more characters that are not whitespace or '@'.
// - `\.`: Matches a literal '.' (dot).
// - `[^\s@]+`: Matches one or more characters that are not whitespace or '@'.
// - `$/`: This indicates the end of the string.
// So, in summary, the regular expression matches strings that:
// 1. Start with one or more characters that are not whitespace or '@'.
// 2. Followed by an '@' symbol.
// 3. Followed by one or more characters that are not whitespace or '@'.
// 4. Followed by a dot '.'.
// 5. Followed by one or more characters that are not whitespace or '@'.
// 6. End of the string.
// This pattern essentially represents a simple validation for an email address format, ensuring it has some characters before and after '@', with a dot separating parts of the domain.

