// This code prints "hello world"
// console.log("hello world");


// This is a single-line comment

/* This is a multi-line comment */


// Operators in JS
// Used to perform operations on data

// Arithmetic Operators

let a1 = 5;
let b1 = 2;
console.log("a1 = ", a1, "& b1 =", b1);
console.log("a1 + b1 =", a1 + b1);
console.log("a1 - b1 =", a1 - b1);

// Pre-decrement
console.log("--a1 =", --a1); // Decrements first, then prints (Outputs: 4)
console.log("a1 =", a1);     // Value remains 4

// Post-decrement
console.log("a1-- =", a1--); // Prints current value first (4), then decrements
console.log("a1 =", a1);     // Value is now 3

// =======================================
// Assignment Operators
// Used to assign values
// Examples: +=, -=, *=, /=, %=, **=

let assignA = 5;

assignA += 4; // assignA = assignA + 4
console.log("assignA =", assignA); // 9

assignA -= 4; // assignA = assignA - 4
console.log("assignA =", assignA); // 5

assignA *= 4; // assignA = assignA * 4
console.log("assignA =", assignA); // 20

assignA /= 4; // assignA = assignA / 4
console.log("assignA =", assignA); // 5

assignA %= 4; // assignA = assignA % 4 (Remainder)
console.log("assignA =", assignA); // 1

assignA **= 4; // assignA = assignA ** 4 (Exponentiation / Power)
console.log("assignA =", assignA); // 1^4 = 1


// Comparison Operators ===========================

// Equal to: == (Checks only value, performs type coercion)
// Not equal to: !=
// Strict Equal to: === (Checks both value and data type)
// Strict Not equal to: !==

let compA = 5;
let compB = 5;
console.log("5 == 5 :", compA == compB); // true

// Loose equality (Type Coercion occurs)
let xStr = 5;
let yStr = "5";
console.log("5 == '5' :", xStr == yStr); // true

// Strict equality (No Type Coercion)
console.log("5 === '5' :", xStr === yStr); // false

// Strict inequality
console.log("5 !== '5' :", xStr !== yStr); // true

// Greater than or equal to / Less than or equal to
console.log("5 <= 5 :", compA <= compB); // true
console.log("5 >= 5 :", compA >= compB); // true


// Logical Operators ===================================

// Logical AND: && (Both conditions must be true)