// Title: Currency Converter in JavaScript
// Explanation: This JavaScript code converts an amount from one currency to another based on predefined exchange rates and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to convert currency
function convertCurrency(amount, fromCurrency, toCurrency) {
    // Define exchange rates (for demonstration purposes)
    var exchangeRates = {
        USD: 1,    // 1 USD = 1 USD (base currency)
        EUR: 0.82, // 1 USD = 0.82 EUR
        GBP: 0.73, // 1 USD = 0.73 GBP
        JPY: 110.25 // 1 USD = 110.25 JPY
    };

    // Convert amount to base currency (USD)
    var baseAmount = amount / exchangeRates[fromCurrency];

    // Convert base amount to target currency
    var convertedAmount = baseAmount * exchangeRates[toCurrency];

    return convertedAmount.toFixed(2); // Round to 2 decimal places
}

// Convert 100 USD to EUR
console.log("100 USD to EUR:", convertCurrency(100, "USD", "EUR") + " EUR");

// Convert 50 GBP to USD
console.log("50 GBP to USD:", convertCurrency(50, "GBP", "USD") + " USD");

// Convert 2000 JPY to EUR
console.log("2000 JPY to EUR:", convertCurrency(2000, "JPY", "EUR") + " EUR");

