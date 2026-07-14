// =========================================================================
// JAVASCRIPT FOUNDATION: PRACTICE SHEET (LEVEL 1, LEVEL 2 & LEVEL 3)
// =========================================================================

// =========================================================================
// LEVEL 1: BASIC (Array & Elements)
// =========================================================================

/**
 * 🎯 QUESTION 1: Count Occurrences (Ek number array mein kitni baar aaya?)
 * * Task: Ek aisa function banao jo array aur ek target number le.
 * Bina kisi built-in array methods (jaise filter, indexOf) ke gino ki wo target number array mein kitni baar aaya hai.
 * * Input:  [2, 4, 2, 5, 2, 8], Target: 2
 * Output: 3 (Kyunki 2 poore array mein teen baar aaya hai)
 */

function findCountOccurrences(arr, target) {
    let count = 0; // Ginti shuru karne ke liye counter ko 0 set kiya
    
    // Poore array par ek-ek karke ghumenge (loop chalayenge)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++; // Agar target match ho gaya, toh counter ko +1 badha do
        }
    }
    
    return count; // Loop khatam hone ke baad final ginti (count) return kar do
}

console.log("--- Level 1: Count Occurrences Demo ---");
console.log("Occurrences of 4:", findCountOccurrences([4, 4, 2, 5, 2, 8], 4)); // Output: 2
console.log("Occurrences of 2:", findCountOccurrences([2, 4, 2, 5, 2, 8], 2)); // Output: 3
console.log("\n");


// =========================================================================
// LEVEL 2: INTERMEDIATE (String Manipulation)
// =========================================================================

/**
 * 🎯 QUESTION 2: Remove Vowels (A, E, I, O, U ko string se nikalna)
 * * Task: Ek string se saare vowels (chahe chhote ho ya bade) ko poori tarah se uda do aur bachi hui string return karo.
 * * Input:  "hello world"
 * Output: "hll wrld"
 */

// --- Method 1: Simple Loop aur Match String Tarika (Bina kisi high-level array methods ke) ---
function removeVowelsLoop(str) {
    let result = '';             // Nayi khali string jisme bina vowels wale letters jodeinge
    const vowels = 'aeiouAEIOU'; // Master list saare chhote-bade vowels ki
    
    for (let i = 0; i < str.length; i++) {
        // Agar chalte loop ka letter humari vowels list ke andar NAHI hai, toh use result mein jodd do
        if (!vowels.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

console.log("--- Level 2: Remove Vowels (Method 1) ---");
console.log("Output using Loop:", removeVowelsLoop("hello world")); // Output: "hll wrld"


// --- Method 2: Modern Regex Approach (1-Line ka short trick) ---
let originalStr = "hello world";
// replace() aur Regex (/[aeiouAEIOU]/g) ka use karke saare vowels ko ek sath "" (khaali space) se badal diya
let cleanedStr = originalStr.replace(/[aeiouAEIOU]/g, ""); 

console.log("--- Level 2: Remove Vowels (Method 2) ---");
console.log("Output using Regex:", cleanedStr); // Output: "hll wrld"
console.log("\n");


// =========================================================================
// LEVEL 3: ADVANCED-INTERMEDIATE (Array Se Duplicates Hatana)
// =========================================================================

/**
 * 🎯 QUESTION 3: Find Unique Numbers (Duplicates ko kachre ke dibbe mein daalo)
 * * Task: Ek array mein bohot saare duplicate numbers hain. Humein ek naya array chahiye jisme har number sirf ek hi baar ho.
 * * Input:  [1, 2, 3, 2, 4, 1, 5]
 * Output: [1, 2, 3, 4, 5]
 */

// --- Method 1: Nested Loops Approach (Ekdum basic logic bina short-cut ke) ---
function findUniqueNumbers(arr) {
    let uniqueNumbers = []; // Yeh humara naya box hai jisme sirf unique numbers rahenge
    
    for (let i = 0; i < arr.length; i++) {
        let isUnique = true; // Maan ke chalte hain ki number unique hai
        
        // Ab check karo ki humare naye wale box 'uniqueNumbers' mein yeh element pehle se toh nahi baitha hai?
        for (let j = 0; j < uniqueNumbers.length; j++) {
            if (arr[i] === uniqueNumbers[j]) {
                isUnique = false; // Are yaar! Yeh toh duplicate mil gaya
                break;            // Jab duplicate mil hi gaya toh aage loop chalane ka kya fayda, break karo!
            }
        }
        
        // Agar isUnique abhi bhi true hai, matlab yeh ekdum naya aur unique number hai! Box mein push kar do.
        if (isUnique) {
            uniqueNumbers.push(arr[i]);
        }
    }
    return uniqueNumbers;
}

console.log("--- Level 3: Find Unique Numbers (Method 1) ---");
console.log("Unique Numbers (Loops):", findUniqueNumbers([1, 2, 3, 2, 4, 1, 5])); // Output: [1, 2, 3, 4, 5]


// --- Method 2: Modern ES6 Set Approach (1-Line ka jhatpat shortcut) ---
// Note: 'Set' JS ka ek aisa special object hai jo apne andar kabhi bhi duplicates nahi rakhta.
// [...new Set(arr)] likhne se array Set banta hai (duplicates gayab) aur wapas array mein convert ho jata hai.
function findUniqueNumbersModern(arr) {
    return [...new Set(arr)];
}

console.log("--- Level 3: Find Unique Numbers (Method 2) ---");
console.log("Unique Numbers (Set):  ", findUniqueNumbersModern([1, 2, 3, 2, 4, 1, 5])); // Output: [1, 2, 3, 4, 5]