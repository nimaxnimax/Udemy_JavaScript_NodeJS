// Title: Object Operations in JavaScript
// Explanation: This JavaScript code demonstrates various operations on objects including creating objects, accessing properties, adding properties, deleting properties, and iterating over object properties.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Create an object representing a person
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com"
};

// Access and print object properties
console.log("First Name:", person.firstName);
console.log("Last Name:", person["lastName"]);
console.log("Age:", person.age);
console.log("Email:", person.email);

// Add a new property to the object
person.city = "New York";

// Print the object after adding the new property
console.log("Object after adding a new property:", person);

// Delete a property from the object
delete person.email;

// Print the object after deleting the property
console.log("Object after deleting a property:", person);

// Iterate over object properties
console.log("Iterating over object properties:");
for (var key in person) {
    console.log(key + ":", person[key]);
}
