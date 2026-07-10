// =========================================================================
// JavaScript Built-in Array Methods Exercises
// =========================================================================
// This file contains practical solutions for common JavaScript array manipulation problems.
// It covers essential built-in methods such as sort(), map(), find(), every(), some(), join(), and split().

// Given Array:
let a = [2, 4, 6, 2, 0, 56, 32, 65, 78, 65, 78, 95];

// -------------------------------------------------------------------------
// Question 1: Array Operations
// -------------------------------------------------------------------------

// 1. Sort the array in increasing and decreasing order

// Sorting in Increasing Order (Ascending)
let increasing = [...a].sort((x, y) => x - y);

// Sorting in Decreasing Order (Descending)
let decreasing = [...a].sort((x, y) => y - x);

// Line-by-Line Explanation:
// - [...a]: The spread operator creates a shallow copy of the original array. This prevents the .sort() method from modifying (mutating) our original array 'a'.
// - .sort((x, y) => x - y): By default, JavaScript sorts elements alphabetically as strings. To sort numbers correctly, we pass a comparison function. If x - y is negative, x is placed before y (Increasing).
// - .sort((x, y) => y - x): If y - x is positive, y is placed before x, resulting in a high-to-low order (Decreasing).


// 2. Find the product (multiply) of the two largest numbers

let sortedDesc = [...a].sort((x, y) => y - x);
let multiplyTwoBiggest = sortedDesc[0] * sortedDesc[1]; 

// Line-by-Line Explanation:
// - sortedDesc: We first sort the array from largest to smallest.
// - sortedDesc[0] and sortedDesc[1]: The largest number sits at index 0, and the second largest sits at index 1. Multiplying them gives the desired product.


// 3. Find the product of the smallest and largest number

let sortedInc = [...a].sort((x, y) => x - y);
let multiplySmallestBiggest = sortedInc[0] * sortedInc[sortedInc.length - 1];

// Line-by-Line Explanation:
// - sortedInc: We sort the array from smallest to largest.
// - sortedInc[0]: Represents the smallest number (index 0).
// - sortedInc[sortedInc.length - 1]: Points dynamically to the last element of the array, which is the largest number.


// -------------------------------------------------------------------------
// Question 2: Type Conversion
// -------------------------------------------------------------------------

// 1. Convert an array into a string
const arr = [2, 4, 5, 3, 5, 3, 2, 5, "a", "b"];
let arrayToString = arr.join(","); 
// Output: "2,4,5,3,5,3,2,5,a,b"

// Line-by-Line Explanation:
// - .join(","): The .join() method concatenates all elements of an array into a single string. The argument "," specifies that a comma should separate each element in the output string.


// 2. Convert a string into an array
let str = "Aayush";
let stringToArray = str.split(""); 
// Output: ['A', 'a', 'y', 'u', 's', 'h']

// Line-by-Line Explanation:
// - .split(""): The .split() method splits a string into an array of substrings. Passing an empty string "" tells JavaScript to break down the string at every single character.


// -------------------------------------------------------------------------
// Question 3: Dynamic Mapping (Length of Names)
// -------------------------------------------------------------------------
// Problem: Transform a list of names into a list containing the lengths of those names using a built-in function.

let names = ["Aayush", "Sahil", "Akshya"];
let lengths = names.map(name => name.length); 
// Output: [6, 5, 6]

// Line-by-Line Explanation:
// - .map(): This method loops through each element of the original array, transforms it based on the return value of the callback function, and returns a completely new array of the same length.
// - name => name.length: For every individual item (name), it reads its .length property and saves it into the new array.


// -------------------------------------------------------------------------
// Question 5: Advanced User Array Lookups
// -------------------------------------------------------------------------

const users = [
  { name: "John", age: 17, isActive: true },
  { name: "Jane", age: 22, isActive: false },
  { name: "Bob", age: 19, isActive: true },
  { name: "Alice", age: 25, isActive: true }
];

// 1. Find the first user who is active and over the age of 18
let activeAdult = users.find(user => user.isActive === true && user.age > 18);
// Output: { name: "Bob", age: 19, isActive: true }

// Line-by-Line Explanation:
// - .find(): This method searches through the array and returns the very first element that satisfies the given conditional evaluation.
// - user.isActive === true && user.age > 18: The logical AND (&&) operator ensures that both conditions must be true for a user to match. It skips John (under 18) and Jane (not active), returning Bob.


// 2. Check if every user in the list is active
let isAllActive = users.every(user => user.isActive === true);
// Output: false

// Line-by-Line Explanation:
// - .every(): This method checks if all elements in the array pass the condition. It returns a boolean value (true or false).
// - Because Jane has isActive: false, the condition fails, and it returns false.


