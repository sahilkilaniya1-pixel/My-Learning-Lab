// =========================================================================
// JavaScript Built-in Array Methods Reference Guide
// =========================================================================
// Description: A comprehensive, production-ready reference guide demonstrating 
// essential JavaScript array methods with explicit outputs and architectural insights.

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

// =========================================================================
// 1. Array Sorting (.sort())
// =========================================================================

// Ascending Order Implementation
const ascendingResult = [...numbersArray].sort((x, y) => x - y);
console.log("1. Ascending Sort Output:", ascendingResult);
// EXPECTED OUTPUT: [0, 2, 2, 4, 6, 32, 56, 65, 65, 78, 78, 95]

// Descending Order Implementation
const descendingResult = [...numbersArray].sort((x, y) => y - x);
console.log("2. Descending Sort Output:", descendingResult);
// EXPECTED OUTPUT: [95, 78, 78, 65, 65, 56, 32, 6, 4, 2, 2, 0]

/*
  Line-by-Line Explanation:
  - [...numbersArray]: Uses the spread operator to create a shallow copy. This prevents structural mutation of the original array.
  - (x, y) => x - y: Comparator function. If the result is negative, 'x' is ordered before 'y', creating an ascending sequence.
  - (x, y) => y - x: Reverses the logic. If 'y' minus 'x' is positive, higher values bubble to the front.
*/

// =========================================================================
// 2. Extrapolated Mathematical Products
// =========================================================================

// Product of the two largest numbers
const sortedDesc = [...numbersArray].sort((x, y) => y - x);
const productOfTwoLargest = sortedDesc[0] * sortedDesc[1];
console.log("3. Product of Two Largest Numbers:", productOfTwoLargest);
// EXPECTED OUTPUT: 7410 (Calculated via 95 * 78)

// Product of the smallest and largest numbers
const sortedAsc = [...numbersArray].sort((x, y) => x - y);
const productOfExtremes = sortedAsc[0] * sortedAsc[sortedAsc.length - 1];
console.log("4. Product of Smallest & Largest Numbers:", productOfExtremes);
// EXPECTED OUTPUT: 0 (Calculated via 0 * 95)

/*
  Line-by-Line Explanation:
  - sortedDesc[0] & [1]: Safely extracts the top two maximum values after a descending sort.
  - sortedAsc[sortedAsc.length - 1]: Dynamically targets the final index position of an ascending array, guaranteeing the max value.
*/

// =========================================================================
// 3. Data Type Conversions (.join() & .split())
// =========================================================================

// Array to String Serialization
const serializedString = mixedArray.join(",");
console.log("5. Array to String Output:", serializedString);
// EXPECTED OUTPUT: "2,4,5,3,5,3,2,5,a,b"

// String to Array Deserialization
const stringSample = "Aayush";
const deserializedArray = stringSample.split("");
console.log("6. String to Array Output:", deserializedArray);
// EXPECTED OUTPUT: ['A', 'a', 'y', 'u', 's', 'h']

/*
  Line-by-Line Explanation:
  - .join(","): Glues elements into a singular string, inserting the specified delimiter parameter between each element.
  - .split(""): Evaluates a string and cuts it at every matching instance of the delimiter. An empty string breaks it by individual characters.
*/

// =========================================================================
// 4. Transformative Projections (.map())
// =========================================================================

const transformationResult = namesList.map(name => name.length);
console.log("7. Projection Map Output:", transformationResult);
// EXPECTED OUTPUT: [6, 5, 6]

/*
  Line-by-Line Explanation:
  - .map(): Allocation mechanism that loops over elements, handles the transformation callback, and creates a clean array of identical length.
  - name => name.length: Evaluates the specific length property of each string element dynamically.
*/

// =========================================================================
// 5. Advanced Predicate Lookups (.find(), .every(), .some())
// =========================================================================

// Finding a specific model structure
const matchedUser = usersDataset.find(user => user.isActive === true && user.age > 18);
console.log("8. First Active Adult Found:", matchedUser);
// EXPECTED OUTPUT: { name: "Bob", age: 19, isActive: true }

// Absolute universal condition evaluation
const functionalSanityCheck = usersDataset.every(user => user.isActive === true);
console.log("9. Absolute Global Active Status Check:", functionalSanityCheck);
// EXPECTED OUTPUT: false (Fails due to Jane being inactive)

// Existential verification checks
const existenceEvaluation = usersDataset.some(user => user.age < 18);
console.log("10. Minor Presence Verification Check:", existenceEvaluation);
// EXPECTED OUTPUT: true (Passes due to John being 17)

/*
  Line-by-Line Explanation:
  - .find(): Short-circuits and terminates operations the exact moment the callback returns a truthy evaluation, returning that element.
  - .every(): Structural integrity method ensuring every item yields truthy; immediately drops to false if any exception occurs.
  - .some(): Validates structural existence; returns true if a single array element matches the internal evaluation criteria.
*/

// =========================================================================
// 6. Conditional Subset Filtering (.filter())
// =========================================================================

const filteredSubset = usersDataset.filter(user => user.isActive === true);
console.log("11. Filtered Active Users Array:", filteredSubset);
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
  - .filter(): Allocates a new array container, looping over all items and copying over elements that strictly pass the internal boolean check.
*/

// =========================================================================
// 7. Data Collection Accumulation (.reduce())
// =========================================================================

const expenseList = [100, 250, 500, 80];
const runningGrandTotal = expenseList.reduce((accumulator, current) => accumulator + current, 0);
console.log("12. Cumulative Financial Aggregation Total:", runningGrandTotal);
// EXPECTED OUTPUT: 930

/*
  Line-by-Line Explanation:
  - .reduce(): Transforms an entire data array down into one distinct output type using a sequential execution loop.
  - accumulator: The historical variable bucket carrying values across array transitions.
  - 0: The explicit seed value assigned to the accumulator before calculations begin.
*/

// =========================================================================
// 8. Side-Effect Iterations (.forEach())
// =========================================================================

console.log("13. Stream Processing Output Initialization:");
fruits.forEach((fruit, index) => {
  console.log(` -> Element detected at positional index [${index}]: ${fruit}`);
});
/*
  EXPECTED OUTPUT:
  -> Element detected at positional index [0]: Apple
  -> Element detected at positional index [1]: Banana
  -> Element detected at positional index [2]: Mango
*/

/*
  Line-by-Line Explanation:
  - .forEach(): Explicitly loops through values to execute isolated external mutations or operations. It yields no direct return expression value.
*/

// =========================================================================
// 9. Index Determination Lookups (.findIndex())
// =========================================================================

const genericScores = [45, 72, 98, 60];
const targetIndexResult = genericScores.findIndex(score => score >= 75);
console.log("14. First Matching Index Position:", targetIndexResult);
// EXPECTED OUTPUT: 2 (Points directly to the index location of 98)

/*
  Line-by-Line Explanation:
  - .findIndex(): Scans values horizontally. The exact moment the boolean predicate returns true, it returns that index coordinate rather than the object value.
*/

// =========================================================================
// 10. Presence Verification Validation (.includes())
// =========================================================================

const logisticsCart = ["Laptop", "Mouse", "Keyboard"];
console.log("15. Includes 'Trimmer' Check:", logisticsCart.includes("Trimmer")); // EXPECTED OUTPUT: false
console.log("16. Includes 'Mouse' Check:", logisticsCart.includes("Mouse"));     // EXPECTED OUTPUT: true

/*
  Line-by-Line Explanation:
  - .includes(): Directly scans reference configurations inside primitive collections for strict parity and returns a structural boolean response.
*/