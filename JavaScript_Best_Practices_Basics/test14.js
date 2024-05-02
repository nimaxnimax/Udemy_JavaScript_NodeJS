// Title: Password Strength Checker in JavaScript
// Explanation: This JavaScript code checks the strength of a password based on predefined criteria and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to check the strength of a password
function checkPasswordStrength(password) {
    // Define criteria for password strength
    var minLength = 8; // Minimum length
    var hasUpperCase = /[A-Z]/.test(password); // At least one uppercase letter
    var hasLowerCase = /[a-z]/.test(password); // At least one lowercase letter
    var hasDigit = /\d/.test(password); // At least one digit
    var hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password); // At least one special character

    // Calculate password strength score based on criteria
    var strengthScore = 0;
    if (password.length >= minLength) {
        strengthScore++;
    }
    if (hasUpperCase) {
        strengthScore++;
    }
    if (hasLowerCase) {
        strengthScore++;
    }
    if (hasDigit) {
        strengthScore++;
    }
    if (hasSpecialChar) {
        strengthScore++;
    }

    // Return password strength level based on score
    if (strengthScore === 5) {
        return "Strong";
    } else if (strengthScore >= 3) {
        return "Moderate";
    } else {
        return "Weak";
    }
}

// Test the checkPasswordStrength function with example passwords
var password1 = "Password123!";
var password2 = "weak";
var password3 = "ModeratePassword";

console.log("Password:", password1);
console.log("Strength:", checkPasswordStrength(password1));

console.log("Password:", password2);
console.log("Strength:", checkPasswordStrength(password2));

console.log("Password:", password3);
console.log("Strength:", checkPasswordStrength(password3));


