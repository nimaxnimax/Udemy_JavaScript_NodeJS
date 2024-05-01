

![alt text](image.jpg)

Udemy Course >> JavaScript and NodeJS Best Practices - Programming Basics

Mastering Basics of JavaScript and Node.js: Best Practices for Solid Foundations in Client and Server Side Programming

Tips/Tricks/Notes/Commands URL Link: https://github.com/nimaxnimax/Udemy_JavaScript_NodeJS

Instructor & Courses >> https://www.udemy.com/user/adrian-fischer-infotech/

JavaScript is a versatile programming language primarily used for web development, enabling dynamic and interactive features on websites. It's executed on the client side by web browsers, allowing manipulation of webpage content, behavior, and presentation. Node.js, on the other hand, is a runtime environment that allows JavaScript to be executed on the server side. It utilizes an event-driven, non-blocking I/O model, making it efficient for building scalable network applications. Node.js extends JavaScript's capabilities beyond the browser, enabling server-side scripting, command-line tools, and backend services, making it a popular choice for building web servers and APIs.


**********

JavaScript and Node.js

JavaScript:

- Versatile programming language primarily used for web development.
- Executes on the client side by web browsers.
- Enables dynamic and interactive features on websites.
- Manipulates webpage content, behavior, and presentation.
- Used for frontend development, including UI/UX design and client-side scripting.
- Supports asynchronous programming and event-driven architecture.

Node.js:

- Runtime environment for executing JavaScript on the server side.
- Allows JavaScript to be used for server-side scripting.
- Built on Chrome's V8 JavaScript engine.
- Supports non-blocking, event-driven I/O operations.
- Ideal for building scalable network applications.
- Enables backend development, including web servers, APIs, and services.
- Extends JavaScript's capabilities beyond the browser.


**********

Advantages:

JavaScript and Node.js together offer a powerful combination for full-stack development, providing numerous advantages:

- **Unified Language**: Seamlessly transition between frontend and backend development using JavaScript, streamlining development workflow and reducing context switching.

- **Efficiency**: Leverage asynchronous, non-blocking I/O operations in Node.js for efficient handling of concurrent requests, ensuring optimal performance and scalability.

- **Rich Ecosystem**: Tap into the vast ecosystem of libraries, frameworks, and tools available for both JavaScript and Node.js, enabling rapid development and deployment of web applications.

- **Cross-Platform Compatibility**: Develop applications that run consistently across different environments, including web browsers and server environments, thanks to JavaScript's cross-platform support.

- **Community Support**: Benefit from the extensive and active developer communities surrounding both JavaScript and Node.js, providing resources, tutorials, and assistance for solving development challenges.

- **Flexibility**: With JavaScript and Node.js, developers have the flexibility to build a wide range of applications, from interactive web interfaces to scalable server-side services, using a unified language and ecosystem.


**********

Disadvantages:

While JavaScript and Node.js offer many advantages, there are also some disadvantages to consider:

- **Single Threaded Nature**: Node.js operates on a single thread, which can lead to performance bottlenecks if not managed properly, especially for CPU-intensive tasks.

- **Callback Hell**: Asynchronous programming in Node.js often relies on callbacks, which can result in deeply nested code structures known as "callback hell," making code difficult to read and maintain.

- **Security Concerns**: JavaScript running on the client side can be vulnerable to various security threats, such as cross-site scripting (XSS) attacks, if not properly sanitized and validated.

- **Limited Browser Support for Node.js APIs**: While Node.js provides access to a wide range of APIs for server-side development, these APIs are not available in web browsers, limiting their usefulness for client-side scripting.

- **Learning Curve**: Mastering both JavaScript and Node.js requires a significant investment of time and effort, particularly for beginners who may need to learn asynchronous programming concepts and server-side development practices.

- **Dependency Management**: Managing dependencies with npm (Node Package Manager) can introduce complexities, such as version conflicts and security vulnerabilities, if not carefully monitored and maintained.

- **Performance Overhead**: JavaScript's dynamic typing and runtime interpretation can lead to performance overhead compared to statically typed languages, particularly in high-performance computing scenarios.


**********

Who Should Learn?!

Learning JavaScript and Node.js is valuable for various individuals and for diverse reasons:

- **Web Developers**: They can build interactive and dynamic web applications using JavaScript for the frontend and Node.js for the backend, offering a full-stack development capability.

- **Software Engineers**: Understanding JavaScript and Node.js equips them with versatile skills applicable to a wide range of projects, from web development to server-side scripting.

- **Students**: Learning JavaScript and Node.js provides a solid foundation in modern programming concepts and practices, enhancing their employability and career prospects in the tech industry.

- **Frontend Developers**: Transitioning to full-stack development with Node.js allows frontend developers to broaden their skill set and take on more comprehensive projects.

- **Entrepreneurs**: They can develop their own web-based products or services using JavaScript and Node.js, reducing dependency on external developers and streamlining the development process.

- **Tech Enthusiasts**: Individuals passionate about technology can explore the capabilities of JavaScript and Node.js to create innovative projects and contribute to the open-source community.

- **Career Changers**: Switching to a career in web development or software engineering is facilitated by learning JavaScript and Node.js, as these skills are in high demand in the job market.

- **Freelancers**: Mastering JavaScript and Node.js enables freelancers to offer a broader range of services to clients, from frontend website development to backend server-side scripting.

Anyone interested in modern web development, building scalable applications, or pursuing a career in software engineering can benefit from learning JavaScript and Node.js, as these technologies are widely used and offer vast opportunities for growth and innovation.


**********

VSCode and Node.js

Visual Studio Code (VSCode) is a free, open-source code editor developed by Microsoft. It's highly customizable, lightweight, and supports various programming languages and extensions, making it a popular choice among developers for writing code, debugging, and collaborating on projects.

Node.js Installer, on the other hand, is an executable file provided by the Node.js project to install Node.js runtime and npm (Node Package Manager) on your system. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing you to run JavaScript code outside of a web browser, typically on the server side.

To install VSCode:

1. Visit the official Visual Studio Code website at https://code.visualstudio.com/.
2. Click on the "Download" button to download the installer for your operating system (Windows, macOS, or Linux).
3. Once the download is complete, run the installer and follow the on-screen instructions to install VSCode on your system.
4. After installation, you can launch VSCode from your system's application menu or by searching for "Visual Studio Code" in the search bar.

To install Node.js using the Node.js Installer:

1. Visit the official Node.js website at https://nodejs.org/.
2. On the homepage, you'll see the "Download" button. Click on it to download the Node.js Installer for your operating system (Windows, macOS, or Linux).
3. Run the downloaded installer and follow the installation wizard.
4. During the installation process, you can choose to include npm (Node Package Manager) by selecting the checkbox.
5. Once the installation is complete, you can verify that Node.js and npm are installed correctly by opening a command prompt or terminal and typing `node -v` and `npm -v` respectively. You should see the versions of Node.js and npm printed in the console.

