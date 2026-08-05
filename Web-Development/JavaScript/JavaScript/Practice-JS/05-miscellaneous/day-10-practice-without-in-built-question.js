// =========================================================================
// JAVASCRIPT FOUNDATION: PRACTICE SHEET (ALGORITHMS & LOGIC BUILDING)
// =========================================================================

// =========================================================================
// LEVEL 1: BASIC (Array Searching)
// =========================================================================

/**
 * 🎯 QUESTION 1: Find Element Index (Linear Search - Target ka index dhoondna)
 * * Task: Ek function banao jo array aur target element le.
 * Bina kisi built-in method (jaise indexOf) ke target ko dhoondho aur uska index return karo. 
 * Agar target na mile, toh -1 return karo.
 * * * Input:  [10, 20, 30, 40, 50], Target: 30 -> Output: 2
 * * * Input:  [10, 20, 30, 40, 50], Target: 99 -> Output: -1
 */

function findIndex(arr, target) {
    // Sirf ek single loop chalayenge array ke pehle element se lekar aakhiri tak
    for (let i = 0; i < arr.length; i++) {
        
        // Agar current element humare target se mil jata hai, toh turant uska index (i) return kar do
        if (arr[i] === target) {
            return i; // Early exit: Target milte hi function yahi khatam ho jayega
        }
    }
    // Agar poora loop chal gaya aur target kahin nahi mila, toh aakhir mein -1 return kar do
    return -1; 
}

console.log("--- Level 1: Find Index (Linear Search) Demo ---");
let indexResult1 = findIndex([10, 20, 30, 40, 50], 50);
console.log("Index of 50:", indexResult1); // Expected Output: 4

let indexResult2 = findIndex([10, 20, 30, 40, 50], 99);
console.log("Index of 99:", indexResult2); // Expected Output: -1 (Nahi mila)
console.log("\n");


// =========================================================================
// LEVEL 2: INTERMEDIATE (Array Manipulation & Merging)
// =========================================================================

/**
 * 🎯 QUESTION 2: Merge Two Arrays (Do arrays ko aapas mein jodhna)
 * * Task: Do alag-alag arrays ko jodhkar ek single array banana hai, par bina .concat() use kiye.
 * * * Input:  [1, 2], [3, 4, 5]
 * Output: [1, 2, 3, 4, 5]
 */

// --- Method 1: Manual Index Insertion Loop (Bina kisi ready-made shortcut ke) ---
const mergeArrays = (arr1, arr2) => {
    let combinedArray = []; // Step 1: Ek naya khali box banaya dono ko jodhne ke liye
    
    // Step 2: Pehle loop se arr1 ke saare elements ko naye array mein dala
    for (let i = 0; i < arr1.length; i++) {
        combinedArray[combinedArray.length] = arr1[i]; // combinedArray.length hamesha naya khali index point karega
    }
    // Step 3: Dusre loop se arr2 ke saare elements ko uske aage se jodd diya
    for (let j = 0; j < arr2.length; j++) {
        combinedArray[combinedArray.length] = arr2[j];
    }
    // Step 4: Final combined array ko return kar do
    return combinedArray;
};

// --- Method 2: Modern ES6 Spread Operator (1-Line ka dhasu shortcut) ---
// ... operator dono arrays ke elements ko khol kar ek naye array mein bacha deta hai
const mergeArraysModern = (arr1, arr2) => [...arr1, ...arr2];

console.log("--- Level 2: Merge Arrays Demo ---");
console.log("Merged (Method 1 - Loop):  ", mergeArrays([1, 2], [3, 4, 5]));      // Output: [1, 2, 3, 4, 5]
console.log("Merged (Method 2 - Spread):", mergeArraysModern([1, 2], [3, 4, 5]));// Output: [1, 2, 3, 4, 5]
console.log("\n");


// =========================================================================
// LEVEL 3: ADVANCED-INTERMEDIATE (String Manipulation)
// =========================================================================

/**
 * 🎯 QUESTION 3: Check Palindrome (Two-Pointer Technique se check karna)
 * * Task: Ek arrow function banao jo check kare ki string Palindrome hai ya nahi (ulta-seedha ek barabar).
 * * * Input:  "racecar" -> Output: true
 * * * Input:  "Hello"   -> Output: false
 */

const isPalindrome = (str) => {
    let left = 0;                 // Ek pointer bilkul shuruat mein (index 0)
    let right = str.length - 1;    // Dusra pointer bilkul aakhir mein

    // Loop tab tak chalega jab tak dono pointers aapas mein mil ya cross nahi jate
    while (left < right) {
        // Agar dono taraf ke characters aapas mein match nahi huye, toh seedhe bol do 'false' (Not a Palindrome)
        if (str[left] !== str[right]) {
            return false; // Turant baahar nikal jao
        }
        left++;  // Left pointer ko ek kadam aage badhao
        right--; // Right pointer ko ek kadam peeche khiskao
    }
    // Agar pointers bina kisi mismatch ke aapas mein cross ho gaye, toh string pakki Palindrome hai!
    return true;
};

