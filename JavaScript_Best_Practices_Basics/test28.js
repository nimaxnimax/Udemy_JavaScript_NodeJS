// Title: Username Validator in JavaScript
// Explanation: This JavaScript code validates a username based on certain criteria using string manipulation and boolean checks. It prints whether the username is valid or not to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to validate a username
function validateUsername(username) {
    // Criteria for a valid username: must contain only letters, numbers, underscores, and must be between 3 and 16 characters long
    var validCharacters = /^[a-zA-Z0-9_]+$/;
    var validLength = username.length >= 3 && username.length <= 16;

    if (validCharacters.test(username) && validLength) {
        console.log("Username '" + username + "' is valid.");
    } else {
        console.log("Username '" + username + "' is not valid.");
    }
}

// Test the validateUsername function with example usernames
var username1 = "user123"; // Example valid username
var username2 = "user-name"; // Example invalid username (contains a hyphen)
var username3 = "usr"; // Example invalid username (too short)

validateUsername(username1);
validateUsername(username2);
validateUsername(username3);

