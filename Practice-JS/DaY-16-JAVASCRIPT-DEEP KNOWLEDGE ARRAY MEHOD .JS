/**
 * THE ULTIMATE JAVASCRIPT ARRAY METHODS GUIDE
 * This script contains solutions to the assignment exercises along with 
 * a comprehensive breakdown of basic and advanced array methods in JavaScript.
 * 
 * Perfect for pushing to GitHub as a master study reference.
 */

// =========================================================================
// ASSIGNMENT SOLUTIONS
// =========================================================================

console.log("=== RUNNING ASSIGNMENT SOLUTIONS ===\n");

// --- QUESTION 1: Array Operations ---
function questionOne() {
    console.log("--- Question 1 ---");
    let a = [2, 4, 6, 2, 0, 56, 32, 65, 78, 65, 78, 95];

    // 1. Sort in increasing and decreasing order
    // We use the spread operator [...a] to avoid modifying (mutating) the original array.
    let increasing = [...a].sort((x, y) => x - y); // (x - y) sorts numbers from low to high
    let decreasing = [...a].sort((x, y) => y - x); // (y - x) sorts numbers from high to low
    console.log(increasing);
    console.log(decreasing);

    // 2. Find the product (multiply) of the two biggest numbers
    let sortedDesc = [...a].sort((x, y) => y - x);
    let multiplyTwoBiggest = sortedDesc[0] * sortedDesc[1]; // Indices 0 and 1 hold the largest numbers
    console.log(multiplyTwoBiggest);

    // 3. Find the product of the smallest and biggest number
    let sortedInc = [...a].sort((x, y) => x - y);
    let multiplySmallestBiggest = sortedInc[0] * sortedInc[sortedInc.length - 1]; // First index * last index
    console.log(multiplySmallestBiggest);
    console.log("\n");
}
questionOne();


// --- QUESTION 2: Type Conversion ---
function questionTwo() {
    console.log("--- Question 2 ---");
    // 1. Convert array into a string
    let arr = [2, 4, 5, 3, 5, 3, 2, 5, "a", "b"];
    let arrayToString = arr.join(","); // Joins all elements separated by a comma
    console.log(arrayToString);

    // 2. Convert string into an array
    let str = "Aayush";
    let stringToArray = str.split(""); // Splits the string at every character boundary
    console.log(stringToArray);
    console.log("\n");
}
questionTwo();


// --- QUESTION 3: Length of Names (Mapping) ---
function questionThree() {
    console.log("--- Question 3 ---");
    let names = ["Aayush", "Sahil", "Akshya"];
    
    // .map() creates a brand new array by transforming every single element in the loop
    let lengths = names.map(name => name.length); 
    console.log("Lengths of names:", lengths);
    console.log("\n");
}
questionThree();


// --- QUESTION 4: Sorting Objects by Properties ---
function questionFour() {
    console.log("--- Question 4 ---");
    const students = [
        { name: "Aayush", marks: 99 }, { name: "Akshay", marks: 80 },
        { name: "Sahil", marks: 50 },  { name: "Neha", marks: 95 },
        { name: "Rohan", marks: 72 },  { name: "Priya", marks: 88 },
        { name: "Amit", marks: 64 },   { name: "Sneha", marks: 91 },
        { name: "Vikram", marks: 45 }, { name: "Tanvi", marks: 83 }
    ];

    // To sort objects, we target their inner properties (x.marks and y.marks) inside the comparator function
    students.sort((x, y) => x.marks - y.marks); // Sorts students from lowest to highest marks
    console.log("Students sorted by marks:", students);
    console.log("\n");
}
questionFour();


