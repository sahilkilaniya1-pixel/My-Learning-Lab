// =========================================================================
// JAVASCRIPT FOUNDATION: PRACTICE SHEET (ALGORITHMS & LOGIC BUILDING)
// =========================================================================

// =========================================================================
// LEVEL 1: BASIC (Array Searching)
// =========================================================================

/**
 * 🎯 QUESTION 1: Find Element Index (Linear Search)
 * * Task: Create a function that accepts an array and a target element.
 * Without using any built-in array methods (like indexOf or findIndex), 
 * search for the target element and return its index. If the element is 
 * not present in the array, return -1.
 * * * Input:  [10, 20, 30, 40, 50], Target: 30 -> Output: 2
 * * * Input:  [10, 20, 30, 40, 50], Target: 99 -> Output: -1
 */

function findIndex(arr, target) {
    // Only a single loop is needed to traverse through the array from start to end
    for (let i = 0; i < arr.length; i++) {
        
        // If the current element matches the target, return its index instantly
        if (arr[i] === target) {
            return i; // Early exit: function stops executing further immediately
        }
    }
    // If the entire loop finishes and the target is not found, return -1
    return -1; 
}

console.log("--- Level 1: Find Index (Linear Search) Demo ---");
let indexResult1 = findIndex([10, 20, 30, 40, 50], 50);
console.log("Index of 50:", indexResult1); // Expected Output: 4

let indexResult2 = findIndex([10, 20, 30, 40, 50], 99);
console.log("Index of 99:", indexResult2); // Expected Output: -1 (Not found)


// =========================================================================
// LEVEL 2: INTERMEDIATE (Array Manipulation & Merging)
// =========================================================================

/**
 * 🎯 QUESTION 2: Merge Two Arrays (Without built-in methods)
 * * Task: Write a function that takes two separate arrays and merges them 
 * into a single combined array. Do not use built-in methods like .concat().
 * * * Input:  [1, 2], [3, 4, 5]
 * Output: [1, 2, 3, 4, 5]
 */

// --- Method 1: Manual Index Insertion Loop Approach ---
const mergeArrays = (arr1, arr2) => {
    let combinedArray = []; // Step 1: Create a new empty container
    
    // Step 2: First loop - Insert all elements of arr1 into the new array
    for (let i = 0; i < arr1.length; i++) {
        combinedArray[combinedArray.length] = arr1[i];
    }
    // Step 3: Second loop - Insert all elements of arr2 sequentially
    for (let j = 0; j < arr2.length; j++) {
        combinedArray[combinedArray.length] = arr2[j];
    }
    // Step 4: Return the final combined array
    return combinedArray;
};

// --- Method 2: Modern ES6 Spread Operator Approach (1-Line Shortcut) ---
const mergeArraysModern = (arr1, arr2) => [...arr1, ...arr2];

console.log("--- Level 2: Merge Arrays Demo ---");
console.log("Merged (Method 1 - Loop):  ", mergeArrays([1, 2], [3, 4, 5]));      // Output: [1, 2, 3, 4, 5]
console.log("Merged (Method 2 - Spread):", mergeArraysModern([1, 2], [3, 4, 5]));// Output: [1, 2, 3, 4, 5]


// =========================================================================
// LEVEL 3: ADVANCED-INTERMEDIATE (String Manipulation)
// =========================================================================

/**
 * 🎯 QUESTION 3: Check Palindrome (Two-Pointer Technique)
 * * Task: Create an arrow function that accepts a string and checks whether it 
 * is a palindrome. A palindrome reads the same backward as forward.
 * * * Input:  "racecar" -> Output: true
 * * * Input:  "Hello"   -> Output: false
 */

const isPalindrome = (str) => {
    let left = 0;                 // Pointer starting at the beginning
    let right = str.length - 1;    // Pointer starting at the very end

    // Loop runs until the left pointer meets or crosses the right pointer
    while (left < right) {
        // If a character mismatch is found at any point, it's not a palindrome
        if (str[left] !== str[right]) {
            return false; // Exit immediately with false
        }
        left++;  // Move the left pointer one step forward
        right--; // Move the right pointer one step backward
    }
    // If pointers crossed each other with zero mismatches, it is a valid palindrome
    return true;
};

