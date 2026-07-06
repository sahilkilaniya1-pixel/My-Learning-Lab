// =========================================================================
// JAVASCRIPT FOUNDATION: ADVANCED ALGORITHMS & CORE CODING PATTERNS
// =========================================================================

// =========================================================================
// PATTERN 1: ARRAY EXTRACTORS (Find Max & Min)
// =========================================================================

/**
 * 🎯 QUESTION 1: Find Maximum and Minimum Elements
 * * Task: Write a function to find both the maximum and minimum numbers in an array.
 * Do not use built-in helpers like Math.max(), Math.min(), or array .sort().
 * * * Core Logic: Assume the first element (index 0) is both the maximum and minimum.
 * Iterate through the rest of the array starting from index 1. If any element is greater 
 * than current 'max', update 'max'. If any element is smaller than current 'min', update 'min'.
 * * * Input:  [7, 2, 15, 1, 9]
 * * Output: { maximum: 15, minimum: 1 }
 */

function findMaxMin(arr) {
    // Edge Case: Handle empty arrays gracefully
    if (arr.length === 0) return "Array is empty";

    let max = arr[0]; // Initialize max with the first element
    let min = arr[0]; // Initialize min with the first element

    for (let i = 1; i < arr.length; i++) {
        // Check and update maximum element
        if (arr[i] > max) {
            max = arr[i]; 
        }
        // Check and update minimum element
        if (arr[i] < min) {
            min = arr[i]; 
        }
    }

    return { maximum: max, minimum: min };
}

console.log("--- Pattern 1: Find Max and Min Demo ---");
console.log("Result:", findMaxMin([7, 2, 15, 1, 9])); 
// Expected Output: { maximum: 15, minimum: 1 }
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 2: CYCLIC SHIFTING (Array Rotation)
// =========================================================================

/**
 * 🎯 QUESTION 2: Rotate Array Right by 'K' Positions
 * * Task: Rotate an array to the right by 'k' steps without using built-in mutating 
 * methods like .pop(), .push(), .shift(), or .unshift().
 * * * Core Logic: To rotate elements efficiently without a temporary shift loop, we use 
 * a mathematical modulo formula. The target position for any element at index 'i' 
 * after shifting 'k' places will always be: newIndex = (i + k) % array_length.
 * * * Input:  [10, 20, 30, 40], k = 1
 * * Output: [40, 10, 20, 30]
 */

function rotateArray(arr, k) {
    let n = arr.length;
    if (n <= 1) return arr; // Edge Case: No rotation needed for small arrays
    
    let rotated = []; 
    
    // Handle cases where k is larger than the array length (e.g., length 3, k = 4 behaves like k = 1)
    k = k % n; 

    for (let i = 0; i < n; i++) {
        let newIndex = (i + k) % n; // Compute cyclic target index
        rotated[newIndex] = arr[i]; // Manually map value to the calculated index
    }

    return rotated;
}

console.log("--- Pattern 2: Array Rotation Demo ---");
console.log("Original Array: [10, 20, 30, 40], K = 1");
console.log("Rotated Array: ", rotateArray([10, 20, 30, 40], 1)); 
// Expected Output: [40, 10, 20, 30]
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 3: STATE TRACKING & TEXT PROCESSING (Word Count)
// =========================================================================

/**
 * 🎯 QUESTION 3: Count Words in a Sentence
 * * Task: Given a string sentence, count the total number of words present inside it.
 * You cannot use the built-in .split(" ") method or regular expressions.
 * * * Core Logic: We track state using a boolean flag variable 'inWord'. We loop through 
 * every single character. If we hit a non-space character while 'inWord' is false, it marks 
 * the beginning of a fresh word, so we increment the count. If we hit a space character (" "), 
 * we toggle 'inWord' back to false. This automatically skips leading, trailing, and multiple consecutive internal spaces.
 * * * Input:  "   Hello   bhai kaise   ho   "
 * * Output: 4
 */

function countWords(str) {
    let wordCount = 0;
    let inWord = false; // Flag status to track whether we are currently inside a word boundary

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") { 
            // If character is not a space and we weren't already inside a word sequence
            if (inWord === false) {
                wordCount++; // Detected a new word start segment
                inWord = true; // Set state indicator to true
            }
        } else {
            // When a space character is encountered, it terminates the active word tracking sequence
            inWord = false;
        }
    }

    return wordCount;
}

console.log("--- Pattern 3: Word Count Demo ---");
console.log("Word Count:", countWords("   Hello   bhai kaise   ho   ")); 
// Expected Output: 4
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 4: TWO-POINTERS ALGORITHM (Palindrome Verification)
// =========================================================================

/**
 * 🎯 QUESTION 4: String Palindrome Verification
 * * Task: Determine whether a given string is a valid palindrome (reads the same 
 * forward and backward) without using string reversal built-in tricks like .reverse().
 * * * Core Logic: Instead of recreating or cloning an optimized mirrored string sequence, 
 * use the Two-Pointer technique. Place a 'left' pointer at index 0 and a 'right' pointer 
 * at string.length - 1. Loop and match characters while moving pointers toward the center. 
 * Terminate early and return false if any mismatch occurs.
 * * * Input:  "radar" -> Output: true
 * * Input:  "hello" -> Output: false
 */

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        // Immediate exit configuration if structural mirroring fails
        if (str[left] !== str[right]) {
            return false; // Not a palindrome
        }
        left++;  // Move the left index pointer one step inward
        right--; // Move the right index pointer one step inward
    }

    return true; // Successfully traversed across matching structural bounds
}

console.log("--- Pattern 4: Palindrome Check Demo ---");
console.log("Is 'radar' a Palindrome?:", isPalindrome("radar")); // Expected Output: true
console.log("Is 'hello' a Palindrome?:", isPalindrome("hello")); // Expected Output: false
console.log("\n-------------------------------------------");