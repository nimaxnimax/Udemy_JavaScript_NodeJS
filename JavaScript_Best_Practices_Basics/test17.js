// Title: Temperature Converter in JavaScript
// Explanation: This JavaScript code converts temperatures between Celsius, Fahrenheit, and Kelvin scales and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to convert temperature between Celsius, Fahrenheit, and Kelvin
function convertTemperature(value, fromUnit, toUnit) {
    // Convert to Celsius as the intermediate unit
    var celsius;
    if (fromUnit === "C") {
        celsius = value;
    } else if (fromUnit === "F") {
        celsius = (value - 32) * (5 / 9);
    } else if (fromUnit === "K") {
        celsius = value - 273.15;
    }

    // Convert from Celsius to target unit
    var result;
    if (toUnit === "C") {
        result = celsius;
    } else if (toUnit === "F") {
        result = (celsius * 9 / 5) + 32;
    } else if (toUnit === "K") {
        result = celsius + 273.15;
    }

    return result.toFixed(2); // Round to 2 decimal places
}

// Convert 20 degrees Celsius to Fahrenheit
console.log("20°C to Fahrenheit:", convertTemperature(20, "C", "F") + "°F");

// Convert 70 degrees Fahrenheit to Celsius
console.log("70°F to Celsius:", convertTemperature(70, "F", "C") + "°C");

// Convert 300 Kelvin to Celsius
console.log("300K to Celsius:", convertTemperature(300, "K", "C") + "°C");

