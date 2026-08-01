// ==========================================================================
// FUNCTIONS & HIGH-ORDER ARRAY METHODS IN JAVASCRIPT
// ==========================================================================

// --- 1. Basic Function Definition & Call ---
function myFunction() {
    console.log("Welcome to Apna College!");
    console.log("We are learning JS:");
}
myFunction(); 

function printMessage(msg) {  // msg = Parameter
    console.log(msg);
}
printMessage("I love JS");    // "I love JS" = Argument

// --- 2. The 'return' Keyword Rule ---
function sum(x, y) {
    let s = x + y;
    console.log("Before return"); 
    console.log("After return");  // Executed before return statement
    return s;                     // Returns value and exits immediately
}
let result = sum(5, 10);
console.log(`Result is: ${result}`);


// ==========================================================================
// ARROW FUNCTIONS (ES6+)
// ==========================================================================
const arrowSum = (a, b) => {
    console.log(a + b);
};
arrowSum(5, 10); 

let arrowMul = (a, b) => {
    return a * b;
};
console.log(arrowMul(3, 5)); 


// ==========================================================================
// FOR-EACH LOOP (Higher Order Function)
// ==========================================================================
let sampleArr = ["pune", "mumbai"];

sampleArr.forEach(function printVal(val) {
    console.log(val.toUpperCase());
});

sampleArr.forEach((val, idx, array) => {
    console.log(val.toUpperCase(), idx, array);
});

// Practice: Print the square of each value using forEach
let nums = [2, 3, 4, 5, 6];
nums.forEach((num) => {
    console.log(num * num); // num**2
});


// ==========================================================================
// MAP, FILTER & REDUCE METHODS
// ==========================================================================

// 1. Map — Creates a new array with the transformed results
let numbersList = [34, 65, 98, 19];
let squaredArr = numbersList.map((val) => {
    return val * val;
});
console.log(squaredArr);

// 2. Filter — Creates a new array with elements that pass a specific condition
let numb = [1, 2, 34, 5, 6, 7, 88, 99];
let evenArr = numb.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr); // Output: [2, 34, 6, 88]

// 3. Reduce — Reduces the array down to a single returned value
let arrays = [1, 2, 3, 4];
const output = arrays.reduce((res, curr) => {
    return res + curr;
});
console.log(output); // Output: 10


// ==========================================================================
// FINAL PRACTICE QUESTIONS
// ==========================================================================

// Question 1: Filter out the marks of students that scored 90+
let marks = [97, 64, 32, 49, 99, 96, 86];
let toppers = marks.filter((val) => {
    return val > 90;
});
console.log("Toppers marks:", toppers); // Output: [97, 99, 96]


// Question 2: Take a number 'n' from user, create an array from 1 to n.
// Then calculate its Sum and Product (Factorial) using the reduce method.

// Input from user (Converting string input to a Number safely)
let n = Number(prompt("Enter the number : ")); 
let userArr = [];

for (let i = 1; i <= n; i++) {
    userArr[i - 1] = i; // Populating array from 1 to n
}
console.log("Generated Array:", userArr); 

// Part A: Use the reduce method to calculate sum of all numbers
const arraySum = userArr.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

// Part B: Use the reduce method to calculate product (Factorial) of all numbers
const arrayProduct = userArr.reduce((accumulator, current) => {
    return accumulator * current;
}, 1);


// ==========================================================================
// INSTANCE RESULTS (Assuming user enters n = 5)
// ==========================================================================
console.log("--- Final Task Results (Example: n = 5) ---");
console.log(`Sum of array elements: ${arraySum}`);        // Output: 15  (1+2+3+4+5)
console.log(`Product (Factorial) of array: ${arrayProduct}`);// Output: 120 (1*2*3*4*5)