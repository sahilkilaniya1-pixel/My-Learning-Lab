// ===================================================
// 1. FOR LOOPS
// ===================================================

// Example 1: Print "Sahil" 10 times
for (let count = 1; count <= 10; count++) {
    console.log("Sahil");  // Executes 10 times
}
console.log("Loop has ended\n");

// Example 2: Calculate sum of 1 to 100
let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log("Sum 1 to 100 =", sum);
console.log("Loop has ended\n");

// Example 3: Simple 1 to 5 print
for (let i = 1; i <= 5; i++) {
    console.log("i =", i);
}
console.log("\n");

// Example 4: Print numbers from 0 to 5
for (let num = 0; num <= 5; num++) {
    console.log("num =", num);
}
console.log("\n");

// Example 5: Loop to print even numbers from 0 to 10
for (let num = 0; num <= 10; num++) {
    if (num % 2 === 0) {
        console.log("even num =", num);
    }
}
console.log("\n");

/* // WARNING: INFINITE LOOP (Uncomment only if you want to test, it may crash browser)
for (let i = 1; i >= 0; i++) {
    console.log("i=", i);
}
*/


// ===================================================
// 2. WHILE LOOPS
// ===================================================

// Example 1: Basic while loop
let whileCount = 1;
while (whileCount <= 5) {
    console.log("Work is in progress, count =", whileCount);
    whileCount++; // Increment is necessary to stop the loop
}
console.log("\n");

// Example 2: Printing name 5 times
let whileI = 1;
while (whileI <= 5) {
    console.log("Sahil");
    whileI++;
}
console.log("\n");

// Example 3: Guessing Game (Runs until user guesses 25)
// Note: prompt() works in Browser environment. If running via Node.js, uncomment carefully.
/*
let gameNum = 25;
let userNum = prompt("Guess the game number: ");
while (userNum != gameNum) {
    userNum = prompt("You entered the wrong number. Guess again:");
}
console.log("Congratulations, you entered the right number!\n");
*/


// ===================================================
// 3. DO-WHILE LOOPS
// ===================================================

// Example 1: Executes 10 times
let j = 1;
do {
    console.log("Apna college");
    j++;
} while (j <= 10);
console.log("\n");

// Example 2: Prints numbers from 1 to 5
let doWhileI = 1;
do {
    console.log("doWhileI =", doWhileI);
    doWhileI++;
} while (doWhileI <= 5);
console.log("\n");


// ===================================================
// 4. FOR-OF & FOR-IN LOOPS
// ===================================================

// For-of loop (Used for Strings and Arrays)
let nameStr = "sahil";
let size = 0;
for (let char of nameStr) {
    console.log("value =", char);
    size++;
}
console.log("string size = ", size); // 5
console.log("\n");

// For-in loop (Used for Objects to loop through keys)
let student = {
    name: "sahil",
    age: 23,
    cgpa: 7.5,
    isPass: true,
};
for (let key in student) {
    console.log("key =", key, ", value =", student[key]);
}
console.log("\n");


// ===================================================
// 5. STRINGS & TEMPLATE LITERALS
// ===================================================

// Creating and updating string
let sampleStr = "sahil";
console.log("Character at index 2:", sampleStr[2]); // Outputs 'h'

sampleStr = "new name";  // Reassignment without 'let'
console.log("Updated character at index 2:", sampleStr[2]); // Outputs 'w'
console.log("\n");

// Template Literal and String Interpolation
let obj = {
    item: "pen",
    price: "10"
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log("Using Template Literal:", output);
console.log("Using Console Commas:", "the cost of", obj.item, "is", obj.price, "rupees");
console.log("\n");


// ===================================================
// 6. ESCAPE CHARACTERS & STRING METHODS
// ===================================================

let escapeStr1 = "sahil\nkilaniya"; // \n adds a new line
console.log("With Newline:\n" + escapeStr1);

let escapeStr2 = "sahil\tkilaniya"; // \t adds a tab space
console.log("With Tab:", escapeStr2);
console.log("Length of 'sahil\\tkilaniya':", escapeStr2.length);
console.log("\n");

// String Immutability Example
let originalStr = "sahil kilaniya";
let newStr = originalStr.toUpperCase(); // Returns a brand new string

console.log("Original String (Unchanged):", originalStr);
console.log("New String (Modified):", newStr);