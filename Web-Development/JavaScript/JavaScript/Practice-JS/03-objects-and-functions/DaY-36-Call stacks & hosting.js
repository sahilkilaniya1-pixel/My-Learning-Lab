/* ==========================================================================
   MASTER GUIDE: HOISTING, TEMPORAL DEAD ZONE (TDZ) & CALL STACK
   ========================================================================== */


// ==========================================
// 1. VARIABLE HOISTING & TDZ
// ==========================================

console.log("--- SECTION 1: VARIABLE HOISTING ---");

// A) var Hoisting (Memory Phase me 'undefined' assign hota hai)
console.log("var 'a' before line:", a); // Output: undefined
var a = 10;
console.log("var 'a' after line:", a);  // Output: 10


// B) let/const Hoisting (Temporal Dead Zone - TDZ)
try {
    console.log(b); // ❌ Uncaught ReferenceError
    let b = 20;
} catch (error) {
    console.log("let/const Error:", error.message); 
    // Explanation: 'b' memory me hai par uninitialized hai (TDZ me band hai).
}


// ==========================================
// 2. FUNCTION HOISTING
// ==========================================

console.log("\n--- SECTION 2: FUNCTION HOISTING ---");

// A) Function Declaration (Fully Hoisted - Upar se bhi call ho jayega)
sayHello(); // Output: Hello from Declaration!

function sayHello() {
    console.log("Hello from Declaration!");
}


// B) Function Expression with var (var undefined hota hai -> TypeError)
try {
    sayByeVar(); // ❌ TypeError: sayByeVar is not a function
} catch (error) {
    console.log("var expression error:", error.message);
}

var sayByeVar = function() {
    console.log("Bye from Var!");
};


// C) Function Expression with let/const (TDZ -> ReferenceError)
try {
    sayByeLet(); // ❌ ReferenceError
} catch (error) {
    console.log("let expression error:", error.message);
}

let sayByeLet = function() {
    console.log("Bye from Let!");
};


// ==========================================
// 3. CALL STACK MECHANICS (LIFO - Last In First Out)
// ==========================================

console.log("\n--- SECTION 3: CALL STACK DEMO ---");

function stepOne() {
    console.log("-> 1. Entered stepOne()");
    stepTwo(); // Step Two Call Stack ke TOP par PUSH hoga
    console.log("-> 4. Exiting stepOne()");
}

function stepTwo() {
    console.log("  -> 2. Entered stepTwo()");
    stepThree(); // Step Three Call Stack ke TOP par PUSH hoga
    console.log("  -> 3. Exiting stepTwo()");
}

function stepThree() {
    console.log("    -> [STACK PEAK] Inside stepThree()");
    // Yahan Call Stack: [Global -> stepOne -> stepTwo -> stepThree]
}

// Execution Start:
stepOne();


// ==========================================
// 4. PRACTICE QUESTION (EXECUTION FLOW)
// ==========================================

console.log("\n--- SECTION 4: PRACTICE QUESTION ---");

var num = 50;

function testScope() {
    // Local memory creation phase me local 'num' hoist ho jata hai
    console.log("Output Q1:", num); 
    var num = 100;
    console.log("Output Q2:", num);
}

testScope();
/*
  EXPLANATION FOR SECTION 4:
  - Global 'num' = 50 hai.
  - Lekin testScope() ke andar 'var num = 100' declare hai.
  - JavaScript function ke andar local variable ko top par hoist kar deta hai (as undefined).
  - Hence, Output Q1 = undefined, aur Output Q2 = 100.
*/