// Title: Day of the Week Identifier using Switch Statement in JavaScript
// Explanation: This JavaScript code identifies the day of the week based on a given number (1 for Sunday, 2 for Monday, etc.) using a switch statement. It prints the corresponding day to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to identify the day of the week
function getDayOfWeek(dayNumber) {
    var day;
    switch (dayNumber) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid day number";
    }
    console.log("Day " + dayNumber + " corresponds to " + day + ".");
}

// Test the getDayOfWeek function with example day numbers
getDayOfWeek(1); // Example day number (Sunday)
getDayOfWeek(3); // Example day number (Tuesday)
getDayOfWeek(6); // Example day number (Friday)
getDayOfWeek(8); // Example invalid day number

