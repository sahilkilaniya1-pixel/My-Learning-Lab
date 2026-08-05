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







/**
 * ==========================================
 * PROBLEM 03: Find Second Largest Element
 * ==========================================
 * Goal: Find second distinct largest number without sorting the array.
 * Approach: Single Pass Search (Tracking Top 2 Extremes)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// Input Data
const data = [12, 35, 1, 10, 34, 1];

let largest = -Infinity;
let secondLargest = -Infinity;

// Logic: Update largest and secondLargest dynamically
for (let i = 0; i < data.length; i++) {
    const current = data[i];

    if (current > largest) {
        // Demote previous largest to secondLargest
        secondLargest = largest;
        largest = current;
    } else if (current > secondLargest && current !== largest) {
        // Update secondLargest if current falls between top two
        secondLargest = current;
    }
}

console.log("Input Array    :", data);
console.log("Largest Value  :", largest);        // Expected: 35
console.log("Second Largest :", secondLargest);  // Expected: 34







/**
 * ==========================================
 * PROBLEM 04: Check If Array Is Sorted
 * ==========================================
 * Goal: Determine if array elements are arranged in non-decreasing order.
 * Approach: Adjacent Pair Comparison with Early Exit
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// Function Wrapper to test multiple cases cleanly
function checkIfSorted(arr) {
    let isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
        // If current element is greater than next element, sorting fails
        if (arr[i] > arr[i + 1]) {
            isSorted = false;
            break; // Stop execution immediately (Performance Optimization)
        }
    }

    return isSorted;
}

// Test Cases
const sortedArr = [10, 20, 30, 40, 50];
const unsortedArr = [10, 20, 15, 40, 50];

console.log("Testing [10, 20, 30, 40, 50] -> Is Sorted?", checkIfSorted(sortedArr));   // Expected: true
console.log("Testing [10, 20, 15, 40, 50] -> Is Sorted?", checkIfSorted(unsortedArr)); // Expected: false