console.log("--- Level 3: Is Palindrome Demo ---");
console.log("Is 'racecar' a Palindrome?:", isPalindrome("racecar")); // Expected Output: true
console.log("Is 'Hello' a Palindrome?:  ", isPalindrome("Hello"));   // Expected Output: false
console.log("\n");


// =========================================================================
// LEVEL 4: ADVANCED (Array Deduplication & Analysis)
// =========================================================================

/**
 * 🎯 QUESTION 4: Find Duplicate Elements (Jo numbers baar-baar aaye hain unhe dhoondna)
 * * Task: Ek aisa function likho jo array mein se un numbers ko nikal kar ek alag array banaye jo ek se zyada baar aaye hain.
 * * * Input:  [1, 2, 3, 2, 4, 3, 5]
 * Output: [2, 3] (Kyunki 2 aur 3 repeat huye hain)
 */

// --- Method 1: Manual Loops Approach ---
function findDuplicates(arr) {
    let duplicates = []; // Repeat hone wale numbers ko isme rakhenge
    
    // Outer loop se hum ek-ek karke har number ko select karenge
    for (let i = 0; i < arr.length; i++) {
        // Inner loop se check karenge ki kya yeh number aage kahin repeat ho raha hai
        for (let j = i + 1; j < arr.length; j++) {
            
            if (arr[i] === arr[j]) {
                let alreadyAdded = false;
                
                // Pehle yeh check kar lo ki humne is repeat number ko pehle hi duplicates array mein toh nahi daal diya?
                for (let k = 0; k < duplicates.length; k++) {
                    if (duplicates[k] === arr[i]) {
                        alreadyAdded = true;
                        break;
                    }
                }
                
                // Agar pehle se duplicates mein nahi hai, toh hi ise safely push karo!
                if (!alreadyAdded) {
                    duplicates.push(arr[i]);
                }
            }
        }
    }
    return duplicates;
}

// --- Method 2: Modern ES6 filter & indexOf Approach (Clean code) ---
// (Note: Original console.log mein iski jarurat thi, isliye maine ise yahan define kiya hai)
function findDuplicatesModern(arr) {
    // filter un elements ko rakhega jo doosri baar dikhe hain (yaani pehli baar ka index current index ke barabar nahi hai)
    // aur Set ka use karke hum un repeat huye values ke duplicates ko bhi filter kar lete hain.
    let dupList = arr.filter((item, index) => arr.indexOf(item) !== index);
    return [...new Set(dupList)];
}

console.log("--- Level 4: Find Duplicates Demo ---");
console.log("Duplicate Elements (Loop):  ", findDuplicates([1, 2, 3, 2, 4, 3, 5]));       // Output: [2, 3]
console.log("Duplicate Elements (Modern):", findDuplicatesModern([1, 2, 3, 2, 4, 3, 5])); // Output: [2, 3]
console.log("\n");


// =========================================================================
// LEVEL 5: EXPERT (Array Rotation Challenges)
// =========================================================================

/**
 * 🎯 QUESTION 5: Rotate Array Right by One Position (Array ko right mein ek step khiskana)
 * * Task: Array ke saare elements ko right side mein ek kadam aage badhao.
 * Jo sabse aakhiri element hai, wo ghantaghar ghumkar bilkul shuruat (front) mein aa jayega.
 * * * Input:  [1, 2, 3, 4, 5]
 * Output: [5, 1, 2, 3, 4]
 */

// --- Method 1: Manual Index Shifting Loop (Bina kisi helper configuration ke) ---
function rotateArray(arr) {
    // Safety Check: Agar array khali hai ya usme sirf 1 element hai, toh rotate karne ka koi matlab nahi hai
    if (arr.length <= 1) return arr;

    let rotated = [];
    
    // Step 1: Original array ke aakhiri element ko naye array ke sabse pehle index (0) par set kar do
    rotated[0] = arr[arr.length - 1];
    
    // Step 2: Baaki saare elements ko ek-ek position aage shift karke naye array mein daalo
    for (let i = 0; i < arr.length - 1; i++) {
        rotated[i + 1] = arr[i];
    }
    return rotated;
}

// --- Method 2: Modern ES6 Destructuring Approach ---
const rotateArrayModern = (arr) => {
    if (arr.length <= 1) return arr;
    let copy = [...arr]; // Original array ko safe rakhne ke liye uski copy banayi
    // copy.pop() aakhiri element ko nikalega, aur baaki copy array uske peeche spread ho jayega
    return [copy.pop(), ...copy];
};

console.log("--- Level 5: Rotate Array Demo ---");
console.log("Original Array:            [1, 2, 3, 4, 5]");
console.log("Rotated Array (Loop):    ", rotateArray([1, 2, 3, 4, 5]));       // Output: [5, 1, 2, 3, 4]
console.log("Rotated Array (Modern):  ", rotateArrayModern([1, 2, 3, 4, 5])); // Output: [5, 1, 2, 3, 4]