// ==========================================
// 1. HOISTING (VAR vs LET/CONST)
// ==========================================

// Variable Hoisting with 'var'
console.log("age (before declaration):", age); // Output: undefined
var age = 25;
console.log("age (after declaration):", age);  // Output: 25

// Variable Hoisting with 'let' / 'const' (TDZ - Temporal Dead Zone)
try {
  console.log(score); // ❌ Throws ReferenceError
  let score = 100;
} catch (err) {
  console.log("Error in let hoisting:", err.message);
}


// ==========================================
// 2. FUNCTION HOISTING
// ==========================================

// A) Function Declaration (Fully Hoisted)
sayMyName("Sahil"); // ✅ Output: Sahil (Pehle call kar sakte hain)

function sayMyName(finalName) {
  console.log("My name is:", finalName);
}

// B) Function Expression (Var vs Let)
try {
  sayHelloLet(); // ❌ ReferenceError
} catch (err) {
  console.log("Let expression error:", err.message);
}

let sayHelloLet = function () {
  console.log("Hello from Let");
};

try {
  sayHelloVar(); // ❌ TypeError: sayHelloVar is not a function
} catch (err) {
  console.log("Var expression error:", err.message);
}

var sayHelloVar = function () {
  console.log("Hello from Var");
};