console.log("--- Level 3: Is Palindrome Demo ---");
console.log("Is 'racecar' a Palindrome?:", isPalindrome("racecar")); // Expected Output: true
console.log("Is 'Hello' a Palindrome?:  ", isPalindrome("Hello"));   // Expected Output: false


// =========================================================================
// LEVEL 4: ADVANCED (Array Deduplication & Analysis)
// =========================================================================

/**
 * 🎯 QUESTION 4: Find Duplicate Elements
 * * Task: Write a function that takes an array and filters out all elements 
 * that appear more than once, returning a new array containing only the duplicates.
 * * * Input:  [1, 2, 3, 2, 4, 3, 5]
 * Output: [2, 3] (Because 2 and 3 are repeated)
 */

function findDuplicates(arr) {
    let duplicates = []; // Container to store duplicate items
    
    // Outer loop to select each element sequentially
    for (let i = 0; i < arr.length; i++) {
        // Inner loop to scan the remainder of the array for a match
        for (let j = i + 1; j < arr.length; j++) {
            
            if (arr[i] === arr[j]) {
                let alreadyAdded = false;
                
                // Safety check: Make sure this duplicate isn't already inside our collection
                for (let k = 0; k < duplicates.length; k++) {
                    if (duplicates[k] === arr[i]) {
                        alreadyAdded = true;
                        break;
                    }
                }
                
                // If it is unique to our list, push it safely
                if (!alreadyAdded) {
                    duplicates.push(arr[i]);
                }
            }
        }
    }
    return duplicates;
}

console.log("--- Level 4: Find Duplicates Demo ---");
console.log("Duplicate Elements: ", findDuplicates([1, 2, 3, 2, 4, 3, 5])); // Output: [2, 3]


// =========================================================================
// LEVEL 5: EXPERT (Array Rotation Challenges)
// =========================================================================

/**
 * 🎯 QUESTION 5: Rotate Array Right by One Position
 * * Task: Create a function that shifts all elements of an array to the right 
 * by one position. The last element of the array must move to the very front.
 * Do not use built-in heavy array mutating helper configurations.
 * * * Input:  [1, 2, 3, 4, 5]
 * Output: [5, 1, 2, 3, 4]
 */

// --- Method 1: Manual Index Shifting Loop Approach ---
function rotateArray(arr) {
    // Safety Check: If the array is empty or has only one element, no rotation is needed
    if (arr.length <= 1) return arr;

    let rotated = [];
    
    // Step 1: Assign the last element of the original array to the first index of the new array
    rotated[0] = arr[arr.length - 1];
    
    // Step 2: Traverse through the rest of the elements and shift them one spot right
    for (let i = 0; i < arr.length - 1; i++) {
        rotated[i + 1] = arr[i];
    }
    return rotated;
}

<<<<<<< HEAD
console.log("--- Level 4: Find Duplicates Demo ---");
console.log(findDuplicates([1, 2, 3, 2, 4, 3, 5]));       // Output: [2, 3]
console.log(findDuplicatesModern([1, 2, 3, 2, 4, 3, 5])); // Output: [2, 3]
console.log("\n-------------------------------------------");
=======
// --- Method 2: Modern ES6 Destructuring Approach ---
const rotateArrayModern = (arr) => {
    if (arr.length <= 1) return arr;
    let copy = [...arr];
    return [copy.pop(), ...copy];
};
console.log("Original Array:           [1, 2, 3, 4, 5]");
console.log("Rotated Array (Loop):    ", rotateArray([1, 2, 3, 4, 5]));       // Output: [5, 1, 2, 3, 4]
console.log("Rotated Array (Modern):  ", rotateArrayModern([1, 2, 3, 4, 5])); // Output: [5, 1, 2, 3, 4]
>>>>>>> 6e49059 (DaY-10-Update)


