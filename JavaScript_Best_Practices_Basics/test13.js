// Title: Shopping Cart Total Calculator in JavaScript
// Explanation: This JavaScript code calculates the total cost of items in a shopping cart by summing up their prices, including any applicable discounts, and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to calculate the total cost of items in a shopping cart
function calculateTotal(items) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
    }
    return total;
}

// Example shopping cart items with prices and quantities
var cartItems = [
    { name: "Product A", price: 10, quantity: 2 },
    { name: "Product B", price: 15, quantity: 1 },
    { name: "Product C", price: 20, quantity: 3 }
];

// Calculate and print the total cost of items in the shopping cart
console.log("Shopping Cart Items:", cartItems);
console.log("Total Cost:", calculateTotal(cartItems));