After installing both VSCode and Node.js, you'll have a powerful development environment for writing, debugging, and running JavaScript code, whether it's for frontend web development with browsers or backend development with Node.js.


**********

Test1

Title: "Printing 'Hello, World!' to the Console"

Explanation: This code demonstrates how to print the classic "Hello, World!" message to the console using JavaScript.

```javascript
// Explanation: Printing 'Hello, World!' to the Console
// This code uses the console.log() function to print the message "Hello, World!" to the console.

// Print "Hello, World!" to the console
console.log("Hello, World!");
```

When you run this code in a JavaScript environment (like a browser console or Node.js), you'll see "Hello, World!" printed in the console.


Title: "Printing 'Hello, World!' to the Browser Console"

Explanation: This HTML and JavaScript code demonstrates how to print the message "Hello, World!" to the browser console.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Printing 'Hello, World!' to the Browser Console</title>
</head>
<body>
    <script>
        // Explanation: Printing 'Hello, World!' to the Browser Console
        // This code uses the console.log() function to print the message "Hello, World!" to the browser console.

        // Print "Hello, World!" to the browser console
        console.log("Hello, World!");
    </script>
</body>
</html>
```

When you open this HTML file in a web browser and open the browser's developer tools, you'll see "Hello, World!" printed in the console.


**********

Test2

**********

Title: "Variable Printing in Node.js"

Explanation: This Node.js script demonstrates how to declare a variable, assign it a value, and print its value to the console.

Example Node.js Code:
```javascript
// Title: Variable Printing in Node.js
// Explanation: This Node.js script demonstrates how to declare a variable, assign it a value, and print its value to the console.
// How to Run: Save the code to a file with a .js extension (e.g., variable.js). Then, open a terminal or command prompt, navigate to the directory containing the JavaScript file, and run the file using the node command (node variable.js).

// Declare a variable named 'message' and assign it the value "Hello, World!"
var message = "Hello, World!";

// Print the value of the 'message' variable to the console
console.log("Message:", message);
```

Explanation:

- This Node.js script declares a variable named `message` using the `var` keyword and assigns it the value `"Hello, World!"`.
- The `console.log()` function is used to print the value of the `message` variable to the console.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- To run the script, save the provided JavaScript code to a file with a `.js` extension (e.g., `variable.js`), open a terminal or command prompt, navigate to the directory containing the JavaScript file, and execute the file using the `node` command (`node variable.js`).
- You should see "Message: Hello, World!" printed to the console when you run the script.


**********

Test3

**********

Title: "Variable Operation in Node.js"

Explanation: This Node.js script demonstrates how to declare variables for numbers, perform arithmetic operations with them, and print the results to the console.

Example Node.js Code:
```javascript
// Title: Variable Operation in Node.js
// Explanation: This Node.js script demonstrates how to declare variables for numbers, perform arithmetic operations with them, and print the results to the console.
// How to Run: Save the code to a file with a .js extension (e.g., operation.js). Then, open a terminal or command prompt, navigate to the directory containing the JavaScript file, and run the file using the node command (node operation.js).

// Declare variables for numbers
var num1 = 10;
var num2 = 5;

// Perform arithmetic operations with variables
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;

// Print the results of arithmetic operations to the console
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
```

Explanation:

- This Node.js script declares variables `num1` and `num2` for numbers and assigns them values `10` and `5`, respectively.
- Arithmetic operations (addition, subtraction, multiplication, division) are performed with the variables `num1` and `num2`, and the results are stored in variables `sum`, `difference`, `product`, and `quotient`.
- The `console.log()` function is used to print the results of arithmetic operations to the console.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- To run the script, save the provided JavaScript code to a file with a `.js` extension (e.g., `operation.js`), open a terminal or command prompt, navigate to the directory containing the JavaScript file, and execute the file using the `node` command (`node operation.js`).
- You should see the results of arithmetic operations printed to the console when you run the script.


**********

Test4

**********

Title: "Temperature Conversion in JavaScript"

Explanation: This JavaScript code converts a temperature from Celsius to Fahrenheit using a simple formula and prints the result to the console.

Example JavaScript Code:
```javascript
// Title: Temperature Conversion in JavaScript
// Explanation: This JavaScript code converts a temperature from Celsius to Fahrenheit using a simple formula and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Declare a variable for temperature in Celsius
var celsius = 20;

// Convert temperature from Celsius to Fahrenheit
var fahrenheit = (celsius * 9/5) + 32;

// Print the result of temperature conversion to the console
console.log("Temperature in Celsius:", celsius);
console.log("Temperature in Fahrenheit:", fahrenheit);
```

Explanation:

- This JavaScript code declares a variable `celsius` and assigns it the value `20`, representing a temperature in Celsius.
- The temperature is then converted from Celsius to Fahrenheit using the formula `(celsius * 9/5) + 32`, and the result is stored in a variable `fahrenheit`.
- The `console.log()` function is used to print the original temperature in Celsius and the converted temperature in Fahrenheit to the console.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to see the result of temperature conversion printed to the console.


**********

Test5

**********

Title: "Simple Interest Calculation in JavaScript"

Explanation: This JavaScript code calculates the simple interest based on the principal amount, interest rate, and time period provided, and prints the result to the console.

Example JavaScript Code:
```javascript
// Title: Simple Interest Calculation in JavaScript
// Explanation: This JavaScript code calculates the simple interest based on the principal amount, interest rate, and time period provided, and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Declare variables for principal amount, interest rate, and time period
var principal = 1000; // Principal amount ($)
var rate = 5; // Interest rate (% per year)
var time = 3; // Time period (years)

// Calculate simple interest using the formula: Interest = (Principal * Rate * Time) / 100
var interest = (principal * rate * time) / 100;

// Print the calculated interest to the console
console.log("Principal Amount: $" + principal);
console.log("Interest Rate: " + rate + "%");
console.log("Time Period: " + time + " years");
console.log("Simple Interest: $" + interest);
```

Explanation:

- This JavaScript code declares variables `principal`, `rate`, and `time` representing the principal amount, interest rate, and time period, respectively.
- The simple interest is calculated using the formula: `Interest = (Principal * Rate * Time) / 100`.
- The calculated interest is printed to the console along with the values of the principal amount, interest rate, and time period.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to see the calculated simple interest printed to the console.


**********

Test6

**********

Title: "Countdown Timer in JavaScript"

Explanation: This JavaScript code creates a simple countdown timer that counts down from a specified number of seconds and prints the remaining time to the console every second until it reaches zero.

Example JavaScript Code:
```javascript
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
```

Explanation:

- This JavaScript code defines a function `startTimer` that takes a parameter `seconds`, representing the number of seconds for the countdown timer.
- Inside the `startTimer` function, a timer is created using `setInterval()` to execute a function every second (1000 milliseconds).
- Within the timer function, it checks if there are remaining seconds. If yes, it prints the remaining time to the console and decrements the `seconds` variable. If the countdown reaches zero, the timer is stopped using `clearInterval()` and a message indicating the countdown completion is printed.
- The `startTimer` function is called with an initial value of 10 seconds to start the countdown timer.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to see the countdown timer in action.


**********

Test7

**********

Title: "Random Number Generator in JavaScript"

Explanation: This JavaScript code generates a random number between a specified range and prints the result to the console.

Example JavaScript Code:
```javascript
// Title: Random Number Generator in JavaScript
// Explanation: This JavaScript code generates a random number between a specified range and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to generate a random number within a specified range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random number between 1 and 100
var randomNumber = generateRandomNumber(1, 100);

