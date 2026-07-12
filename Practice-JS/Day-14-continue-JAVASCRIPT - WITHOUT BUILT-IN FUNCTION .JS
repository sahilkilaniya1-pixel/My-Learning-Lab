// =========================================================================
// JavaScript Array Manipulation: Pure Custom Algorithm Implementation
// =========================================================================
// Description: A comprehensive reference guide implementing complex array operations
// entirely from scratch WITHOUT using built-in methods (.sort, .map, .filter, etc.).
// Written natively using control structures for deep architectural clarity.

// -------------------------------------------------------------------------
// Initial Setup Data
// -------------------------------------------------------------------------
const numbersArray = [2, 4, 6, 2, 0, 56, 32, 65, 78, 65, 78, 95];

const mixedArray = [2, 4, 5, 3, 5, 3, 2, 5, "a", "b"];

const namesList = ["Aayush", "Sahil", "Akshya"];

const usersDataset = [
  { name: "John", age: 17, isActive: true },
  { name: "Jane", age: 22, isActive: false },
  { name: "Bob", age: 19, isActive: true },
  { name: "Alice", age: 25, isActive: true }
];

// Helper Function: Creates a shallow copy of an array without using slice/spread
function cloneArray(source) {
  let clone = [];
  for (let i = 0; i < source.length; i++) {
    clone[clone.length] = source[i];
  }
  return clone;
}

// =========================================================================
// 1. Array Sorting (Custom Bubble Sort)
// =========================================================================

// Ascending Order Implementation from scratch
const ascendingResult = cloneArray(numbersArray);
for (let i = 0; i < ascendingResult.length; i++) {
  for (let j = 0; j < ascendingResult.length - 1 - i; j++) {
    if (ascendingResult[j] > ascendingResult[j + 1]) {
      let temp = ascendingResult[j];
      ascendingResult[j] = ascendingResult[j + 1];
      ascendingResult[j + 1] = temp;
    }
  }
}
console.log(ascendingResult);
// EXPECTED OUTPUT: [0, 2, 2, 4, 6, 32, 56, 65, 65, 78, 78, 95] 

// Descending Order Implementation from scratch
const descendingResult = cloneArray(numbersArray);
for (let i = 0; i < descendingResult.length; i++) {
  for (let j = 0; j < descendingResult.length - 1 - i; j++) {
    if (descendingResult[j] < descendingResult[j + 1]) {
      let temp = descendingResult[j];
      descendingResult[j] = descendingResult[j + 1];
      descendingResult[j + 1] = temp;
    }
  }
}
console.log(descendingResult);
// EXPECTED OUTPUT: [95, 78, 78, 65, 65, 56, 32, 6, 4, 2, 2, 0]

/*
  Line-by-Line Explanation:
  - cloneArray(): Creates an isolated copy manually so our sorting operations don't mutate the original numbersArray.
  - Nested For Loops: Standard Bubble Sort strategy. It sequentially compares adjacent indices.
  - if (arr[j] > arr[j + 1]): For ascending order, if the left item is larger than the right item, they swap positions using a temporary storage variable ('temp').
  - if (arr[j] < arr[j + 1]): For descending order, it forces smaller numbers to migrate to the tail end instead.
*/

// =========================================================================
// 2. Extrapolated Mathematical Products
// =========================================================================

// Finding the two largest numbers cleanly without built-in functions
let max1 = -Infinity;
let max2 = -Infinity;
for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] > max1) {
    max2 = max1;
    max1 = numbersArray[i];
  } else if (numbersArray[i] > max2) {
    max2 = numbersArray[i];
  }
}
const productOfTwoLargest = max1 * max2;
console.log(productOfTwoLargest);
// EXPECTED OUTPUT: 7410 (Calculated via 95 * 78)

