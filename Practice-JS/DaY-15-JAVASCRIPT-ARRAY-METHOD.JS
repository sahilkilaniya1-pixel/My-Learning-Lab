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

// =========================================================================
// 17. Adding/Removing from the End (.push() & .pop())
// =========================================================================
// What it does: These two methods interact exclusively with the very end 
// of an array. Both methods directly mutate the original array structure.

let structuralFruits = ["Apple", "Banana"];

// Adding to the end
structuralFruits.push("Mango"); 
console.log("17a. Array after .push():", structuralFruits);
// EXPECTED OUTPUT: ["Apple", "Banana", "Mango"]

// Removing from the end
let poppedFruit = structuralFruits.pop(); 
console.log("17b. Array after .pop():", structuralFruits);
console.log("17c. Extracted Element (.pop value):", poppedFruit);
// EXPECTED OUTPUTS:
// Array after .pop(): ["Apple", "Banana"]
// Extracted Element: "Mango"

/*
  Line-by-Line Explanation:
  - .push("Mango"): Appends the specified string element directly onto the end of the collection.
  - .pop(): Truncates the absolute final element from the collection, modifies the length property, and returns that isolated element.
*/


// =========================================================================
// 18. Adding/Removing from the Start (.unshift() & .shift())
// =========================================================================
// What it does: These methods interact exclusively with the beginning of 
// an array. Both methods directly mutate the original array and trigger index re-indexing.

let processingTeam = ["Bob", "Charlie"];

// Adding to the start
processingTeam.unshift("Alice"); 
console.log(processingTeam);
// EXPECTED OUTPUT: ["Alice", "Bob", "Charlie"]

// Removing from the start
let shiftedPerson = processingTeam.shift(); 
console.log(processingTeam);
console.log(shiftedPerson);
// EXPECTED OUTPUTS:
// Array after .shift(): ["Bob", "Charlie"]
// Extracted Element: "Alice"

/*
  Line-by-Line Explanation:
  - .unshift("Alice"): Prepends the string element to the beginning of the array, shifting all existing elements to a higher index.
  - .shift(): Decouples the very first element at index 0, shifts all remaining elements down by one index position, and returns the removed element.
*/


// =========================================================================
// 19. Cutting an Array Subset (.slice())
// =========================================================================
// What it does: It extracts a shallow copy of a portion of an array into 
// a brand-new array object. It leaves the original source array completely untouched.

const targetAnimals = ["Ant", "Bison", "Camel", "Duck", "Elephant"];

// Slice from index 1 up to index 4 (end index is exclusive)
let subArrayResult = targetAnimals.slice(1, 4);
console.log(subArrayResult);
console.log(targetAnimals);
// EXPECTED OUTPUTS:
// Extracted Slice Array: ["Bison", "Camel", "Duck"]
// Base Source Array Check: ["Ant", "Bison", "Camel", "Duck", "Elephant"]

/*
  Line-by-Line Explanation:
  - .slice(1, 4): The first argument (1) determines the index to begin extractions ("Bison"). The second argument (4) specifies the end index marker; extraction halts right before this index location ("Elephant").
*/


// =========================================================================
// 20. The Multi-Purpose Content Modifier (.splice())
// =========================================================================
// What it does: Known as the Swiss Army knife of arrays because it changes the 
// contents of an array by removing existing elements, replacing elements, and/or 
// adding new elements in place. This operation mutates the original reference data.

const calendarMonths = ["Jan", "March", "April", "June"];

// Action 1: Insert "Feb" at index position 1, deleting 0 elements
calendarMonths.splice(1, 0, "Feb");
console.log(calendarMonths);
// EXPECTED OUTPUT: ["Jan", "Feb", "March", "April", "June"]

// Action 2: Delete 1 element located precisely at index position 3 ("April")
calendarMonths.splice(3, 1);
console.log(calendarMonths);
// EXPECTED OUTPUT: ["Jan", "Feb", "March", "June"]

/*
  Line-by-Line Explanation:
  - .splice(index, deleteCount, item1, item2...): The first parameter dictates the insertion/deletion coordinates. The second parameter determines the deletion volume. Subsequent parameters represent new items being injected.
*/


// =========================================================================
// 21. Merging Independent Arrays (.concat())
// =========================================================================
// What it does: It merges two or more arrays together. This method does 
// not alter or mutate the existing arrays, but instead returns a brand-new combined array.

const alphabetGroup1 = ["a", "b"];
const alphabetGroup2 = ["c", "d"];

const concatenationResult = alphabetGroup1.concat(alphabetGroup2);
console.log(concatenationResult);
// EXPECTED OUTPUT: ["a", "b", "c", "d"]

/*
  Line-by-Line Explanation:
  - .concat(): Generates a clean, brand-new instance array matching the length of both merged structures combined.
  - Production Note: While modern developers often use the ES6 spread operator syntax `[...arr1, ...arr2]`, `.concat()` remains a standard approach.
*/


// =========================================================================
// 22. Standard String Conversion (.toString())
// =========================================================================
// What it does: Returns a string representing the specified array and its elements. 
// It works similarly to `.join(",")` by converting elements and gluing them with comma separators.

const genericElements = [1, 2, "a", "b"];
const stringifiedResult = genericElements.toString();

console.log("22. Native toString Output:", stringifiedResult);
// EXPECTED OUTPUT: "1,2,a,b"

/*
  Line-by-Line Explanation:
  - .toString(): Automatically converts all elements inside the collection into a simple, flat string format separated exclusively by commas.
*/


// =========================================================================
// 🏁 FINAL ARCHITECTURAL CLASSIFICATION
// =========================================================================
// Review this categorization mapping to understand the fundamental usage groups
// of the 22 core array methods:
/*
  1. Searching Methods:
     -> .find(), .findIndex(), .includes(), .some(), .every()

  2. Transformation Methods:
     -> .map(), .filter(), .reduce(), .flat(), .flatMap()

  3. Sorting & Ordering:
     -> .sort(), .toSorted(), .reverse(), .toReversed()

  4. Mutating Operations (Add/Remove/Modify):
     -> .push(), .pop(), .shift(), .unshift(), .splice(), .fill(), .copyWithin()

  5. Utility & Conversion:
     -> .join(), .split(), .slice(), .concat(), .toString()
*/