// =========================================================================
// JavaScript Core Algorithms & Built-in Methods Practice Script
// =========================================================================
// Description: Manual algorithm implementations (purane tarike) aur modern
// ES6+ built-in methods ka side-by-side comparison master guide.

/*
  =========================================================================
  ARCHITECTURAL TOPIC MAPPING TABLE (Khel Kis Cheez Ka Hai?)
  =========================================================================
  Is poore script ke andar humne niche diye gaye core ECMAScript program 
  features ko depth mein cover kiya hai:

  1. STRINGS & INDEXING (Questions 1 & 2)
     - Bracket Notation Syntax se Character Access karna: `str[i]`
     - String Boundary check karne ke liye `.length` property ka use.

  2. ARRAYS & PARAMETER WRAPPING (Questions 3 & 5)
     - Loose arguments ko array mein pack karne ke liye Rest Parameter token: `...arr`
     - Dynamic tareeke se stack mein data dalne ke liye `Array.prototype.push()`.

  3. CONTROL FLOW ITERATION LOOPS (Saare Questions)
     - Linear Index Traversal: Standard `for` loop (Questions 1, 2, 3, 5)
     - Enumerable Property Traversal: Reflective `for...in` loop (Question 4)

  4. CONDITIONAL BRANCHING STRUCTURES (Saare Questions)
     - Standard `if-else` blocks ka use karke condition ke basis par rasta badalna.

  5. MODERN NATIVE OPERATORS & EXPRESSIONS (Questions 4 & 5)
     - Object mein key check karne ke liye relational `in` operator.
     - Chota inline if-else validation: Ternary Operator (`? :`).

  6. HIGH-ORDER COMPILATION METHODS (Advanced Engine Mechanics)
     - Sequence Conversions: `.split()`, `.reverse()`, aur `.join()`.
     - Multi-value processing: `Math.max()` ke sath Spread Parameters `...`.
     - Immutable Sequence Projections: `.map()` ke sath bina purana array chhede transformation.
  =========================================================================
*/

// -------------------------------------------------------------------------
// QUESTION 1: String Reversal (String ko ulta ghumana)
// -------------------------------------------------------------------------

// Approach 1: Manual Iteration (Aakhri index se shuru hone wala reverse loop)
function reverseStringManual(str) {
    let reversed = ""; 
    // String ke sabse aakhri index se shuru karo aur piche ki taraf 0 tak aao
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]; 
    }
    return reversed;
}

// Approach 2: Native Utility Chaining (.split -> .reverse -> .join ka combo)
function reverseStringBuiltIn(str) {
    return str.split("").reverse().join("");
}

console.log("Q1 Manual Output:", reverseStringManual("rahul"));     // EXPECTED OUTPUT: "luhar"
console.log("Q1 Built-In Output:", reverseStringBuiltIn("rahul"));   // EXPECTED OUTPUT: "luhar"

/*
  💡 Line-by-Line Explanation (Asaan Bhasha Mein):
  - reverseStringManual: Bracket notation `str[i]` ka use karke ek-ek akshya uthata hai. 
    Yeh loop ko ulti taraf se chalata hai (yaani length - 1 se lekar 0 tak) aur string jodta jata hai.
  - reverseStringBuiltIn: Pehle `.split("")` se string ke tukde karke array banata hai, 
    fir array ke built-in `.reverse()` engine se use ulta karta hai, aur aakhri mein `.join("")` 
    se wapas jodkar ek single string bana deta hai.
*/


// -------------------------------------------------------------------------
// QUESTION 2: Character Frequency Count (Khaas akshya ko dhoondhna)
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
    // Target character ko hi delimiter (katauti ka point) banakar array tod do
    return str.split(char).length - 1;
}

console.log("Q2 Manual Output:", countCharManual("javascript", "a"));     // EXPECTED OUTPUT: 2
console.log("Q2 Built-In Output:", countCharBuiltIn("javascript", "a"));   // EXPECTED OUTPUT: 2

/*
  💡 Line-by-Line Explanation (Asaan Bhasha Mein):
  - countCharManual: Ek normal `for` loop se poori string ko shuru se aakhri tak chanta hai. 
    Jahan bhi use strict equality `===` ke sath wo character milta hai, counter ko 1 badha deta hai.
  - countCharBuiltIn: Yeh ek dhasu hack hai! Agar hum string ko us character se todte hain, 
    toh jitne tukde honge usse ek kam baar wo character string mein aaya hoga. Isliye `length - 1` return kiya.
*/


// -------------------------------------------------------------------------
// QUESTION 3: Maximum Element Discovery (Sabse bada number nikalna)
// -------------------------------------------------------------------------