// Print the generated random number to the console
console.log("Random Number:", randomNumber);
```

Explanation:

- This JavaScript code defines a function `generateRandomNumber` that takes two parameters `min` and `max`, representing the minimum and maximum values of the desired range.
- Inside the `generateRandomNumber` function, `Math.random()` is used to generate a random decimal number between 0 (inclusive) and 1 (exclusive). This value is then scaled and shifted to fall within the specified range using multiplication and addition.
- The `Math.floor()` function is used to round down the result to the nearest integer, ensuring that the generated number is an integer within the specified range.
- The `generateRandomNumber` function is called with a range of 1 to 100 to generate a random number between 1 and 100.
- The generated random number is printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to see the generated random number printed to the console.


**********

Test8

**********

Title: "Palindrome Checker in JavaScript"

Explanation: This JavaScript code checks if a given string is a palindrome (reads the same forwards and backwards) and prints the result to the console.

Example JavaScript Code:
```javascript
// Title: Palindrome Checker in JavaScript
// Explanation: This JavaScript code checks if a given string is a palindrome (reads the same forwards and backwards) and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Reverse the string
    var reversedStr = cleanStr.split('').reverse().join('');
    // Check if the original and reversed strings are equal
    return cleanStr === reversedStr;
}

// Test the isPalindrome function
var testString1 = "A man, a plan, a canal, Panama!";
var testString2 = "Hello, World!";

console.log("Is \"" + testString1 + "\" a palindrome?", isPalindrome(testString1));
console.log("Is \"" + testString2 + "\" a palindrome?", isPalindrome(testString2));
```

Explanation:

- This JavaScript code defines a function `isPalindrome` that takes a string `str` as input and returns `true` if the string is a palindrome (reads the same forwards and backwards), and `false` otherwise.
- Inside the `isPalindrome` function, non-alphanumeric characters are removed from the input string using a regular expression, and the string is converted to lowercase.
- The cleaned string is then reversed using the `split`, `reverse`, and `join` methods.
- The function returns `true` if the original and reversed strings are equal, indicating that the input string is a palindrome.
- The `isPalindrome` function is tested with two example strings (`testString1` and `testString2`), and the results are printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to see the results of the palindrome checks printed to the console.


**********

Test9

**********

Title: "Factorial Calculator in JavaScript"

Explanation: This JavaScript code calculates the factorial of a given non-negative integer and prints the result to the console.

Example JavaScript Code:
```javascript
// Title: Factorial Calculator in JavaScript
// Explanation: This JavaScript code calculates the factorial of a given non-negative integer and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Test the factorial function with different values
var num1 = 5;
var num2 = 0;
var num3 = 10;

