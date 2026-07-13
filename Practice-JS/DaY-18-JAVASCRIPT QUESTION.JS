// =========================================================================
// JavaScript Core Algorithms & Built-in Methods Practice Script
// =========================================================================
// Description: A comprehensive technical reference guide demonstrating 
// manual algorithm implementations side-by-side with modern ES6+ built-in methods.

/*
  =========================================================================
  ARCHITECTURAL TOPIC MAPPING TABLE
  =========================================================================
  The challenges implemented below provide comprehensive coverage of the 
  following native ECMAScript programmatic features:

  1. STRINGS & INDEXING (Questions 1 & 2)
     - Character Access via Bracket Notation Syntax: `str[i]`
     - String Boundary Evaluation using the immutable `.length` scalar property.

  2. ARRAYS & PARAMETER WRAPPING (Questions 3 & 5)
     - Argument Packing using the Rest Parameter token: `...arr`
     - Dynamic Stack Insertion using the `Array.prototype.push()` method.

  3. CONTROL FLOW ITERATION LOOPS (All Questions)
     - Linear Index Traversal: Standard `for` loop (Questions 1, 2, 3, 5)
     - Enumerable Property Traversal: Reflective `for...in` loop (Question 4)

  4. CONDITIONAL BRANCHING STRUCTURES (All Questions)
     - Evaluative state branching logic using standard `if-else` blocks.

  5. MODERN NATIVE OPERATORS & EXPRESSIONS (Questions 4 & 5)
     - Structural Property Verification: The relational `in` operator.
     - Concise Inline Evaluation: The conditional Ternary Operator (`? :`).

  6. HIGH-ORDER COMPILATION METHODS (Advanced Engine Mechanics)
     - Sequence Conversions: `.split()`, `.reverse()`, and `.join()`.
     - Variadic Math Processing: Static `Math.max()` with Spread Parameters.
     - Immutable Sequence Projections: Immutable transformation via `.map()`.
  =========================================================================
*/

// -------------------------------------------------------------------------
// QUESTION 1: String Reversal (Inverting sequence structures)
// -------------------------------------------------------------------------

// Approach 1: Manual Iteration (Reverse Pointer Traversal Loop)
function reverseStringManual(str) {
    let reversed = ""; 
    // Start at the final structural index and parse backwards to 0
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]; 
    }
    return reversed;
}

// Approach 2: Native Utility Chaining (.split -> .reverse -> .join)
function reverseStringBuiltIn(str) {
    return str.split("").reverse().join("");
}

console.log("Q1 Manual Output:", reverseStringManual("rahul"));     // EXPECTED OUTPUT: "luhar"
console.log("Q1 Built-In Output:", reverseStringBuiltIn("rahul"));   // EXPECTED OUTPUT: "luhar"

/*
  Line-by-Line Explanation:
  - reverseStringManual: Uses character bracket access `str[i]` to look up individual letters. It appends characters starting from the rightmost index (`str.length - 1`) down to zero.
  - reverseStringBuiltIn: Explodes the string into a temporary array of characters via `.split("")`, uses the native in-place array inversion engine `.reverse()`, and serializes the elements back into a string using `.join("")`.
*/


// -------------------------------------------------------------------------
// QUESTION 2: Character Frequency Count (Locating specific targets)
// -------------------------------------------------------------------------

// Approach 1: Manual Accumulation (Linear Search Match Counter)
function countCharManual(str, char) {
    let count = 0; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++; 
        }
    }
    return count;
}

// Approach 2: Functional Parsing Strategy (Delimiter Splitting Hack)
function countCharBuiltIn(str, char) {
    // Splitting a string by a target character isolates matches inside the resulting array boundaries
    return str.split(char).length - 1;
}

console.log("Q2 Manual Output:", countCharManual("javascript", "a"));     // EXPECTED OUTPUT: 2
console.log("Q2 Built-In Output:", countCharBuiltIn("javascript", "a"));   // EXPECTED OUTPUT: 2