// Approach 1: Manual Scanning (Ek-ek karke compare karne wala pointer logic)
function findMaxManual(...arr) {
    // Maan lete hain ki pehla element (index 0) hi sabse bada hai
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Agar koi naya bada number mila, toh max ko update kar do
        }
    }
    return max;
}

// Approach 2: Declarative Evaluation (Built-in Math.max Engine)
function findMaxBuiltIn(...arr) {
    // Spread operator `...` array ke pack huye dabbe ko khol kar khule numbers bana deta hai
    return Math.max(...arr); 
}

console.log("Q3 Manual Output:", findMaxManual(10, 5, 99, 43, 8));     // EXPECTED OUTPUT: 99
console.log("Q3 Built-In Output:", findMaxBuiltIn(10, 5, 99, 43, 8));   // EXPECTED OUTPUT: 99

/*
  💡 Line-by-Line Explanation (Asaan Bhasha Mein):
  - ...arr (Rest Parameter): Function mein bheje gaye loose numbers ko lapet kar ek tameez ka array bana deta hai.
  - findMaxManual: Index 0 ko champion maan kar index 1 se lekar end tak race karwata hai. 
    Jo bhi numbers isse bade nikalte hain, wo `max` ki gaddi par baithte jate hain.
  - findMaxBuiltIn: JavaScript ke highly-optimized browser engine waale `Math.max()` ke andar 
    Spread operator se array khol kar direct answer nikal leta hai.
*/


// -------------------------------------------------------------------------
// QUESTION 4: Object Property Verification (Key dhoondhna)
// -------------------------------------------------------------------------

// Approach 1: Manual Reflection (Iterative Key Traversal Loop)
function hasKeyManual(obj, searchKey) {
    // for...in loop object ke andar ki saari keys (properties) par baari-baari ghumta hai
    for (let key in obj) {
        if (key === searchKey) {
            return true; // Key milte hi turant true return karke exit maro
        }
    }
    return false; 
}

// Approach 2: Evaluative Expressions (Sasta aur Tikau Binary 'in' Operator)
function hasKeyBuiltIn(obj, searchKey) {
    return searchKey in obj; 
}

console.log("Q4 Manual Output:", hasKeyManual({name: "Amit", age: 20}, "age"));     // EXPECTED OUTPUT: true
console.log("Q4 Built-In Output:", hasKeyBuiltIn({name: "Amit", age: 20}, "age"));   // EXPECTED OUTPUT: true

/*
  💡 Line-by-Line Explanation (Asaan Bhasha Mein):
  - for...in Loop: Object ki ek-ek property label ko tab tak check karta hai jab tak exact 
    match na miley. Agar match mil jata hai toh function beech mein se hi true lekar bhag jata hai.
  - in Operator: Ek clean built-in feature jo bina koi loop chalaye direct object ya uski prototype 
    chain mein check kar leta hai ki wo key exist karti hai ya nahi aur seedhe Boolean (true/false) deta hai.
*/


// -------------------------------------------------------------------------
// QUESTION 5: Conditional Sequence Mutation (Modulus ke sath Array badalna)
// -------------------------------------------------------------------------

// Approach 1: Manual Array Construction (Naya array banakar push karna)
function doubleNumbersManual(...arr) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i] * 2); // Even number mila toh dugna karke dalo
        } else {
            result.push(arr[i]);     // Odd mila toh jaisa hai waisa hi daal do
        }
    }
    return result;
}

// Approach 2: Native Projections (.map loop aur Ternary operator ka combo)
function doubleNumbersBuiltIn(...arr) {
    // Immutable map loop ke andar hi single line mein ternary operator (? :) lagaya hai
    return arr.map(num => num % 2 === 0 ? num * 2 : num);
}

console.log("Q5 Manual Output:", doubleNumbersManual(1, 2, 3, 4));     // EXPECTED OUTPUT: [1, 4, 3, 8]
console.log("Q5 Built-In Output:", doubleNumbersBuiltIn(1, 2, 3, 4));   // EXPECTED OUTPUT: [1, 4, 3, 8]

/*
  💡 Line-by-Line Explanation (Asaan Bhasha Mein):
  - doubleNumbersManual: Remainder modulus operator `% 2 === 0` se check karta hai ki sankhya sam (even) hai ya nahi. 
    Naye blank array mein item-by-item `.push()` karke data insert karta hai.
  - doubleNumbersBuiltIn: `Array.prototype.map()` ka use karta hai jo background mein khud naya array 
    allocate karta hai aur bina original array ko mutate kiye single line ternary logic se elements ko badal deta hai.
*/
console.log("\n-------------------------------------------");