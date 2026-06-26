// Arrays in JS are used to store multiple values in a single variable. 
// They are a special type of object that can hold a collection of elements, 
// which can be of any data type, including numbers, strings, objects, and even other arrays.

// --- 1. BASIC ARRAY OPERATIONS ---

// Creating an array
let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

// Accessing elements in an array
console.log(fruits);
console.log(fruits.length); // Length of the array
console.log(fruits[0]);     // Accessing the first element
console.log(fruits[1]);     // Accessing the second element
console.log(fruits[2]);     // Accessing the third element
console.log(fruits[3]);     // Accessing the fourth element

// Modifying elements in an array
fruits[1] = 'Grapes';       // Changing 'Banana' to 'Grapes'
console.log(fruits);

// Adding elements to an array
fruits.push('Pineapple');   // Adding 'Pineapple' at the end of the array
console.log(fruits);

// Removing elements from an array
fruits.pop();               // Removing the last element ('Pineapple')
console.log(fruits);

fruits.shift();             // Removing the first element ('Apple')
console.log(fruits);

fruits.unshift('Strawberry'); // Adding 'Strawberry' at the beginning of the array
console.log(fruits);

// --- 2. MERGING, SLICING & SPLICING ---

// Using concat method to merge two arrays
let tropicalFruits = ['Papaya', 'Guava'];
let allFruits = fruits.concat(tropicalFruits);
console.log(allFruits);

// Using slice method to create a new array by slicing a portion of the original array
let slicedFruits = fruits.slice(1, 3); // Slicing from index 1 to 2 (does not include index 3)
console.log(slicedFruits);

// Using splice method to add/remove elements from an array
fruits.splice(2, 1, 'Kiwi'); // Removing 1 element at index 2 and adding 'Kiwi'
console.log(fruits);

// --- 3. ITERATION & LOOPS ---

// Iterating through an array using a standard for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach method to iterate through an array
fruits.forEach(function (fruit) {
    console.log(fruit);
});

// Using for...of loop and toUpperCase()
let cities = ["delhi", "pune", "grugoan", "hyderabad", "mumbai"];
for (let city of cities) {
    console.log(city.toUpperCase());
}

// --- 4. PRACTICE QUESTIONS ---

// Question 1: Given an array with student marks -> [23, 45, 67, 12, 89, 56]
// Find the average marks of the entire class.
let marks = [23, 45, 67, 12, 89, 56];
let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(`Avg marks of the class = ${avg}`);

// Question 2: Given an array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Update the array to store the final price after applying the offer.
let items = [250, 645, 300, 900, 50];

for (let i = 0; i < items.length; i++) {
    let discount = items[i] * 0.10; // Calculating 10% discount
    items[i] -= discount;
}
console.log(items); // Output: [225, 580.5, 270, 810, 45]

// --- 5. ADVANCED HIGH-ORDER METHODS (ES6+) ---

// map() — Used to create a new array by transforming elements
// Instead of mutating the original array with a loop, map returns a brand new array without touching the old one.
let prices = [100, 200, 300];
let finalPrices = prices.map(val => val * 0.9); // Applies a direct 10% off
console.log(finalPrices); // [90, 180, 270]

// filter() — Used to filter elements based on a condition
// Creates a new array filled with elements that pass a specific test.
let allMarks = [85, 35, 44, 97, 23];
let passingMarks = allMarks.filter(val => val > 40);
console.log(passingMarks); // [85, 44, 97]

// reduce() — Used to reduce the array down to a single value
// Multiplies or accumulates values together. It handles what a loop with a counter variable normally does, but in a single line.
let numbers = [1, 2, 3, 4];
let totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum); // 10

// --- 6. SEARCHING IN ARRAYS ---

// indexOf() and includes() — Used for searching primitive values (strings/numbers)
// includes() checks if an element exists in the array (returns true/false).
// indexOf() returns the exact index position of that element.
let modernFruits = ['Apple', 'Mango', 'Kiwi'];
console.log(modernFruits.includes('Mango')); // true
console.log(modernFruits.indexOf('Kiwi'));   // 2

// find() and findIndex() — Used for searching inside arrays of Objects
// includes() doesn't work well with objects. Use find() to grab an object matching a condition, and findIndex() for its position.
let students = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" }
];

// Finding a specific student object by ID
let student = students.find(s => s.id === 2);
console.log(student); // { id: 2, name: "Amit" }

// Finding the index of that specific student object
let studentIndex = students.findIndex(s => s.id === 2);
console.log(studentIndex); // 1

// --- 7. SORTING & REVERSING ---

// Array Sorting (sort() and reverse())
// Used to reverse an array or arrange it in alphabetical order.
let alphabets = ['B', 'D', 'A', 'C'];
alphabets.sort();
console.log(alphabets); // ['A', 'B', 'C', 'D']

alphabets.reverse();
console.log(alphabets); // ['D', 'C', 'B', 'A']

// Note: When sorting numbers, always pass a compare function like sort((a, b) => a - b),
// because JS treats numbers as strings by default when using sort() without arguments.

// --- 8. SPREAD OPERATOR (...) ---

// Spread Operator — Used to unpack, copy, or combine arrays smoothly
// While concat() works, modern JS uses the spread operator (...) because it unpacks elements effortlessly.
let arr1 = [1, 2];
let arr2 = [3, 4];

// Merging arrays together
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

// Creating a shallow clone/copy of an array
let copyArr = [...arr1];




// Questions =
// Create an array to store companies -> "Bloomberg,"Microsft", "uber","Google","IBM","Netflix"
// -> Remove the first company from the array
// -> Remove ubder & Add Ola in its place
// -> Add Amazon at the end

let companies = ["Bloomberg","Microsft","uber","Google","IBM","Netflix"]
// console.log(companies)
// companies.shift();     //['Microsft', 'uber', 'Google', 'IBM', 'Netflix']
// companies.splice(2,1,"ola") // ['Bloomberg', 'Microsft', 'ola', 'Google', 'IBM', 'Netflix']
companies.push("amazon")  //['Bloomberg', 'Microsft', 'uber', 'Google', 'IBM', 'Netflix', 'amazon']