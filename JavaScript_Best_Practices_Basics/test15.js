// Title: Simple To-Do List App in JavaScript
// Explanation: This JavaScript code implements a simple To-Do list application where users can add, remove, and display tasks.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Initialize an empty array to store tasks
var tasks = [];

// Function to add a new task to the list
function addTask(task) {
    tasks.push(task);
}

// Function to remove a task from the list
function removeTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
    } else {
        console.log("Invalid index. Task not removed.");
    }
}

// Function to display all tasks in the list
function displayTasks() {
    if (tasks.length === 0) {
        console.log("No tasks to display.");
    } else {
        console.log("Tasks:");
        tasks.forEach(function(task, index) {
            console.log(index + 1 + ". " + task);
        });
    }
}

// Add some initial tasks to the list
addTask("Finish homework");
addTask("Buy groceries");

// Display the initial list of tasks
displayTasks();

// Add a new task to the list
addTask("Clean the house");
console.log("Task added: Clean the house");

// Display the updated list of tasks
displayTasks();

// Remove a task from the list
removeTask(1); // Remove "Buy groceries"
console.log("Task removed at index 1");

// Display the updated list of tasks
displayTasks();

