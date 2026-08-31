// JavaScript Functions Deep Dive
// Function ek reusable code block hota hai jo specific task perform karta hai. Code repeating se bachne aur logic ko modular banane ke liye hum functions ka use karte hain.

// 1. Function Types & Writing Styles
// A. Function Declaration

sayHello(); //Works fine
function sayHello(){
    console.log("Hello World");
}

// B. Function Expression
// Variable mein function assign karna. Ye hoisted nahi hoti.
// greet(); //Error
// const greet = function (name){
    // return `Hello, ${name}`;
// };

// C. Arrow Functions (() => {})
// ES6 mein introduced, concise syntax.
// const add = (a,b) => a+b;
// console.log(add(5,1));

// 2. Advanced Function Concepts
// A. Higher-Order Functions (HOF) & Callbacks
// function sendNotification(){
    console.log("Payment Successful! SMS sent.");
}
function processPayment(amount, callback){
    console.log(`processing payment of ${amount}...`);
    callback();
}
processPayment(500, sendNotification);