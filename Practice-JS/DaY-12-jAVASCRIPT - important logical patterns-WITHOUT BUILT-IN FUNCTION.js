// =========================================================================
// Pattern 8: Second Largest Number (Without Array Sorting)
// =========================================================================
// Problem Statement: Find the second largest number in an array without using 
// built-in methods like .sort() or Math.max().
//
// Approach:
// Maintain two variables: 'largest' and 'secondLargest'. Iterate through the array.
// - If the current element is greater than 'largest', the old 'largest' becomes 
//   the 'secondLargest', and 'largest' is updated to the current element.
// - If it's smaller than 'largest' but greater than 'secondLargest', update 'secondLargest'.
function getSecondLargest(arr) {
    if (arr.length < 2) return "Array must contain at least 2 elements";

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest; // Old largest drops to second place
            largest = arr[i];        // New largest found
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];  // Smaller than largest but greater than secondLargest
        }
    }

    return secondLargest === -Infinity ? "No second largest element exists" : secondLargest;
}

console.log(getSecondLargest([12, 35, 1, 10, 34, 1])); 
// Output: 34


// =========================================================================
// Pattern 9: Subarray Sum / Sliding Window (Without .slice())
// =========================================================================
// Problem Statement: Given an array and an integer 'k', find the maximum sum 
// of 'k' consecutive elements.
// Example: If array is [1, 4, 2, 10, 23, 3, 1, 0, 20] and k = 4, find the max sum.
//
// Approach (Sliding Window):
// First, calculate the sum of the first 'k' elements. Then, start a loop from index 'k'.
// Move the window forward by adding the next element and subtracting the first element 
// of the previous window.
function maxSubarraySum(arr, k) {
    if (arr.length < k) return "Invalid size";

    // 1. Calculate the sum of the first 'k' elements
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    let windowSum = maxSum;

    // 2. Slide the window forward (Add next element, subtract previous first element)
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]; // Add new element, remove the leftmost element
        
        if (windowSum > maxSum) {
            maxSum = windowSum; // Update maxSum if a larger sum is found
        }
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); 
// Output: 39 (Since 4 + 2 + 10 + 23 = 39 is the maximum sum)


// =========================================================================
// Pattern 10: Matrix Transpose (2D Array Rotation)
// =========================================================================
// Problem Statement: Given a 2D matrix, find its Transpose. 
// Transposing means converting all rows into columns and columns into rows.
// Input Matrix:          Output Transpose:
// [ [1, 2],              [ [1, 3, 5],
//   [3, 4],                [2, 4, 6] ]
//   [5, 6] ]
//
// Approach:
// Create a new empty 2D array. Use nested loops where the outer loop iterates 
// through columns and the inner loop iterates through rows. Map matrix[r][c] 
// to transpose[c][r].
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = [];

    // Create empty rows for the new transposed matrix
    for (let i = 0; i < cols; i++) {
        result[i] = [];
    }

    // Loop to swap rows and columns
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            result[c][r] = matrix[r][c]; // Swapping row and column indices
        }
    }

    return result;
}

const myMatrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(transposeMatrix(myMatrix));
// Output: [ [1, 3, 5], [2, 4, 6] ]


// =========================================================================
// Pattern 11: Remove All Occurrences of an Element
// =========================================================================
// Problem Statement: Remove all occurrences of a specific target element from 
// an array and return the updated array without using .filter() or .splice().
//
// Approach:
// Create a new empty array. Iterate through the input array and apply a condition: 
// if the current element is not equal to the target, push it manually into the new array.
function removeElement(arr, target) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== target) {
            result[result.length] = arr[i]; // Store all elements except the target
        }
    }

    return result;
}

console.log(removeElement([3, 2, 2, 3, 4, 3], 3)); 
// Output: [2, 2, 4] (All occurrences of 3 are removed)