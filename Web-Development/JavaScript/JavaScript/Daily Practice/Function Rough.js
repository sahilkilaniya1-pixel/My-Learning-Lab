// JavaScript Functions Deep Dive
// Function ek reusable code block hota hai jo specific task perform karta hai. Code repeating se bachne aur logic ko modular banane ke liye hum functions ka use karte hain.

// 1. Function Types & Writing Styles
// A. Function Declaration

// sayHello(); //Works fine
// function sayHello(){
//     console.log("Hello World");
// }

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
// console.log("Payment Successful! SMS sent.");
// }
// function processPayment(amount, callback){
// console.log(`processing payment of ${amount}...`);
// callback();
// }
// processPayment(500, sendNotification);


// 2. Rest Parameters (...args) vs arguments Object
// A. Old Way: arguments Object
// function sumOld() {
    // let total = 0;
    // for (let i = 0; i < arguments.length; i++) {
        // total += arguments[i];
    // }
    // return total;
// }
// console.log(sumOld(10, 20, 30));


// B. Modern Way: Rest Parameters (...args)
// function sumNew(...numbers){
    // return numbers.reduce((total,num) => total +num, 0);
// }
// console.log(sumNew(10,20,30,40)); // 100

//Specific parameters ke sath:
// function userDetails (firstName , lastName, ...hobbies){
    // console.log(`Name:${firstName} ${lastName}`);
    // console.log(`Hobboes:`, hobbies);
// }
// userDetails("Sahil","Kilaniya","coding","Gaming","Music");

// 3. Custom Function Overloading
function calculate(...agrs){
    if(args.length === 1){
        let radius = args [0];
        return (Math.PI * radius * radius);
    }
    else if(args.length === 2){
        let length = args[0];
        let width = args[1];
    }
}