console.log("Factorial of", num1 + ":", factorial(num1));
console.log("Factorial of", num2 + ":", factorial(num2));
console.log("Factorial of", num3 + ":", factorial(num3));
```

Explanation:

- This JavaScript code defines a recursive function `factorial` that calculates the factorial of a given non-negative integer `n`.
- If `n` is 0 or 1, the factorial is defined as 1.
- For other values of `n`, the factorial is calculated recursively by multiplying `n` with the factorial of `n - 1`.
- The `factorial` function is tested with different input values (`num1`, `num2`, `num3`), and the results are printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to see the results of the factorial calculations printed to the console.


**********

Test10

**********

Title: "FizzBuzz Algorithm in JavaScript"

Explanation: This JavaScript code implements the FizzBuzz algorithm, which prints numbers from 1 to a specified limit, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".

Example JavaScript Code:
```javascript
// Title: FizzBuzz Algorithm in JavaScript
// Explanation: This JavaScript code implements the FizzBuzz algorithm, which prints numbers from 1 to a specified limit, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to implement the FizzBuzz algorithm
function fizzBuzz(limit) {
    for (var i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Print numbers from 1 to 20 using the FizzBuzz algorithm
fizzBuzz(20);
```

Explanation:

- This JavaScript code defines a function `fizzBuzz` that takes a parameter `limit` representing the upper limit of numbers to print.
- Inside the `fizzBuzz` function, a loop is used to iterate from 1 to the specified `limit`.
- For each number in the loop, if the number is divisible by both 3 and 5, "FizzBuzz" is printed. If it's divisible by 3 only, "Fizz" is printed. If it's divisible by 5 only, "Buzz" is printed. Otherwise, the number itself is printed.
- The `fizzBuzz` function is called with a limit of 20 to print numbers from 1 to 20 using the FizzBuzz algorithm.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to see the FizzBuzz output printed to the console.


**********

Test11

**********

Title: "Array Sum Calculator in JavaScript"

Explanation: This JavaScript code calculates the sum of all elements in an array of numbers and prints the result to the console.

Example JavaScript Code:
```javascript
// Title: Array Sum Calculator in JavaScript
// Explanation: This JavaScript code calculates the sum of all elements in an array of numbers and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to calculate the sum of elements in an array
function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Test the arraySum function with an array of numbers
var numbers = [5, 10, 15, 20, 25];
console.log("Array:", numbers);
console.log("Sum of Array Elements:", arraySum(numbers));
```

Explanation:

- This JavaScript code defines a function `arraySum` that takes an array `arr` of numbers as input and calculates the sum of all elements in the array.
- Inside the `arraySum` function, a variable `sum` is initialized to 0. Then, a loop iterates through each element of the array and adds it to the `sum`.
- After iterating through all elements, the `sum` of the array is returned.
- The `arraySum` function is tested with an array of numbers (`numbers`), and the array along with the sum of its elements is printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to see the sum of array elements printed to the console.


**********

Test12

**********

Title: "Email Validation in JavaScript"

Explanation: This JavaScript code validates an email address using a regular expression and prints whether the email address is valid or not to the console.

Example JavaScript Code:
```javascript
// Title: Email Validation in JavaScript
// Explanation: This JavaScript code validates an email address using a regular expression and prints whether the email address is valid or not to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to validate an email address
function validateEmail(email) {
    // Regular expression for email validation
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Test the validateEmail function with example email addresses
var email1 = "user@example.com";
var email2 = "invalid_email.com";

console.log("Email:", email1);
console.log("Is Valid:", validateEmail(email1));

console.log("Email:", email2);
console.log("Is Valid:", validateEmail(email2));
```

Explanation:

- This JavaScript code defines a function `validateEmail` that takes an email address `email` as input and uses a regular expression to validate whether the email address is in a valid format.
- The regular expression `^[^\s@]+@[^\s@]+\.[^\s@]+$` ensures that the email address contains exactly one "@" symbol, at least one character before and after "@", and a valid domain after the "@" symbol.
- The `test()` method of the regular expression object is used to check if the email address matches the regular expression pattern, and `true` or `false` is returned accordingly.
- The `validateEmail` function is tested with example email addresses (`email1` and `email2`), and the email address along with its validity status is printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to see the validation results printed to the console.


**********

Test13

**********

Title: "Shopping Cart Total Calculator in JavaScript"

Explanation: This JavaScript code calculates the total cost of items in a shopping cart by summing up their prices, including any applicable discounts, and prints the result to the console.

Example JavaScript Code:
```javascript
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
```

Explanation:

- This JavaScript code defines a function `calculateTotal` that takes an array `items` representing the items in a shopping cart. Each item in the array contains properties `name`, `price`, and `quantity`.
- Inside the `calculateTotal` function, a variable `total` is initialized to 0. Then, a loop iterates through each item in the shopping cart, calculates the total cost of each item (price multiplied by quantity), and adds it to the `total`.
- The `calculateTotal` function returns the total cost of all items in the shopping cart.
- Example shopping cart items (`cartItems`) with prices and quantities are provided.
- The total cost of items in the shopping cart is calculated using the `calculateTotal` function and printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to see the total cost of items in the shopping cart printed to the console.


**********

Test14

**********

Title: "Password Strength Checker in JavaScript"

Explanation: This JavaScript code checks the strength of a password based on predefined criteria and prints the result to the console.

Example JavaScript Code:
```javascript
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
```

Explanation:

- This JavaScript code defines a function `checkPasswordStrength` that takes a password string as input and checks its strength based on predefined criteria.
- The criteria for password strength include:
  - Minimum length of 8 characters (`minLength`)
  - Presence of at least one uppercase letter (`hasUpperCase`)
  - Presence of at least one lowercase letter (`hasLowerCase`)
  - Presence of at least one digit (`hasDigit`)
  - Presence of at least one special character (`hasSpecialChar`)
- The function calculates a password strength score based on these criteria and returns the password strength level ("Weak", "Moderate", or "Strong").
- Example passwords (`password1`, `password2`, `password3`) are tested using the `checkPasswordStrength` function, and the password along with its strength level is printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to see the strength of example passwords printed to the console.


**********

Test15

**********

Title: "Simple To-Do List App in JavaScript"

Explanation: This JavaScript code implements a simple To-Do list application where users can add, remove, and display tasks.

Example JavaScript Code:
```javascript
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
```

Explanation:

- This JavaScript code implements a simple To-Do list application using arrays and functions.
- An empty array `tasks` is initialized to store tasks.
- Three functions are defined:
  - `addTask(task)`: Adds a new task to the list by pushing it into the `tasks` array.
  - `removeTask(index)`: Removes a task from the list based on its index using the `splice()` method.
  - `displayTasks()`: Displays all tasks in the list using a loop and `console.log()`.
- Initial tasks are added to the list using the `addTask` function.
- The list of tasks is displayed using the `displayTasks` function.
- A new task is added to the list using the `addTask` function.
- The updated list of tasks is displayed again.
- One task is removed from the list using the `removeTask` function.
- The final list of tasks is displayed after the removal.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to interact with the To-Do list application.


**********

Test16

**********

Title: "Currency Converter in JavaScript"

Explanation: This JavaScript code converts an amount from one currency to another based on predefined exchange rates and prints the result to the console.

Example JavaScript Code:
```javascript
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
```

Explanation:

- This JavaScript code defines a function `convertCurrency` that takes three parameters: `amount` (the amount to convert), `fromCurrency` (the currency to convert from), and `toCurrency` (the currency to convert to).
- Predefined exchange rates are stored in the `exchangeRates` object, where 1 USD is the base currency.
- The `convertCurrency` function first converts the `amount` to the base currency (USD) by dividing it by the exchange rate of the `fromCurrency`.
- Then, it converts the base amount to the target currency by multiplying it by the exchange rate of the `toCurrency`.
- The converted amount is returned, rounded to 2 decimal places using `toFixed(2)`.
- Example conversions are performed and printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to perform currency conversions.


**********

Test17

**********

Title: "Temperature Converter in JavaScript"

Explanation: This JavaScript code converts temperatures between Celsius, Fahrenheit, and Kelvin scales and prints the result to the console.

Example JavaScript Code:
```javascript
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
```

Explanation:

- This JavaScript code defines a function `convertTemperature` that takes three parameters: `value` (the temperature value to convert), `fromUnit` (the unit to convert from), and `toUnit` (the unit to convert to).
- The function first converts the input temperature to Celsius as an intermediate step.
- Then, it converts the temperature from Celsius to the target unit based on the provided `toUnit`.
- Conversion formulas are used for each unit conversion (e.g., Celsius to Fahrenheit, Fahrenheit to Celsius, etc.).
- The converted temperature is returned, rounded to 2 decimal places using `toFixed(2)`.
- Example temperature conversions are performed and printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to perform temperature conversions.


**********

Test18

**********

Title: "Simple Calculator in JavaScript"

Explanation: This JavaScript code implements a simple calculator that can perform basic arithmetic operations such as addition, subtraction, multiplication, and division on two numbers provided by the user.

Example JavaScript Code:
```javascript
// Title: Simple Calculator in JavaScript
// Explanation: This JavaScript code implements a simple calculator that can perform basic arithmetic operations such as addition, subtraction, multiplication, and division on two numbers provided by the user.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to perform addition
function add(x, y) {
    return x + y;
}

// Function to perform subtraction
function subtract(x, y) {
    return x - y;
}

// Function to perform multiplication
function multiply(x, y) {
    return x * y;
}

// Function to perform division
function divide(x, y) {
    if (y === 0) {
        return "Error: Division by zero";
    }
    return x / y;
}

// Test the calculator functions
var num1 = 10;
var num2 = 5;

console.log("Addition:", num1, "+", num2, "=", add(num1, num2));
console.log("Subtraction:", num1, "-", num2, "=", subtract(num1, num2));
console.log("Multiplication:", num1, "*", num2, "=", multiply(num1, num2));
console.log("Division:", num1, "/", num2, "=", divide(num1, num2));
```

Explanation:

- This JavaScript code defines four functions: `add`, `subtract`, `multiply`, and `divide`, each of which takes two parameters (`x` and `y`) representing the numbers to perform the operation on.
- The `add`, `subtract`, `multiply`, and `divide` functions return the result of performing addition, subtraction, multiplication, and division respectively on the given numbers.
- Division function checks for division by zero and returns an error message if the divisor is zero.
- Example calculations are performed using the test numbers `num1` and `num2`, and the results are printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to perform basic arithmetic operations using the calculator functions.


**********

Test19

**********

Title: "Vowel Counter in JavaScript"

Explanation: This JavaScript code counts the number of vowels (a, e, i, o, u) in a given string and prints the count to the console.

Example JavaScript Code:
```javascript
// Title: Vowel Counter in JavaScript
// Explanation: This JavaScript code counts the number of vowels (a, e, i, o, u) in a given string and prints the count to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to count the number of vowels in a string
function countVowels(str) {
    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    str = str.toLowerCase();
    // Define a regular expression to match vowels
    var vowelRegex = /[aeiou]/g;
    // Use the match() method to find all occurrences of vowels in the string
    var matches = str.match(vowelRegex);
    // Return the count of matches (number of vowels)
    return matches ? matches.length : 0;
}

// Test the countVowels function with example strings
var str1 = "Hello World";
var str2 = "OpenAI";
var str3 = "JavaScript";

console.log("\"" + str1 + "\" contains", countVowels(str1), "vowels.");
console.log("\"" + str2 + "\" contains", countVowels(str2), "vowels.");
console.log("\"" + str3 + "\" contains", countVowels(str3), "vowels.");
```

Explanation:

- This JavaScript code defines a function `countVowels` that takes a string `str` as input and counts the number of vowels (a, e, i, o, u) in the string.
- The string is converted to lowercase to handle both uppercase and lowercase vowels uniformly.
- A regular expression `[aeiou]` is defined to match any of the vowels.
- The `match()` method is used to find all occurrences of vowels in the string, and the result is stored in the `matches` array.
- The function returns the length of the `matches` array, which represents the count of vowels in the string.
- Example strings are tested with the `countVowels` function, and the results are printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to count vowels in strings.


**********

Test20

**********

Title: "Temperature Converter with Function and if-else in JavaScript"

Explanation: This JavaScript code converts temperature from Celsius to Fahrenheit or Fahrenheit to Celsius based on user input using a function with if-else statements, and prints the result to the console.

Example JavaScript Code:
```javascript
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
```

Explanation:

- This JavaScript code defines two functions: `celsiusToFahrenheit` and `fahrenheitToCelsius`, which convert temperature from Celsius to Fahrenheit and from Fahrenheit to Celsius respectively.
- The conversion formulas are implemented using simple mathematical operations.
- An example temperature value (`temperature`) and temperature unit (`unit`) are provided.
- Using if-else statements, the code checks whether the given temperature is in Celsius or Fahrenheit.
- Depending on the unit, the corresponding conversion function is called, and the result is printed to the console along with a descriptive message.
- If the provided temperature unit is neither "C" nor "F", an error message is printed indicating an invalid unit.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to perform temperature conversions based on user input.


**********

Test21

**********

Title: "Sum of Numbers using Function and Loop in JavaScript"

Explanation: This JavaScript code calculates the sum of all numbers from 1 to a given positive integer using a function with a loop, and prints the result to the console.

Example JavaScript Code:
```javascript
// Title: Sum of Numbers using Function and Loop in JavaScript
// Explanation: This JavaScript code calculates the sum of all numbers from 1 to a given positive integer using a function with a loop, and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to calculate the sum of numbers from 1 to n
function sumOfNumbers(n) {
    var sum = 0; // Initialize sum variable
    for (var i = 1; i <= n; i++) { // Loop from 1 to n
        sum += i; // Add current number to sum
    }
    return sum; // Return the total sum
}

// Test the sumOfNumbers function with example input
var num = 10; // Example positive integer
console.log("Sum of numbers from 1 to", num + ":", sumOfNumbers(num)); // Print the result
```

Explanation:

- This JavaScript code defines a function `sumOfNumbers` that takes a positive integer `n` as input and calculates the sum of all numbers from 1 to `n` using a loop.
- The function initializes a variable `sum` to store the sum of numbers.
- It then iterates through each number from 1 to `n` using a `for` loop and adds each number to the `sum`.
- After the loop completes, the total sum is returned.
- An example positive integer `num` is provided to test the `sumOfNumbers` function.
- The result, which is the sum of numbers from 1 to the given integer, is printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to calculate the sum of numbers from 1 to a given positive integer using a function with a loop.


**********

Test22

**********

Title: "Countdown using While Loop in JavaScript"

Explanation: This JavaScript code demonstrates a countdown from a given positive integer to 1 using a while loop. It prints each number in the countdown to the console.

Example JavaScript Code:
```javascript
// Title: Countdown using While Loop in JavaScript
// Explanation: This JavaScript code demonstrates a countdown from a given positive integer to 1 using a while loop. It prints each number in the countdown to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to perform countdown using a while loop
function countdown(n) {
    while (n >= 1) { // While n is greater than or equal to 1
        console.log(n); // Print the current value of n
        n--; // Decrement n by 1
    }
}

// Test the countdown function with an example positive integer
var num = 5; // Example positive integer
console.log("Countdown from", num + ":");
countdown(num); // Call the function to perform the countdown
```

Explanation:

- This JavaScript code defines a function `countdown` that takes a positive integer `n` as input and performs a countdown from `n` to 1 using a while loop.
- Inside the while loop, it prints the current value of `n` to the console using `console.log()`.
- It then decrements `n` by 1 in each iteration of the loop until `n` becomes less than 1.
- An example positive integer `num` is provided to test the `countdown` function.
- The countdown from the given integer to 1 is printed to the console.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to perform a countdown using a while loop.


**********

Test23

**********

Title: "Sum of Numbers using For Loop in JavaScript"

Explanation: This JavaScript code calculates the sum of all numbers from 1 to a given positive integer using a for loop. It prints the sum to the console.

Example JavaScript Code:
```javascript
// Title: Sum of Numbers using For Loop in JavaScript
// Explanation: This JavaScript code calculates the sum of all numbers from 1 to a given positive integer using a for loop. It prints the sum to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to calculate the sum of numbers from 1 to n using a for loop
function sumOfNumbers(n) {
    var sum = 0; // Initialize sum variable
    for (var i = 1; i <= n; i++) { // Loop from 1 to n
        sum += i; // Add current number to sum
    }
    return sum; // Return the total sum
}

// Test the sumOfNumbers function with an example positive integer
var num = 10; // Example positive integer
console.log("Sum of numbers from 1 to", num + ":", sumOfNumbers(num)); // Print the result
```

Explanation:

- This JavaScript code defines a function `sumOfNumbers` that takes a positive integer `n` as input and calculates the sum of all numbers from 1 to `n` using a for loop.
- The function initializes a variable `sum` to store the sum of numbers.
- It then iterates through each number from 1 to `n` using a `for` loop and adds each number to the `sum`.
- After the loop completes, the total sum is returned.
- An example positive integer `num` is provided to test the `sumOfNumbers` function.
- The result, which is the sum of numbers from 1 to the given integer, is printed to the console using `console.log()`.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to calculate the sum of numbers from 1 to a given positive integer using a for loop.


**********

Test24

**********

Title: "Countdown using Do-While Loop in JavaScript"

Explanation: This JavaScript code demonstrates a countdown from a given positive integer to 1 using a do-while loop. It prints each number in the countdown to the console.

Example JavaScript Code:
```javascript
// Title: Countdown using Do-While Loop in JavaScript
// Explanation: This JavaScript code demonstrates a countdown from a given positive integer to 1 using a do-while loop. It prints each number in the countdown to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to perform countdown using a do-while loop
function countdown(n) {
    do { // Execute the loop at least once
        console.log(n); // Print the current value of n
        n--; // Decrement n by 1
    } while (n >= 1); // Repeat the loop while n is greater than or equal to 1
}

// Test the countdown function with an example positive integer
var num = 5; // Example positive integer
console.log("Countdown from", num + ":");
countdown(num); // Call the function to perform the countdown
```

Explanation:

- This JavaScript code defines a function `countdown` that takes a positive integer `n` as input and performs a countdown from `n` to 1 using a do-while loop.
- Inside the do-while loop, it prints the current value of `n` to the console using `console.log()`.
- It then decrements `n` by 1 in each iteration of the loop.
- The loop continues to execute as long as `n` remains greater than or equal to 1.
- An example positive integer `num` is provided to test the `countdown` function.
- The countdown from the given integer to 1 is printed to the console.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to perform a countdown using a do-while loop.


**********

Test25

**********

Title: "Grade Checker with if-else-if in JavaScript"

Explanation: This JavaScript code checks the grade based on a given numerical score using if-else-if statements and prints the corresponding grade to the console.

Example JavaScript Code:
```javascript
// Title: Grade Checker with if-else-if in JavaScript
// Explanation: This JavaScript code checks the grade based on a given numerical score using if-else-if statements and prints the corresponding grade to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to check the grade based on a numerical score
function checkGrade(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else if (score >= 60) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
}

// Test the checkGrade function with example scores
var score1 = 95; // Example score
var score2 = 82; // Example score
var score3 = 70; // Example score

console.log("Score:", score1);
checkGrade(score1);

console.log("Score:", score2);
checkGrade(score2);

console.log("Score:", score3);
checkGrade(score3);
```

Explanation:

- This JavaScript code defines a function `checkGrade` that takes a numerical score as input and checks the corresponding grade using if-else-if statements.
- The function checks the score against different score ranges using if-else-if conditions:
  - If the score is 90 or above, it prints "Grade: A".
  - If the score is between 80 and 89, it prints "Grade: B".
  - If the score is between 70 and 79, it prints "Grade: C".
  - If the score is between 60 and 69, it prints "Grade: D".
  - Otherwise, it prints "Grade: F".
- Example scores are tested with the `checkGrade` function, and the corresponding grades are printed to the console.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to check grades based on numerical scores using if-else-if statements.


**********

Test26

**********

Title: "Data Type Checker in JavaScript"

Explanation: This JavaScript code checks the data type of a given value using if-else-if statements and prints the result to the console.

Example JavaScript Code:
```javascript
// Title: Data Type Checker in JavaScript
// Explanation: This JavaScript code checks the data type of a given value using if-else-if statements and prints the result to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to check the data type of a value
function checkDataType(value) {
    if (typeof value === "string") {
        console.log("Type: String");
    } else if (typeof value === "number") {
        console.log("Type: Number");
    } else if (typeof value === "boolean") {
        console.log("Type: Boolean");
    } else if (typeof value === "undefined") {
        console.log("Type: Undefined");
    } else if (typeof value === "object" && value !== null) {
        console.log("Type: Object");
    } else if (typeof value === "function") {
        console.log("Type: Function");
    } else {
        console.log("Type: Unknown");
    }
}

// Test the checkDataType function with example values
var value1 = "Hello"; // Example string
var value2 = 123; // Example number
var value3 = true; // Example boolean
var value4; // Example undefined
var value5 = { key: "value" }; // Example object
var value6 = function() {}; // Example function
var value7 = null; // Example null

console.log("Value:", value1);
checkDataType(value1);

console.log("Value:", value2);
checkDataType(value2);

console.log("Value:", value3);
checkDataType(value3);

console.log("Value:", value4);
checkDataType(value4);

console.log("Value:", value5);
checkDataType(value5);

console.log("Value:", value6);
checkDataType(value6);

console.log("Value:", value7);
checkDataType(value7);
```

Explanation:

- This JavaScript code defines a function `checkDataType` that takes a value as input and checks its data type using if-else-if statements.
- The function uses the `typeof` operator to determine the data type of the value.
- Based on the data type, the function prints the corresponding type to the console:
  - If the value is a string, it prints "Type: String".
  - If the value is a number, it prints "Type: Number".
  - If the value is a boolean, it prints "Type: Boolean".
  - If the value is undefined, it prints "Type: Undefined".
  - If the value is an object (excluding null), it prints "Type: Object".
  - If the value is a function, it prints "Type: Function".
  - If the value is null, it prints "Type: Null".
  - If the data type is unknown, it prints "Type: Unknown".
- Example values of different data types are tested with the `checkDataType` function, and the corresponding types are printed to the console.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to check the data type of values using if-else-if statements.


**********

Test27

**********

Title: "Voting Eligibility Checker in JavaScript"

Explanation: This JavaScript code checks if a person is eligible to vote based on their age using a boolean variable and if-else statements. It prints whether the person is eligible to vote to the console.

Example JavaScript Code:
```javascript
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
```

Explanation:

- This JavaScript code defines a function `checkVotingEligibility` that takes a person's age as input and checks if they are eligible to vote based on their age.
- Inside the function, it creates a boolean variable `isEligible` which is `true` if the person's age is 18 or older, and `false` otherwise.
- Using an if-else statement, it prints whether the person is eligible to vote or not to the console based on the value of `isEligible`.
- Example ages of two individuals are tested with the `checkVotingEligibility` function, and the results are printed to the console.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to check voting eligibility based on age using boolean variables and if-else statements.


**********

Test28

**********

Title: "Username Validator in JavaScript"

Explanation: This JavaScript code validates a username based on certain criteria using string manipulation and boolean checks. It prints whether the username is valid or not to the console.

Example JavaScript Code:
```javascript
// Title: Username Validator in JavaScript
// Explanation: This JavaScript code validates a username based on certain criteria using string manipulation and boolean checks. It prints whether the username is valid or not to the console.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to validate a username
function validateUsername(username) {
    // Criteria for a valid username: must contain only letters, numbers, underscores, and must be between 3 and 16 characters long
    var validCharacters = /^[a-zA-Z0-9_]+$/;
    var validLength = username.length >= 3 && username.length <= 16;

    if (validCharacters.test(username) && validLength) {
        console.log("Username '" + username + "' is valid.");
    } else {
        console.log("Username '" + username + "' is not valid.");
    }
}

// Test the validateUsername function with example usernames
var username1 = "user123"; // Example valid username
var username2 = "user-name"; // Example invalid username (contains a hyphen)
var username3 = "usr"; // Example invalid username (too short)

validateUsername(username1);
validateUsername(username2);
validateUsername(username3);
```

Explanation:

- This JavaScript code defines a function `validateUsername` that takes a username as input and validates it based on certain criteria.
- The criteria for a valid username include:
  - Must contain only letters (both uppercase and lowercase), numbers, and underscores.
  - Must be between 3 and 16 characters long.
- Inside the function, it uses regular expressions and boolean checks to validate the username.
- If the username meets all the criteria, it prints "Username '{username}' is valid." to the console. Otherwise, it prints "Username '{username}' is not valid.".
- Example usernames are tested with the `validateUsername` function, and the results are printed to the console.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to validate usernames based on certain criteria.


**********

Test29

**********

Title: "Day of the Week Identifier using Switch Statement in JavaScript"

Explanation: This JavaScript code identifies the day of the week based on a given number (1 for Sunday, 2 for Monday, etc.) using a switch statement. It prints the corresponding day to the console.

Example JavaScript Code:
```javascript
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
```

Explanation:

- This JavaScript code defines a function `getDayOfWeek` that takes a number representing a day of the week as input and identifies the corresponding day using a switch statement.
- Inside the function, it uses a switch statement to check the value of `dayNumber` and assigns the corresponding day to the variable `day`.
- Each case represents a day of the week, and the corresponding day is assigned to the `day` variable.
- If `dayNumber` does not match any of the cases (i.e., it's not between 1 and 7), it assigns "Invalid day number" to `day`.
- The function then prints the result to the console.
- Example day numbers are tested with the `getDayOfWeek` function, and the corresponding days are printed to the console.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to identify the day of the week using a switch statement.


**********

Test30

**********

Title: "Sum of Two Numbers Function in JavaScript"

Explanation: This JavaScript code defines a function that takes two numbers as parameters, calculates their sum, and returns the result.

Example JavaScript Code:
```javascript
// Title: Sum of Two Numbers Function in JavaScript
// Explanation: This JavaScript code defines a function that takes two numbers as parameters, calculates their sum, and returns the result.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Function to calculate the sum of two numbers
function calculateSum(num1, num2) {
    var sum = num1 + num2; // Calculate the sum of num1 and num2
    return sum; // Return the result
}

// Test the calculateSum function with example numbers
var number1 = 5; // Example number
var number2 = 10; // Example number
var result = calculateSum(number1, number2); // Call the function with the example numbers and store the result
console.log("Sum of", number1, "and", number2, "is:", result); // Print the result
```

Explanation:

- This JavaScript code defines a function `calculateSum` that takes two numbers, `num1` and `num2`, as parameters.
- Inside the function, it calculates the sum of `num1` and `num2` and assigns the result to the variable `sum`.
- It then returns the calculated sum using the `return` keyword.
- Example numbers are provided to test the `calculateSum` function.
- The function is called with the example numbers, and the result is stored in a variable called `result`.
- The result is printed to the console along with a message indicating the sum of the two numbers.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to calculate the sum of two numbers using a function with parameters and return statement.


**********

Test31

**********

Title: "Array Operations in JavaScript"

Explanation: This JavaScript code demonstrates various operations on arrays including adding elements, deleting elements, and manipulating array elements.

Example JavaScript Code:
```javascript
// Title: Array Operations in JavaScript
// Explanation: This JavaScript code demonstrates various operations on arrays including adding elements, deleting elements, and manipulating array elements.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Add an element to the end of the array
numbers.push(6);

// Print the array
console.log("Array after adding an element:", numbers);

// Delete an element from the end of the array
numbers.pop();

// Print the array
console.log("Array after deleting an element:", numbers);

// Add an element to the beginning of the array
numbers.unshift(0);

// Print the array
console.log("Array after adding an element to the beginning:", numbers);

// Delete an element from the beginning of the array
numbers.shift();

// Print the array
console.log("Array after deleting an element from the beginning:", numbers);

// Access and manipulate array elements
var firstElement = numbers[0]; // Access the first element
console.log("First element of the array:", firstElement);

numbers[1] = 20; // Change the value of the second element
console.log("Array after changing the value of the second element:", numbers);

// Remove an element from a specific index
var removedElement = numbers.splice(2, 1); // Remove one element starting from index 2
console.log("Removed element from index 2:", removedElement);
console.log("Array after removing element from index 2:", numbers);

// Insert an element at a specific index
numbers.splice(2, 0, 30); // Insert 30 at index 2
console.log("Array after inserting element at index 2:", numbers);

// Concatenate arrays
var moreNumbers = [7, 8, 9];
var combinedArray = numbers.concat(moreNumbers); // Concatenate numbers and moreNumbers arrays
console.log("Combined array:", combinedArray);
```

Explanation:

- This JavaScript code demonstrates various operations on arrays:
  - Adding elements to the end of the array using `push()`.
  - Deleting elements from the end of the array using `pop()`.
  - Adding elements to the beginning of the array using `unshift()`.
  - Deleting elements from the beginning of the array using `shift()`.
  - Accessing and manipulating array elements using index notation.
  - Removing elements from a specific index using `splice()`.
  - Inserting elements at a specific index using `splice()`.
  - Concatenating arrays using `concat()`.
- Each operation is performed on the `numbers` array, and the resulting array is printed to the console.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to perform array operations and manipulate array elements.


**********

Test32

**********

Title: "Object Operations in JavaScript"

Explanation: This JavaScript code demonstrates various operations on objects including creating objects, accessing properties, adding properties, deleting properties, and iterating over object properties.

Example JavaScript Code:
```javascript
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
```

Explanation:

- This JavaScript code demonstrates various operations on objects:
  - Creating an object `person` with properties such as `firstName`, `lastName`, `age`, and `email`.
  - Accessing object properties using dot notation (`person.firstName`, `person.age`) and bracket notation (`person["lastName"]`).
  - Adding a new property `city` to the `person` object using dot notation.
  - Deleting the `email` property from the `person` object using the `delete` keyword.
  - Iterating over object properties using a `for...in` loop to print each property and its value.
- Each operation is performed on the `person` object, and the resulting object or property value is printed to the console.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to perform object operations and manipulate object properties.


**********

Test33

**********

Title: "Asynchronous Operations with Async/Await in JavaScript"

Explanation: This JavaScript code demonstrates asynchronous operations using async/await syntax to fetch data from a mock API endpoint.

Example JavaScript Code:
```javascript
// Title: Asynchronous Operations with Async/Await in JavaScript
// Explanation: This JavaScript code demonstrates asynchronous operations using async/await syntax to fetch data from a mock API endpoint.
// How to Run: Copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script.

// Mock function to simulate fetching data from an API
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "John Doe" };
            resolve(data);
        }, 2000); // Simulate a delay of 2 seconds
    });
}

