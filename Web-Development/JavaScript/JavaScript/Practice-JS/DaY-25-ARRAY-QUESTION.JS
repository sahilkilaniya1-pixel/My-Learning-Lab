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


