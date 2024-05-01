// Title: Countdown Timer in JavaScript
// Explanation: This JavaScript code creates a simple countdown timer that counts down from a specified number of seconds and prints the remaining time to the console every second until it reaches zero.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to start the countdown timer
function startTimer(seconds) {
    var timer = setInterval(function() {
        if (seconds > 0) {
            console.log("Time remaining:", seconds, "seconds");
            seconds--;
        } else {
            clearInterval(timer);
            console.log("Countdown complete!");
        }
    }, 1000); // Interval: 1 second (1000 milliseconds)
}

// Start the countdown timer with 10 seconds
startTimer(10);

