// =========================================================================
// 11. Array Flattening (.flat())
// =========================================================================
// What it does: When dealing with arrays inside arrays (Nested Arrays), 
// .flat() extracts all sub-array elements and concatenates them into a 
// single-level flat array structure.

const nestedArray = [1, 2, [3, 4, [5, 6]]];

// Flattening up to 2 levels deep
let flatArray = nestedArray.flat(2); 
console.log("11. Flat Array Output:", flatArray);
// EXPECTED OUTPUT: [1, 2, 3, 4, 5, 6]

/*
  Line-by-Line Explanation:
  - .flat(2): The depth parameter '2' specifies how many levels deep a nested array structure should be flattened. 
  - Architechtural Tip: If the array nesting depth is unknown dynamically, you can pass 'Infinity' (e.g., .flat(Infinity)) to completely flatten all layers.
*/


// =========================================================================
// 12. Transforming & Flattening Map (.flatMap())
// =========================================================================
// What it does: This method is a high-performance combination of running 
// .map() followed immediately by a 1-level deep .flat(). It maps each element 
// using a transformation function and flattens the result into a clean sequence.

const sentences = ["Hello World", "JavaScript is awesome"];

let words = sentences.flatMap(str => str.split(" "));
console.log("12. flatMap Output:", words);
// EXPECTED OUTPUT: ['Hello', 'World', 'JavaScript', 'is', 'awesome']

/*
  Line-by-Line Explanation:
  - str.split(" "): Splits each individual string element into a sub-array of words separated by spaces.
  - .flatMap(): Instead of creating an awkward multi-dimensional structure like [['Hello', 'World'], ['JavaScript', ...]], it executes efficiently to directly yield a clean, flattened array of strings.
*/


// =========================================================================
// 13. Filling Elements (.fill())
// =========================================================================
// What it does: It modifies (mutates) the original elements in an array by 
// filling them with a static value from a specified starting index to an ending index.

const fillNumbers = [1, 2, 3, 4, 5];

// Fill with 0 from index 1 up to index 4 (end index is exclusive)
fillNumbers.fill(0, 1, 4);
console.log("13. Filled Array Output:", fillNumbers);
// EXPECTED OUTPUT: [1, 0, 0, 0, 5]

/*
  Line-by-Line Explanation:
  - .fill(0, 1, 4): The first argument (0) is the static value to insert. The second argument (1) is the starting index boundary. The third argument (4) is the ending index location, which is not included in the modification.
  - CRITICAL WARNING: This method directly mutates the original reference array.
*/


// =========================================================================
// 14. In-Place Element Copying (.copyWithin())
// =========================================================================
// What it does: It copies a specific sequence of array elements within the 
// same array and pastes them onto a target index position without altering 
// the array's total length.

const sequence = ["A", "B", "C", "D", "E"];

// Copy the element at index 3 ('D') and paste/overwrite it at target index 0
sequence.copyWithin(0, 3, 4);
console.log("14. copyWithin Output:", sequence);
// EXPECTED OUTPUT: ["D", "B", "C", "D", "E"]

/*
  Line-by-Line Explanation:
  - .copyWithin(0, 3, 4): The first parameter (0) is the target sequence index to overwrite. The second parameter (3) is the starting index to read data from. The final parameter (4) is the ending reading boundary (exclusive).
  - CRITICAL WARNING: Like .fill(), this performs an in-place structural mutation.
*/


// =========================================================================
// 15. Immutable Safe Reversing (.toReversed())
// =========================================================================
// Note: This is a modern ECMAScript feature (ES2023+).
// What it does: The old legacy .reverse() method used to destroy and mutate 
// the original array state. .toReversed() safely returns a flipped clone 
// without mutating the source dataset.

const originalDataset = [1, 2, 3];
const reversedDataset = originalDataset.toReversed();

console.log("15a. Safe Reversed Array:", reversedDataset); // EXPECTED OUTPUT: [3, 2, 1]
console.log("15b. Intact Original Array:", originalDataset); // EXPECTED OUTPUT: [1, 2, 3]

/*
  Line-by-Line Explanation:
  - .toReversed(): Allocates a separate chunk of memory to clone the array entries, modifies their index sequence backwards, and yields that safe mutation-free copy.
*/


// =========================================================================
// 16. Immutable Safe Sorting (.toSorted())
// =========================================================================
// Note: This is a modern ECMAScript feature (ES2023+).
// What it does: Instead of having to manually write alternative spread logic 
// like [...array].sort(), modern JavaScript engines use .toSorted() to safely 
// sort items while keeping the base source array clean.

const rawScores = [30, 10, 20];
const immutablySortedScores = rawScores.toSorted((x, y) => x - y);

console.log("16a. Safe Sorted Scores:", immutablySortedScores); // EXPECTED OUTPUT: [10, 20, 30]
console.log("16b. Intact Original Scores:", rawScores);         // EXPECTED OUTPUT: [30, 10, 20]

/*
  Line-by-Line Explanation:
  - .toSorted(): Implicitly clones the collection under the hood, uses the callback comparator function logic to balance elements, and passes back a secure independent sorted copy.
*/