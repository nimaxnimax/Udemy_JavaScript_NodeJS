// Title: Temperature Converter with Function and if-else in JavaScript
// Explanation: This JavaScript code converts temperature from Celsius to Fahrenheit or Fahrenheit to Celsius based on user input using a function with if-else statements, and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to convert temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to convert temperature from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Example usage of the temperature conversion functions
var temperature = 25; // Example temperature value
var unit = "C"; // Example temperature unit (C for Celsius, F for Fahrenheit)

if (unit === "C") {
    console.log(temperature + "°C is equal to " + celsiusToFahrenheit(temperature) + "°F");
} else if (unit === "F") {
    console.log(temperature + "°F is equal to " + fahrenheitToCelsius(temperature) + "°C");
} else {
    console.log("Invalid temperature unit. Please use 'C' for Celsius or 'F' for Fahrenheit.");
}

