// =========================================================================
// JavaScript Core Concepts Master Reference Guide
// =========================================================================
// Description: A production-ready documentation script breaking down core 
// runtime operations, memory behaviors, state tracking, and engine mechanics.

// -------------------------------------------------------------------------
// 1. Variables & Allocation Scopes
// -------------------------------------------------------------------------

// Var Declaration (Legacy)
var oldVariable = "Old way"; 
// Architechtural Note: Highly discouraged in modern production due to lack of 
// block-scoping and unpredictable behaviors stemming from variable hoisting.

// Let Declaration (Mutable Block-Scoped Variable)
let editable = "ca't change";
editable = "new value"; // Permitted: Re-assignment is explicitly supported.

// Const Declaration (Immutable Block-Scoped Reference)
const fixedValue = "Yeh lock hai"; 
// fixedValue = "Change"; // Throws TypeError: Assignment to constant variable.

// --- Advanced Object Mutability Property ---
const userRef = { name: "Rahul" };
userRef.name = "Amit"; // Permitted! Heap-allocated object properties can be mutated safely.
// userRef = { name: "Sumit" }; // Throws TypeError: Redefining the binding reference is blocked.

/*
  Line-by-Line Explanation:
  - var: Function-scoped or globally-scoped, bypassing block boundaries ({}) and initializing as undefined during the compilation phase.
  - let / const: Introduced in ES6 to enforce temporal dead zones (TDZ) and absolute block-level containment.
  - Object Mutability: The 'const' identifier guarantees that the structural memory address pointer remains locked. It does not freeze the values nested within that address.
*/


// -------------------------------------------------------------------------
// 2. Data Types & The Global "Null" Runtime Typo
// -------------------------------------------------------------------------

let structuralNum = 45;               // Primitive Type: Number
let structuralText = "Hello";         // Primitive Type: String
let structuralBool = false;           // Primitive Type: Boolean
let emptyDabba;                       // Primitive Type: Undefined (Declared without value assignment)
let intentionalEmpty = null;          // Primitive Type: Null (Intentional representation of object absence)

console.log("1. Type of Undefined:", typeof emptyDabba);       
// EXPECTED OUTPUT: "undefined"

console.log("2. Type of Null Check:", typeof intentionalEmpty); 
// EXPECTED OUTPUT: "object" 

/*
  Line-by-Line Explanation:
  - typeof emptyDabba: Evaluating a variable containing zero memory assignments correctly outputs "undefined".
  - typeof null: Evaluating null evaluates incorrectly to "object". This is a famous, permanent legacy bug in JavaScript's original engine architecture where value tags for objects and null shared identical binary prefixes.
*/


// -------------------------------------------------------------------------
// 3. Structural Equality Operators & Type Coercion
// -------------------------------------------------------------------------

let operandA = 5;    // Numeric literal representation
let operandB = "5";  // String literal representation

// Abstract / Loose Equality (==)
console.log("3. Abstract Equality Evaluation:", operandA == operandB);  
// EXPECTED OUTPUT: true

// Strict / Identity Equality (===)
console.log("4. Strict Equality Evaluation:", operandA === operandB); 
// EXPECTED OUTPUT: false

/*
  Line-by-Line Explanation:
  - Abstract Equality (==): Forces implicit Type Coercion. The JavaScript engine background-converts operand data structures to matching types before performing comparison, making '5' match 5.
  - Strict Equality (===): Bypasses all coercion routines. It performs a direct parallel check on both value parity and data type alignment. If types differ, it short-circuits to false immediately.
*/


// -------------------------------------------------------------------------
// 4. Execution Patterns & Functional Architecture
// -------------------------------------------------------------------------

// A. Function Declaration (Fully Hoisted)
function executeAddition(x, y) {
    return x + y;
}
// Architectural Note: Function declarations are fully lifted to the peak of the execution stack 
// by the compiler, allowing them to be cleanly invoked before their physical line location.

// B. Arrow Function expression (Modern ES6 Lexical Binding Syntax)
const calculateSquare = (n) => n * n;

// C. Dynamic Evaluation using Rest Parameters (...args)
function compileEvenNumbers(...arr) {
    // The rest syntax gathers loose parameters into a dedicated indexable array context
    let filteredResults = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            filteredResults[filteredResults.length] = arr[i];
        }
    }
    return filteredResults;
}
console.log("5. Compiled Array Processing:", compileEvenNumbers(1, 2, 3, 4, 5, 6)); 
// EXPECTED OUTPUT: [2, 4, 6]

/*
  Line-by-Line Explanation:
  - Arrow Functions: Provide concise syntax layouts and inherit their context ('this') lexically from the surrounding scope execution domain.
  - Rest Parameter (...arr): Accumulates trailing dynamic function arguments into a formal array object, supporting unbounded variable parameters cleanly.
*/


// -------------------------------------------------------------------------
// 5. Execution Terminations & Automatic Semicolon Insertion (ASI)
// -------------------------------------------------------------------------

// Broken ASI Implementation
function simulateAsiTrap() {
    return 
    {
        status: "Success"
    };
}
console.log("6. Broken ASI Engine Response:", simulateAsiTrap()); 
// EXPECTED OUTPUT: undefined

// Valid Corrected ASI Implementation
function resolveAsiTrap() {
    return (
        {
            status: "Success"
        }
    );
}
console.log("7. Valid Corrected Response:", resolveAsiTrap()); 
// EXPECTED OUTPUT: { status: "Success" }

/*
  Line-by-Line Explanation:
  - Broken Implementation: The ECMAScript parser features an automated parser correction mechanism known as Automatic Semicolon Insertion (ASI). Placing a line break immediately after a 'return' statement forces a semicolon assignment, converting the expression to 'return;'. The trailing object block is interpreted as dead code.
  - Corrected Implementation: Enclosing your expression payload inside opening parentheses '(' forces the compilation parser to stay open and read the multiline object declaration cleanly.
*/