// Finding the absolute minimum and maximum element manually
let absoluteMin = numbersArray[0];
let absoluteMax = numbersArray[0];
for (let i = 1; i < numbersArray.length; i++) {
  if (numbersArray[i] < absoluteMin) absoluteMin = numbersArray[i];
  if (numbersArray[i] > absoluteMax) absoluteMax = numbersArray[i];
}
const productOfExtremes = absoluteMin * absoluteMax;
console.log(productOfExtremes);
// EXPECTED OUTPUT: 0 (Calculated via 0 * 95)

/*
  Line-by-Line Explanation:
  - Tracking max1 and max2: We loop through the collection once. If the current number beats max1, the old max1 value is demoted to max2, and the current element takes over max1.
  - Min/Max Search: By setting our initial boundary parameters to index 0, we can run a quick direct comparison on remaining values to find extremes in a single run.
*/

// =========================================================================
// 3. Data Type Conversions (Custom Join & Split Algorithms)
// =========================================================================

// Custom Array to String Serialization (Replicating .join(","))
let serializedString = "";
for (let i = 0; i < mixedArray.length; i++) {
  serializedString += mixedArray[i];
  if (i < mixedArray.length - 1) {
    serializedString += ",";
  }
}
console.log(serializedString);
// EXPECTED OUTPUT: "2,4,5,3,5,3,2,5,a,b"

// Custom String to Array Deserialization (Replicating .split(""))
const stringSample = "Aayush";
const deserializedArray = [];
for (let i = 0; i < stringSample.length; i++) {
  deserializedArray[deserializedArray.length] = stringSample[i];
}
console.log(deserializedArray);
// EXPECTED OUTPUT: ['A', 'a', 'y', 'u', 's', 'h']

/*
  Line-by-Line Explanation:
  - String Serialization loop: Appends each element to a string literal. The condition 'i < length - 1' ensures that trailing commas are omitted from the tail configuration.
  - String Deserialization loop: Since a string is internally indexable, we can safely loop through its sequence and allocate characters directly via bracket assignment onto the raw container array.
*/

// =========================================================================
// 4. Transformative Projections (Replicating .map())
// =========================================================================

const transformationResult = [];
for (let i = 0; i < namesList.length; i++) {
  transformationResult[transformationResult.length] = namesList[i].length;
}
console.log(transformationResult);
// EXPECTED OUTPUT: [6, 5, 6]

/*
  Line-by-Line Explanation:
  - transformationResult[transformationResult.length]: A high-efficiency alternative to using .push() that appends items using the dynamic length state of the destination target.
  - namesList[i].length: Measures the string size of each index position during programmatic traversal.
*/

// =========================================================================
// 5. Advanced Predicate Lookups (Replicating .find(), .every(), .some())
// =========================================================================

// Replicating .find() functionality
let matchedUser = undefined;
for (let i = 0; i < usersDataset.length; i++) {
  if (usersDataset[i].isActive === true && usersDataset[i].age > 18) {
    matchedUser = usersDataset[i];
    break; // Break execution immediately upon first successful hit
  }
}
console.log(matchedUser);
// EXPECTED OUTPUT: { name: "Bob", age: 19, isActive: true }

// Replicating .every() functionality
let functionalSanityCheck = true;
for (let i = 0; i < usersDataset.length; i++) {
  if (usersDataset[i].isActive !== true) {
    functionalSanityCheck = false;
    break; // Short circuit completely if an exception is encountered
  }
}
console.log(functionalSanityCheck);
// EXPECTED OUTPUT: false

// Replicating .some() functionality
let existenceEvaluation = false;
for (let i = 0; i < usersDataset.length; i++) {
  if (usersDataset[i].age < 18) {
    existenceEvaluation = true;
    break; // Satisfied upon detecting a single match
  }
}
console.log(existenceEvaluation);
// EXPECTED OUTPUT: true

/*
  Line-by-Line Explanation:
  - break Statements: Essential to mimic the optimized short-circuit mechanics of built-in evaluation logic. 
  - Structural Integrity (Every vs Some): Every assumes absolute compliance and seeks any rule-breaker to invalidate early, while Some assumes complete failure and searches for a lone validator to approve early.
*/