// --- QUESTION 5: Advanced User Array Lookups ---
function questionFive() {
    console.log("--- Question 5 ---");
    const users = [
        { name: "John", age: 17, isActive: true },
        { name: "Jane", age: 22, isActive: false },
        { name: "Bob", age: 19, isActive: true },
        { name: "Alice", age: 25, isActive: true }
    ];

    // 1. Find the first user who is active and over the age of 18
    // .find() returns the VERY FIRST matching element and stops scanning
    let activeAdult = users.find(user => user.isActive === true && user.age > 18);
    console.log("First active adult:", activeAdult);

    // 2. Check if every user in the list is active
    // .every() returns true ONLY if the condition passes for all elements
    let isAllActive = users.every(user => user.isActive === true);
    console.log("Is every user active?:", isAllActive);

    // 3. Check if at least one user is under the age of 18
    // .some() returns true if AT LEAST ONE element passes the condition
    let hasMinor = users.some(user => user.age < 18);
    console.log("Is there any user under 18?:", hasMinor);
    console.log("\n");
}
questionFive();


// =========================================================================
// ADVANCED MASTERCLASS (PRO DEVELOPER CORE CONCEPTS)
// =========================================================================

console.log("=== RUNNING ADVANCED CORE CONCEPTS ===\n");

// --- 1. MUTABILITY VS IMMUTABILITY ---
// Mutable methods mutate (change) the original data structure.
let originalArray = ["Apple", "Banana"];
originalArray.push("Mango"); // Direct alteration
console.log("Mutated Array:", originalArray);

// Immutable methods do not affect the source; they generate fresh copies.
let numericArray = [1, 2, 3];
let newArrayCopy = numericArray.map(num => num * 10);
console.log("Source Array (Safe):", numericArray);
console.log("New Computed Array:", newArrayCopy);
console.log("\n");


// --- 2. METHOD CHAINING ---
// Linking multiple array operations sequentially to pass data forward without assigning dummy variables.
const dashboardData = [
    { name: "John", isActive: true, score: 80 },
    { name: "Jane", isActive: false, score: 90 },
    { name: "Bob", isActive: true, score: 70 }
];

let finalScoreSum = dashboardData
    .filter(item => item.isActive === true)  // Filters out inactive items
    .map(item => item.score)                 // Extracts scores -> [80, 70]
    .reduce((accum, curr) => accum + curr, 0); // Adds scores together -> 150

console.log("Chaining Result (Total Active Scores):", finalScoreSum);
console.log("\n");


// --- 3. TIME COMPLEXITY (BIG O PERFORMANCE) ---
console.log("--- Performance Insights ---");
console.log(".push() / .pop() runs in O(1) - Instant execution since items are manipulated at the end.");
console.log(".unshift() / .shift() runs in O(n) - Slower because every subsequent index needs to re-align.");
console.log(".find() / .filter() runs in O(n) - Linear scan checking elements one by one.");
console.log("\n");


// --- 4. SPARSE ARRAYS (THE INTERVIEW TRAP) ---
// Arrays containing empty slot boundaries.
let sparseArr = [1, , , 4]; // Length is 4, but indices 1 and 2 are blank
console.log("Sparse Array Length:", sparseArr.length);

console.log("Iterating through Sparse Array:");
sparseArr.forEach((element, index) => {
    // Array iterators entirely skip unassigned empty slots!
    console.log(`Index ${index}: ${element}`);
});
console.log("\n");


// --- 5. ARRAY-LIKE OBJECTS ---
// Objects with indexed elements and a length property, but lacking array methods.
function handleArrayLike() {
    // The 'arguments' object inside standard functions is an array-like object
    console.log("Is 'arguments' a true array?:", Array.isArray(arguments));
    
    // Converting it into an authentic array using Array.from()
    let trueArray = Array.from(arguments);
    console.log("Is it a true array after Array.from()?:", Array.isArray(trueArray));
    
    // Now you can safely call array transformations
    let calculated = trueArray.map(v => v * 2);
    console.log("Calculated values from transformed array-like object:", calculated);
}
handleArrayLike(10, 20, 30);

console.log("\n=== ALL EXERCISES EXECUTED SUCCESSFULLY ===");