// Async function to fetch and process data
async function processData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData(); // Wait for data to be fetched
        console.log("Data fetched:", data);
        // Process the fetched data
        console.log("Processing data...");
        console.log("Data processed successfully.");
    } catch (error) {
        console.error("An error occurred while fetching or processing data:", error);
    }
}

// Call the processData function
processData();
```

Explanation:

- This JavaScript code demonstrates asynchronous operations using async/await syntax:
  - A mock `fetchData` function simulates fetching data from an API endpoint by returning a Promise that resolves with mock data after a delay of 2 seconds.
  - An `async` function `processData` is defined to fetch and process data asynchronously.
  - Inside the `processData` function, the `await` keyword is used to wait for the data to be fetched asynchronously using the `fetchData` function.
  - If the data is fetched successfully, it is logged to the console along with a message indicating successful processing.
  - If an error occurs during fetching or processing, it is caught in a try-catch block, and an error message is logged to the console.
- The `processData` function is called to initiate the asynchronous operation.
- The comment section at the beginning provides the title, explanation, and instructions on how to run the script.
- You can copy the code and paste it into a JavaScript environment, such as a browser console or a Node.js script, to observe asynchronous operations using async/await syntax to fetch and process data.


**********

Test34

**********

Title: "Reading a File in Node.js"

Explanation: This Node.js code demonstrates how to read the contents of a file using the `fs` module.

Example JavaScript Code:
```javascript
const fs = require('fs');