// =========================================================================
// 6. Conditional Subset Filtering (Replicating .filter())
// =========================================================================

const filteredSubset = [];
for (let i = 0; i < usersDataset.length; i++) {
  if (usersDataset[i].isActive === true) {
    filteredSubset[filteredSubset.length] = usersDataset[i];
  }
}
console.log(filteredSubset);
/* 
  EXPECTED OUTPUT:
  [
    { name: "John", age: 17, isActive: true },
    { name: "Bob", age: 19, isActive: true },
    { name: "Alice", age: 25, isActive: true }
  ]
*/

/*
  Line-by-Line Explanation:
  - Filter Algorithm: Allocates an isolated destination container array. The data payload inside the conditional sequence block is copied over to the new array ONLY if the isActive property evaluation returns true.
*/

// =========================================================================
// 7. Data Collection Accumulation (Replicating .reduce())
// =========================================================================

const expenseList = [100, 250, 500, 80];
let runningGrandTotal = 0; // Explicit default starter state seed
for (let i = 0; i < expenseList.length; i++) {
  runningGrandTotal += expenseList[i];
}
console.log(runningGrandTotal);
// EXPECTED OUTPUT: 930

/*
  Line-by-Line Explanation:
  - Accumulation Algorithm: Emulates a basic data aggregator. It initializes an external numeric reference bucket ('runningGrandTotal') and adds each sequential structural index element into it over the lifetime of the iteration loop.
*/

// =========================================================================
// 8. Side-Effect Iterations (Replicating .forEach())
// =========================================================================

const fruits = ["Apple", "Banana", "Mango"]; // Declared to resolve structural runtime initialization
console.log("13. Stream Processing Output Initialization:");
for (let i = 0; i < fruits.length; i++) {
  console.log(` -> Element detected at positional index [${i}]: ${fruits[i]}`);
}
/*
  EXPECTED OUTPUT:
  -> Element detected at positional index [0]: Apple
  -> Element detected at positional index [1]: Banana
  -> Element detected at positional index [2]: Mango
*/

/*
  Line-by-Line Explanation:
  - Iteration Engine: A standard linear loop executing an un-returned template literal script inside the runtime pipeline. This provides zero functional transformation value back to the program, but fires explicit targeted side-effects.
*/

// =========================================================================
// 9. Index Determination Lookups (Replicating .findIndex())
// =========================================================================

const genericScores = [45, 72, 98, 60];
let targetIndexResult = -1; // Default error indicator if no element satisfies the loop parameters
for (let i = 0; i < genericScores.length; i++) {
  if (genericScores[i] >= 75) {
    targetIndexResult = i;
    break;
  }
}
console.log(targetIndexResult);
// EXPECTED OUTPUT: 2

/*
  Line-by-Line Explanation:
  - Index Lookup matching: We initialize the baseline variable to -1. If our validation gate passes, the index cursor context 'i' is captured, and structural parsing is instantly aborted via break.
*/

// =========================================================================
// 10. Presence Verification Validation (Replicating .includes())
// =========================================================================

const logisticsCart = ["Laptop", "Mouse", "Keyboard"];

// Helper function to check structural inclusion
function evaluateInclusion(targetArray, lookupItem) {
  for (let i = 0; i < targetArray.length; i++) {
    if (targetArray[i] === lookupItem) {
      return true;
    }
  }
  return false;
}

console.log("15. Includes 'Trimmer' Check:", evaluateInclusion(logisticsCart, "Trimmer")); // EXPECTED OUTPUT: false
console.log("16. Includes 'Mouse' Check:", evaluateInclusion(logisticsCart, "Mouse"));     // EXPECTED OUTPUT: true

/*
  Line-by-Line Explanation:
  - evaluateInclusion(): Iterates horizontally through data sequences. If strict equality (===) hits a positive match, it returns true early. If the loop finishes completely without matching, the execution flow falls through to return false.
*/