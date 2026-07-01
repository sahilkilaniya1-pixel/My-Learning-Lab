// =========================================================================
// JAVASCRIPT LOOPS -
// =========================================================================

// -------------------------------------------------------------------------
// Q1. How do you print a message multiple times using a basic 'for' loop?
// -------------------------------------------------------------------------
// Answer: Initialize a counter, set the limit condition, and increment it.
for (let count = 1; count <= 5; count++) {
    console.log("sahil");
}
console.log("loop has ended!\n");


// -------------------------------------------------------------------------
// Q2. How do you calculate the sum of numbers from 1 to 5 using a loop?
// -------------------------------------------------------------------------
// Answer: Initialize a sum variable to 0, then add the loop iterator 'i' to it in each step.
// Note: Changed initial sum from 1 to 0 to get the correct mathematical sum (15).
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("sum =", sum); // Output: 15
console.log("\n");


// -------------------------------------------------------------------------
// Q3. What is an Infinite Loop? Give an example.
// -------------------------------------------------------------------------
// Answer: An infinite loop occurs when the stopping condition is never met. 
// WARNING: This will crash your console/browser because 'i' will always be >= 0.
/*
for (let i = 1; i >= 0; i++) {
    console.log("i =", i);
}
*/


// -------------------------------------------------------------------------
// Q4. How does a 'while' loop work? Print a message 10 times with it.
// -------------------------------------------------------------------------
// Answer: It checks the condition first. If true, it runs the block and updates the iterator inside.
let iWhile = 1;
while (iWhile <= 10) {
    console.log("javascript");
    iWhile++;
}
console.log("\n");


// -------------------------------------------------------------------------
// Q5. How does a 'do-while' loop differ from a 'while' loop? Print a message 20 times.
// -------------------------------------------------------------------------
// Answer: A 'do-while' loop runs the code block at least once before checking the condition.
let iDo = 1;
do {
    console.log("sahil javascript");
    iDo++;
} while (iDo <= 20);
console.log("\n");


// -------------------------------------------------------------------------
// Q6. How do you iterate over a String and calculate its length using a 'for-of' loop?
// -------------------------------------------------------------------------
// Answer: 'for-of' extracts each character directly. We can increment a counter to find the size.
let str = "sahil";
let size = 0;
for (let char of str) {
    console.log("character =", char);
    size++;
}
console.log("string size =", size); // Output: 5
console.log("\n");


// -------------------------------------------------------------------------
// Q7. How do you loop through the properties (keys and values) of an Object?
// -------------------------------------------------------------------------
// Answer: Use a 'for-in' loop to extract the keys, and use bracket notation object[key] to get values.
let student = {
    name: "sahil",
    age: 20,
    cgpa: 7.9,
    isPass: true
};

for (let key in student) {
    console.log("key =", key, ", value =", student[key]);
}
console.log("\n");


// -------------------------------------------------------------------------
// Q8. Write a program to print all Even Numbers from 0 to 100.
// -------------------------------------------------------------------------
// Answer: Use a 'for' loop and filter numbers using the modulus operator (num % 2 === 0).
for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log("even num =", num);
    }
}