/**
 * ==========================================
 * PROBLEM 01: Remove All Zeros From Array
 * ==========================================
 * Goal: Filter out all zeros from an array without using inbuilt .filter() or .push()
 * Approach: Index Pointer Traversal
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// Input Data
const numbers = [2, 0, 4, 0, 5];
const result = [];
let targetIndex = 0; // Pointer to track position in result array

// Logic: Traverse through input array
for (let i = 0; i < numbers.length; i++) {
    // If element is non-zero, store it at targetIndex
    if (numbers[i] !== 0) {
        result[targetIndex] = numbers[i];
        targetIndex++; // Move target pointer forward
    }
}

// Console Outputs
console.log("Original Array :", numbers);
console.log("Non-Zero Array :", result); // Expected Output: [2, 4, 5]




/**
 * ==========================================
 * PROBLEM 02: Reverse Array In-Place
 * ==========================================
 * Goal: Reverse an array without using .reverse() or creating a new array.
 * Approach: Two-Pointers Technique (Swapping)
 * Time Complexity: O(n)
 * Space Complexity: O(1) -> Space Optimized
 */

// Input Data
const arrayToReverse = [50, 40, 30, 20, 10];

let leftPointer = 0;                             // Start of array
let rightPointer = arrayToReverse.length - 1;   // End of array

console.log("Before Reverse:", [...arrayToReverse]);

// Logic: Swap elements until pointers meet in the middle
while (leftPointer < rightPointer) {
    // Swap using temporary variable
    const temp = arrayToReverse[leftPointer];
    arrayToReverse[leftPointer] = arrayToReverse[rightPointer];
    arrayToReverse[rightPointer] = temp;

    // Shift pointers inward
    leftPointer++;
    rightPointer--;
}

console.log("After Reverse :", arrayToReverse); // Expected Output: [10, 20, 30, 40, 50]




