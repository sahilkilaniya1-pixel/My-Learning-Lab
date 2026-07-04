// =========================================================================
// JAVASCRIPT FOUNDATION: PRACTICE SHEET (LEVEL 1 & LEVEL 2)
// =========================================================================

// =========================================================================
// LEVEL 1: BASIC (Array & Elements)
// =========================================================================

/**
 * 🎯 QUESTION 1: Count Occurrences
 * * Task: Create a function that accepts an array and a target number.
 * Without using any built-in array methods, count and return how many times 
 * the target number appears in the array.
 * * Input:  [2, 4, 2, 5, 2, 8], Target: 2
 * Output: 3 (Because 2 appears three times)
 */

function findCountOccurrences(arr, target) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++; // Increment count when target matches element
        }
    }
    
    return count; // FIXED: Moved outside the loop to ensure the entire array is scanned
}

console.log("--- Level 1: Count Occurrences Demo ---");
console.log("Occurrences of 4:", findCountOccurrences([4, 4, 2, 5, 2, 8], 4)); // Output: 2
console.log("Occurrences of 2:", findCountOccurrences([2, 4, 2, 5, 2, 8], 2)); // Output: 3
console.log("\n");


// =========================================================================
// LEVEL 2: INTERMEDIATE (String Manipulation)
// =========================================================================

/**
 * 🎯 QUESTION 2: Remove Vowels
 * * Task: Write a function that takes a string and returns a brand-new string 
 * with all the vowels (a, e, i, o, u, A, E, I, O, U) completely removed.
 * * Input:  "hello world"
 * Output: "hll wrld"
 */

// --- Method 1: Clean Loop & Lookup String Approach (No Array Methods) ---
function removeVowelsLoop(str) {
    let result = '';
    const vowels = 'aeiouAEIOU'; // Master reference string for vowels
    
    for (let i = 0; i < str.length; i++) {
        // If the current character is NOT found inside the vowels string, keep it
        if (!vowels.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

console.log("--- Level 2: Remove Vowels (Method 1) ---");
console.log("Output using Loop:", removeVowelsLoop("hello world")); // Output: "hll wrld"


// --- Method 2: Modern Regex Approach (1-Line Shortcut) ---
// Useful for showing students how senior developers handle string replacement efficiently
let originalStr = "hello world";
let cleanedStr = originalStr.replace(/[aeiouAEIOU]/g, ""); 

console.log("--- Level 2: Remove Vowels (Method 2) ---");
console.log("Output using Regex:", cleanedStr); // Output: "hll wrld"
