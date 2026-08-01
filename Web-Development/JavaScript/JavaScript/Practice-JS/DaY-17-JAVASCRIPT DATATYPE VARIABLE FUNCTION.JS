// =========================================================================
// JAVASCRIPT CORE CONCEPTS MASTER REFERENCE GUIDE
// =========================================================================
// Description: JavaScript engine runtime internals, memory allocation behavior,
// scoping, strict comparisons, rest parameters, aur Automatic Semicolon Insertion 
// (ASI) traps ka sabse solid deshi Hinglish master guide.

// -------------------------------------------------------------------------
// 1. VARIABLES & ALLOCATION SCOPES (Let, Const, Var ka Khel)
// -------------------------------------------------------------------------

// --- A. Var Declaration (Legacy / Purana Tarika) ---
var oldVariable = "Old way"; 
// Architectural Note: Modern production mein 'var' use karna sakht mana hai!
// Isme block-scoping nahi hoti aur 'variable hoisting' ki wajah se bugs aate hain.

// --- B. Let Declaration (Mutable Block-Scoped) ---
let editable = "can't change"; // Isko hum baad mein re-assign kar sakte hain
editable = "new value";        // Permitted: Re-assignment perfectly allowed hai.

// --- C. Const Declaration (Immutable Reference Binding) ---
const fixedValue = "Yeh lock hai"; 
// fixedValue = "Change"; // ❌ TypeError: Assignment to constant variable phekaega!

// --- D. Advanced Object Mutability Property (The Interview Question) ---
const userRef = { name: "Rahul" };
userRef.name = "Amit"; // ✅ Allowed! Heap memory mein object ke andar ki values badli ja sakti hain.
// userRef = { name: "Sumit" }; // ❌ TypeError! 'const' se reference lock hota hai, isliye naya object assign nahi kar sakte.

/*
  🧠 Under the Hood (Memory & Scope Scenarios):
  - var: Function-scoped ya global-scoped hota hai. Execution context bante hi yeh compiler
    ke dwara peak par lift (hoist) ho jata hai aur iski initial value 'undefined' set ho jati hai.
  - let / const: ES6 ke block-scoped variables hain. Yeh tab tak access nahi ho sakte jab tak
    unki line declare na ho (ise Temporal Dead Zone ya TDZ bolte hain).
  - Object Mutability: Const memory address pointer (reference binding) ko freeze karta hai, 
    uske andar ke data values ko nahi.
*/


// -------------------------------------------------------------------------
// 2. DATA TYPES & THE GLOBAL "NULL" RUNTIME TYPO
// -------------------------------------------------------------------------

let structuralNum = 45;               // Primitive Type: Number
let structuralText = "Hello";         // Primitive Type: String
let structuralBool = false;           // Primitive Type: Boolean
let emptyDabba;                       // Primitive Type: Undefined (Sirf declare kiya hai, value nahi di)
let intentionalEmpty = null;          // Primitive Type: Null (Jab hume intentionally batana ho ki koi value nahi hai)

console.log("1. Type of Undefined:", typeof emptyDabba);       
// EXPECTED OUTPUT: "undefined"

console.log("2. Type of Null Check:", typeof intentionalEmpty); 
// EXPECTED OUTPUT: "object" 

/*
  ⚠️ Historical JavaScript Bug Alert:
  - typeof null ka output "object" aana JavaScript ka ek bahut purana aur permanent bug hai.
  - Pehle JS engine mein values ko 32-bit units mein store kiya jata tha, jisme object tag ke liye 
    binary prefix '000' tha. Aur null value bhi poori zeros (binary all zeros) thi.
  - Is wajah se engine ne null ko bhi object samajh liya. Is bug ko ab isliye nahi sudhara ja sakta
    kyunki ise badalne se internet par chalne wali lakhon purani websites crash ho jayengi!
*/


// -------------------------------------------------------------------------
// 3. STRUCTURAL EQUALITY OPERATORS & TYPE COERCION
// -------------------------------------------------------------------------

let operandA = 5;    // Numeric representation
let operandB = "5";  // String representation

// --- Abstract / Loose Equality (==) ---
console.log("3. Abstract Equality Evaluation:", operandA == operandB);  
// EXPECTED OUTPUT: true

// --- Strict / Identity Equality (===) ---
console.log("4. Strict Equality Evaluation:", operandA === operandB); 
// EXPECTED OUTPUT: false

/*
  🧠 Deep Coercion Mechanics:
  - Loose Equality (==): Isme implicit Type Coercion chalta hai. Agar dono side ke types match nahi
    karte, toh JS engine background mein dono ko kisi common type par convert karta hai (jaise yahan string "5" ko number 5 bana diya).
  - Strict Equality (===): Bina kisi conversion ke direct value aur data type dono ko compare karega.
    Agar type alag hai (Number vs String), toh turant false return karega.
*/


// -------------------------------------------------------------------------
// 4. EXECUTION PATTERNS & FUNCTIONAL ARCHITECTURE
// -------------------------------------------------------------------------

// --- A. Function Declaration (Fully Hoisted) ---
function executeAddition(x, y) {
    return x + y;
}
// Note: Function declarations poori tarah lift hokar scope ke top par chale jate hain.
// Isliye aap inhein code ke upar bhi likh kar run kar sakte ho.

// --- B. Arrow Function Expression (Modern ES6 Lexical Binding) ---
const calculateSquare = (n) => n * n; // Shorter syntax aur isme apna 'this' nahi hota (lexical scoped).

// --- C. Dynamic Evaluation using Rest Parameters (...arr) ---
function compileEvenNumbers(...arr) {
    // Rest operator loose arguments ko pakad kar ek solid array context mein daal deta hai
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


// -------------------------------------------------------------------------
// 5. EXECUTION TERMINATIONS & AUTOMATIC SEMICOLON INSERTION (ASI)
// -------------------------------------------------------------------------

// --- A. Broken ASI Implementation (The Classic Trap) ---
function simulateAsiTrap() {
    return 
    {
        status: "Success"
    };
}
console.log("6. Broken ASI Engine Response:", simulateAsiTrap()); 
// EXPECTED OUTPUT: undefined

// --- B. Valid Corrected ASI Implementation ---
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
  ⚙️ Parser Engine Secrets:
  - JS Compiler automatic semicolon placement (ASI) rule ke tahat kaam karta hai.
  - Broken Implementation mein return ke turant baad ek line break tha, toh parser ne 
    wahan semicolon insert kar diya (return;), jiski wajah se function wahi stop ho gaya aur 'undefined' mila.
  - Corrected Implementation mein parentheses '(' lagakar compiler parser ko force kiya gaya 
    ki line jab tak close na ho tab tak read karo.
*/
console.log("\n-------------------------------------------");