// Function to read the contents of a file
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        // Read the file asynchronously
        fs.readFile(filePath, 'utf8', (error, data) => {
            if (error) {
                reject(error); // Reject with error if reading file fails
            } else {
                resolve(data); // Resolve with file contents if reading is successful
            }
        });
    });
}

// Usage example: Read the contents of a file
const filePath = 'example.txt'; // Path to the file to be read
readFile(filePath)
    .then((fileContents) => {
        console.log(`Contents of ${filePath}:`);
        console.log(fileContents);
    })
    .catch((error) => {
        console.error('An error occurred while reading the file:', error);
    });
```

Explanation:

1. The code starts by requiring the built-in `fs` module, which provides functionality for file I/O operations.
2. The `readFile` function is defined to read the contents of a file asynchronously. It takes the file path as input and returns a Promise.
3. Inside the function, `fs.readFile` is used to read the file asynchronously. It takes the file path, encoding (here 'utf8' for text files), and a callback function that handles the file data or any errors.
4. If an error occurs during file reading, the Promise is rejected with the error.
5. If reading the file is successful, the Promise is resolved with the file contents.
6. A usage example demonstrates reading the contents of a file named `example.txt` using the `readFile` function, and the contents are logged to the console if reading is successful. If an error occurs, it is caught and logged as well.

Ensure that the file path provided (`example.txt` in this case) points to an existing file in the same directory as the script, or provide the full path to the file to be read.


**********

Test35

**********

Title: "Storing Data in a File in Node.js"

Explanation: This Node.js code demonstrates how to store data in a file by writing to it using the `fs` module.

Example JavaScript Code:
```javascript
const fs = require('fs');