// 3. Check if at least one user is under the age of 18
let hasMinor = users.some(user => user.age < 18);
// Output: true

// Line-by-Line Explanation:
// - .some(): This method checks if at least one element in the array passes the condition. It also returns a boolean value.
// - Since John is 17 (age < 18), the statement evaluates to true.



// =========================================================================
// 6. Array Filtering (.filter())
// =========================================================================
// What it does: It evaluates every single element in an array against a condition 
// and returns a brand-new array containing only the elements that pass that condition.

const usersList = [
  { name: "John", age: 17, isActive: true },
  { name: "Jane", age: 22, isActive: false },
  { name: "Bob", age: 19, isActive: true },
  { name: "Alice", age: 25, isActive: true }
];

// Get all users who are active
let activeUsers = usersList.filter(user => user.isActive === true);
// Output: Only the user objects for John, Bob, and Alice will be stored in this new array.

// Line-by-Line Explanation:
// - .filter(): Iterates through the entire array and filters items, keeping only those where the callback function returns true.
// - user.isActive === true: It filters out Jane because her isActive status evaluates to false.


// =========================================================================
// 7. Array Accumulation (.reduce())
// =========================================================================
// What it does: It executes a reducer function on each element of the array, 
// eventually processing and condensing the entire array into a single output value 
// (such as a total sum, a single product, or a combined object).

const expenses = [100, 250, 500, 80];

// Calculate the total sum of expenses
let totalExpense = expenses.reduce((accumulator, current) => accumulator + current, 0);
// Output: 930

// Line-by-Line Explanation:
// - .reduce(...): Takes a callback function and an initial starting value (which is set to 0 here).
// - accumulator: This acts like a continuous running total bucket that carries the accumulated result forward through each step.
// - current: This represents the current item in the array being processed during the loop.
// - accumulator + current: In every step, the current expense value is added into the running total bucket.


// =========================================================================
// 8. Looping over Elements (.forEach())
// =========================================================================
// What it does: It simply executes a provided function once for each array element. 
// Unlike methods like .map(), it does not return a new array; it is strictly used to 
// perform actions or side-effects (such as console logging or UI rendering).

const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index} is ${fruit}`);
});

// Line-by-Line Explanation:
// - .forEach(): A clean, modern, and readable replacement for the traditional imperative 'for' loop.
// - (fruit, index): It automatically grants you clean access to both the current item value ('fruit') and its current position index ('index') during each step of the loop.


// =========================================================================
// 9. Finding Index (.findIndex())
// =========================================================================
// What it does: It operates similarly to the .find() method, but instead of returning 
// the actual matching element, it returns the Index (position number) of that element. 
// If no matching element is found, it returns -1.

const scores = [45, 72, 98, 60];

// Find the index of the first score that is a distinction (>= 75)
let distinctionIndex = scores.findIndex(score => score >= 75);
// Output: 2 (because the value 98 matches the condition and sits at index position 2)

// Line-by-Line Explanation:
// - .findIndex(): Scans the array sequentially from left to right.
// - score >= 75: The moment it encounters the value 98, it satisfies the condition, halts the search, and returns its index location (2).


// =========================================================================
// 10. Checking Presence (.includes())
// =========================================================================
// What it does: It determines whether an array includes a specific value among its entries. 
// It returns a clean boolean value: true if the value is found, and false if it is not.

const cart = ["Laptop", "Mouse", "Keyboard"];
let hasTrimmer = cart.includes("Trimmer"); // Output: false
let hasMouse = cart.includes("Mouse");     // Output: true

// Line-by-Line Explanation:
// - .includes("Value"): Scans the entire array for an exact match. It is highly efficient for quick structural checks without writing verbose loops.


// =========================================================================
// QUICK REFERENCE SUMMARY CHART
// =========================================================================
// Copy and paste this Markdown table into your GitHub README.md file 
// to create an exceptional technical reference section for your profile:
/*

| Method Name | Returns | Modifies Original Array? | Best Used For |
| :--- | :--- | :--- | :--- |
| **.map()** | New Array | No | Transforming data structures or items individually. |
| **.filter()** | New Array | No | Selecting specific items that pass a conditional test. |
| **.reduce()** | Single Value | No | Calculating grand totals, structures, or compounding elements. |
| **.find()** | Single Element | No | Locating the very first item that matches a specific criteria. |
| **.forEach()** | undefined | No | Executing sequential side-effects (like logging or updating UI). |
| **.sort()** | Sorted Array | **Yes (Mutates)** | Reordering list arrays alphabetically or numerically. |

*/