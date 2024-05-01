// Title: Voting Eligibility Checker in JavaScript
// Explanation: This JavaScript code checks if a person is eligible to vote based on their age using a boolean variable and if-else statements. It prints whether the person is eligible to vote to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to check voting eligibility based on age
function checkVotingEligibility(age) {
    var isEligible = age >= 18; // Check if age is 18 or older
    if (isEligible) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote yet.");
    }
}

// Test the checkVotingEligibility function with example ages
var age1 = 20; // Example age (eligible to vote)
var age2 = 16; // Example age (not eligible to vote)

checkVotingEligibility(age1);
checkVotingEligibility(age2);