// Function to store data in a file
function storeDataToFile(filePath, data) {
    return new Promise((resolve, reject) => {
        // Convert data to JSON string
        const jsonData = JSON.stringify(data, null, 2);

        // Write data to the file asynchronously
        fs.writeFile(filePath, jsonData, 'utf8', (error) => {
            if (error) {
                reject(error); // Reject with error if writing to file fails
            } else {
                resolve(); // Resolve if writing is successful
            }
        });
    });
}

// Example data to be stored in the file
const exampleData = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com'
};

// Example file path
const filePath = 'data.json';

// Usage example: Store data in a file
storeDataToFile(filePath, exampleData)
    .then(() => {
        console.log('Data successfully stored in', filePath);
    })
    .catch((error) => {
        console.error('An error occurred while storing data in the file:', error);
    });
```

Explanation:

1. The code starts by requiring the built-in `fs` module, which provides functionality for file I/O operations.
2. The `storeDataToFile` function is defined to store data in a file asynchronously. It takes the file path and data as inputs and returns a Promise.
3. Inside the function, the data is converted to a JSON string using `JSON.stringify`.
4. `fs.writeFile` is used to write the data to the file asynchronously. It takes the file path, data (in JSON string format), encoding ('utf8' for text files), and a callback function that handles any errors.
5. If an error occurs during file writing, the Promise is rejected with the error.
6. If writing to the file is successful, the Promise is resolved.
7. An example data object (`exampleData`) and file path (`filePath`) are provided.
8. A usage example demonstrates storing the example data in a file named `data.json` using the `storeDataToFile` function. Success or error messages are logged to the console accordingly.

Ensure that the file path provided (`data.json` in this case) specifies the location where you want to store the data, including the filename. Adjust the `exampleData` object and file path as needed for your use case.


**********

Test36

**********

Title: "Checking Response Code of a Website in Node.js"

Explanation: This Node.js code demonstrates fetching data from a server (google.com) and checking the response code using the `http` module.

Example JavaScript Code:
```javascript
const http = require('http');

