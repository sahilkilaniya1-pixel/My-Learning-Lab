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


// =========================================================================
// PATTERN 5: MULTI-POINTER MERGING (Merge Sorted Arrays)
// =========================================================================

/**
 * 🎯 QUESTION 5: Merge Two Sorted Arrays
 * * Task: Given two arrays that are already sorted in ascending order, merge them 
 * into a single unified array that remains completely sorted.
 * Do not use built-in helpers like .concat() or .sort().
 * * * Core Logic: Using a sorted array merging strategy (similar to Merge Sort), initialize 
 * two pointers ('i' for arr1, 'j' for arr2) at index 0. Compare elements at both pointers, 
 * insert the smaller value into the 'merged' destination container, and advance that respective pointer.
 * Once one array exhausts, flush all remaining items from the alternate array into the final structure.
 * * * Input:  [1, 3, 5], [2, 4, 6]
 * * Output: [1, 2, 3, 4, 5, 6]
 */

function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0; // Iteration track pointer for arr1
    let j = 0; // Iteration track pointer for arr2

    // Process both arrays simultaneously until one structural bound is exhausted
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged[merged.length] = arr1[i]; // Insert value at structural endpoint
            i++; // Move pointer forward
        } else {
            merged[merged.length] = arr2[j];
            j++; // Move pointer forward
        }
    }

    // Append remaining elements of arr1 if arr2 finishes early
    while (i < arr1.length) {
        merged[merged.length] = arr1[i];
        i++;
    }

    // Append remaining elements of arr2 if arr1 finishes early
    while (j < arr2.length) {
        merged[merged.length] = arr2[j];
        j++;
    }

    return merged;
}

console.log("--- Pattern 5: Merge Sorted Arrays Demo ---");
console.log("Merged Result:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Expected Output: [1, 2, 3, 4, 5, 6]
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 6: STRING COMPRESSION / LOOK-AHEAD SEGMENTATION
// =========================================================================

/**
 * 🎯 QUESTION 6: String Compression using Run-Length Encoding
 * * Task: Design a basic string compression algorithm using the counts of repeated characters.
 * For example, "aabcccccaaa" transforms to "a2b1c5a3". If the compressed string length is 
 * equal to or greater than the original string length, return the original string. Do not use built-in string methods.
 * * * Core Logic: Run a loop through the string while evaluating consecutive sequences. Employ a look-ahead condition 
 * checking if str[i] matches str[i + 1]. If it evaluates to true, increment our character tracking counter. 
 * If it evaluates to false, append the character and its frequency to our result, then reset the frequency tracking state back to 1.
 * * * Input:  "aabcccccaaa" -> Output: "a2b1c5a3"
 * * Input:  "abc"         -> Output: "abc" (Since "a1b1c1" is longer than original text tracking bounds)
 */

function compressString(str) {
    if (str.length === 0) return str;

    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        // Look-ahead check: compare current character with the next element boundary
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            // Sequence boundary broken: flush current state chunk data
            compressed += str[i] + count;
            count = 1; // Reset matching counter tracking state
        }
    }

    // Optimization Check: If compression does not improve length bounds, return original data
    if (compressed.length >= str.length) {
        return str;
    }

    return compressed;
}

console.log("--- Pattern 6: String Compression Demo ---");
console.log("Compressed 'aabcccccaaa':", compressString("aabcccccaaa")); // Expected Output: "a2b1c5a3"
console.log("Compressed 'abc':        ", compressString("abc"));         // Expected Output: "abc"
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 7: MATHEMATICAL INFERENCE (Arithmetic Progression Sum Optimization)
// =========================================================================

/**
 * 🎯 QUESTION 7: Find the Missing Number
 * * Task: You are given an array containing an unsorted sequence of distinct numbers 
 * ranging from 1 to 'n'. However, one exact number is missing from this range sequence.
 * Deduce the missing number without sorting or utilizing array search helpers.
 * * * Core Logic: Instead of heavy loops or hash table mapping strategies, utilize an Arithmetic Progression formula. 
 * Calculate the true mathematical sum total that should exist from 1 to 'n' using: 
 * $$TotalSum = \frac{n \times (n + 1)}{2}$$
 * Then, calculate the actual accumulated sum of all values inside the array manually. 
 * The mathematical difference between TotalSum and ArraySum instantly isolates the missing element.
 * * * Input:  [1, 2, 4, 5], n = 5
 * * Output: 3
 */

function findMissingNumber(arr, n) {
    // 1. Calculate target theoretical summation baseline
    let totalSum = (n * (n + 1)) / 2;

    // 2. Accumulate the absolute physical numerical values present
    let arraySum = 0;
    for (let i = 0; i < arr.length; i++) {
        arraySum += arr[i];
    }

    // 3. Absolute delta reveals the unmapped isolated slot
    return totalSum - arraySum;
}

console.log("--- Pattern 7: Find Missing Number Demo ---");
console.log("Missing Element:", findMissingNumber([1, 2, 4, 5], 5)); 
// Expected Output: 3
console.log("\n-------------------------------------------");