/*
  Line-by-Line Explanation:
  - countCharManual: Evaluates each character via a standard `for` loop up to `str.length`. If a strict match (`===`) is found against the search character, it increments the tracking pointer variable.
  - countCharBuiltIn: Subverts typical loop requirements by using the character as a split token delimiter. The matching instances act as slice points, meaning the resulting array length minus one gives the exact count of matches.
*/


// -------------------------------------------------------------------------
// QUESTION 3: Maximum Element Discovery (Locating global upper bounds)
// -------------------------------------------------------------------------

// Approach 1: Manual Scanning (Sequential Pointer Comparison Logic)
function findMaxManual(...arr) {
    // Initialize our placeholder value directly with the first array element
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}

// Approach 2: Declarative Evaluation (Math.max Utility Engine)
function findMaxBuiltIn(...arr) {
    // The spread operator here unrolls the packed array back into separate, loose numeric parameters
    return Math.max(...arr); 
}

console.log("Q3 Manual Output:", findMaxManual(10, 5, 99, 43, 8));     // EXPECTED OUTPUT: 99
console.log("Q3 Built-In Output:", findMaxBuiltIn(10, 5, 99, 43, 8));   // EXPECTED OUTPUT: 99

/*
  Line-by-Line Explanation:
  - ...arr (Rest Parameter): Gathers arguments into a structured array instance named `arr`.
  - findMaxManual: Assumes index 0 contains the highest value. It then compares this assumption against index references 1 through N. If an entry is larger, it overwrites the tracking value.
  - findMaxBuiltIn: Passes the collection into the highly-optimized built-in `Math.max()` engine by unpackaging the values cleanly using the Spread syntax operator.
*/


// -------------------------------------------------------------------------
// QUESTION 4: Object Property Verification (Key membership testing)
// -------------------------------------------------------------------------

// Approach 1: Manual Reflection (Iterative Key Traversal Loop)
function hasKeyManual(obj, searchKey) {
    // for...in loops explicitly parse enumerable string properties of target objects
    for (let key in obj) {
        if (key === searchKey) {
            return true; 
        }
    }
    return false; 
}

// Approach 2: Evaluative Expressions (The Binary 'in' Operator Syntax)
function hasKeyBuiltIn(obj, searchKey) {
    return searchKey in obj; 
}

console.log("Q4 Manual Output:", hasKeyManual({name: "Amit", age: 20}, "age"));     // EXPECTED OUTPUT: true
console.log("Q4 Built-In Output:", hasKeyBuiltIn({name: "Amit", age: 20}, "age"));   // EXPECTED OUTPUT: true

/*
  Line-by-Line Explanation:
  - for...in Loop: Reflects on an object's structural keys. It tests each property label until it finds a match, returning `true` early and dropping out of the function block.
  - in Operator: A clean, built-in feature that searches the object and its prototype chain to see if a key exists, returning a Boolean value directly without manual looping.
*/


// -------------------------------------------------------------------------
// QUESTION 5: Conditional Sequence Mutation (Targeted transformation)
// -------------------------------------------------------------------------

// Approach 1: Manual Array Construction (Standard Stack Allocation)
function doubleNumbersManual(...arr) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i] * 2); 
        } else {
            result.push(arr[i]); 
        }
    }
    return result;
}

// Approach 2: Native Projections (.map Transformation Engine)
function doubleNumbersBuiltIn(...arr) {
    // Combines an immutable map projection loop with a concise conditional ternary operator
    return arr.map(num => num % 2 === 0 ? num * 2 : num);
}

console.log("Q5 Manual Output:", doubleNumbersManual(1, 2, 3, 4));     // EXPECTED OUTPUT: [1, 4, 3, 8]
console.log("Q5 Built-In Output:", doubleNumbersBuiltIn(1, 2, 3, 4));   // EXPECTED OUTPUT: [1, 4, 3, 8]

/*
  Line-by-Line Explanation:
  - doubleNumbersManual: Checks for even numbers using the remainder modulus operator (`num % 2 === 0`). It builds the final array item-by-item using `.push()`.
  - doubleNumbersBuiltIn: Uses `Array.prototype.map()`, which automatically runs a callback function across every array position to build a brand new, transformed array. The ternary operator handles the underlying if-else choice smoothly on a single line.
*/