// Function to check the response code of a website
function checkResponseCode(url) {
    return new Promise((resolve, reject) => {
        // Parse URL
        const parsedUrl = new URL(url);

        // Set options for the HTTP request
        const options = {
            hostname: parsedUrl.hostname,
            port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
            path: parsedUrl.pathname,
            method: 'GET',
            timeout: 5000 // Timeout in milliseconds (adjust as needed)
        };

        // Create the HTTP request
        const req = http.request(options, (res) => {
            // Resolve with the response code
            resolve(res.statusCode);
        });

        // Handle request errors
        req.on('error', (error) => {
            reject(error);
        });

        // Set a timeout for the request
        req.setTimeout(options.timeout, () => {
            req.abort(); // Abort the request if it takes longer than the timeout
            reject(new Error('Request timed out'));
        });

        // End the request
        req.end();
    });
}

// Usage example: Check the response code of google.com
const url = 'http://www.google.com';
checkResponseCode(url)
    .then((statusCode) => {
        console.log(`Response code of ${url}: ${statusCode}`);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
```

Explanation:

1. The code starts by requiring the built-in `http` module, which provides functionality to create HTTP servers and make HTTP requests.
2. The `checkResponseCode` function is defined to check the response code of a website. It takes a URL as input and returns a Promise.
3. Inside the function, the URL is parsed using the `URL` constructor.
4. Options for the HTTP request are set including hostname, port, path, method, and timeout.
5. An HTTP request is made using `http.request`, passing the options and a callback function that handles the response.
6. The response code is resolved if the request is successful.
7. Error handling is implemented to catch request errors and handle timeouts.
8. Finally, a usage example demonstrates checking the response code of google.com using the `checkResponseCode` function, and the result is logged to the console. If an error occurs, it is caught and logged as well.


**********

