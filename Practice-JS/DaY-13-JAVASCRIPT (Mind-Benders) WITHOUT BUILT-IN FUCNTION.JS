// =========================================================================
// JAVASCRIPT FOUNDATION: ADVANCED ALGORITHMS & CORE CODING PATTERNS (PART 3)
// =========================================================================

// =========================================================================
// PATTERN 12: OBJECT EQUALITY (Deep Comparison of Two Objects)
// =========================================================================

/**
 * 🎯 QUESTION 12: Check Object Equality (Shallow level)
 * * Task: Do alag-alag objects ke andar ka data bilkul same hai ya nahi, yeh check karna hai.
 * JS mein `===` lagane par reference check hota hai, isliye hume manually values match karni padengi.
 * 
 * * Logic:
 * 1. Pehle manually dono objects ki keys count karo (bina Object.keys() ke). Agar dono ke pass barabar number of keys hi nahi hain, toh baat wahin khatam! Return false.
 * 2. Fir `for...in` loop se ek-ek key uthao. Check karo ki kya woh key `obj2` mein exist karti hai aur dono ki values bilkul same hain ya nahi.
 * 
 * * Note (Bonus Mindset): Yeh code shallow check karta hai (nested objects ke liye deep check ke liye recursion lagta hai). Par basic objects ke liye yeh perfect aur fast hai!
 */

function areObjectsEqual(obj1, obj2) {
    // 1. Manually dono objects ki keys count karenge taaki key-length mismatch turant pta chal sake
    let count1 = 0;
    for (let key in obj1) count1++;
    
    let count2 = 0;
    for (let key in obj2) count2++;

    // Agar keys ka count hi barabar nahi hai, toh dono objects same ho hi nahi sakte!
    if (count1 !== count2) return false;

    // 2. Ab loop chalao aur har ek key ki value compare karo
    for (let key in obj1) {
        // - `obj2[key] === undefined` se pata chalta hai ki kya woh key dusre object mein hai bhi ya nahi
        // - `obj1[key] !== obj2[key]` se hum aapas ki values match karte hain
        if (obj1[key] !== obj2[key]) {
            return false; // Kahin bhi gadbad mili toh turant jhoot bol do!
        }
    }

    // Agar sab kuch thik nikal gaya, toh badhaai ho, objects andar se judwaa (equal) hain!
    return true; 
}

console.log("--- Pattern 12: Object Equality Demo ---");
console.log("Are equal?:", areObjectsEqual({a: 1, b: 2}, {a: 1, b: 2})); // Expected Output: true
console.log("Are equal?:", areObjectsEqual({a: 1, b: 2}, {a: 1, b: 3})); // Expected Output: false
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 13: FLATTEN A NESTED ARRAY (Without using .flat())
// =========================================================================

/**
 * 🎯 QUESTION 13: Flatten Nested Array (Recursion Pattern)
 * * Task: Ek array ke andar kitne bhi nested arrays ho (jaise [1, [2, 3], [4, [5]] ]), 
 * use todkar ek simple single-level array [1, 2, 3, 4, 5] banana hai bina `.flat()` ke.
 * 
 * * Logic: Iske liye recursion (ek function jo khud ko call kare) sabse dhasu tarika hai!
 * 1. Ek `extract` naam ka helper function banayein jo har ek element ko check karega.
 * 2. Agar current element khud ek array hai (iska pata lagane ke liye check karenge ki kya uska type 'object' hai, woh null nahi hai, aur uske paas ek 'length' property hai)...
 *    ...toh hum us array ke andar ghusenge (loop chalaenge) aur phir se `extract()` ko call kar denge (Recursion!).
 * 3. Agar woh ek normal number/value hai, toh sidhe use humare `result` array mein daal denge.
 */

function flattenArray(arr) {
    let result = [];

    // Helper function jo andar tak ghus kar saare elements ko chhaanega (extract karega)
    function extract(element) {
        // JS mein array ka type checking ka desi aur solid jugad bina built-in Array.isArray() ke:
        if (typeof element === "object" && element !== null && element.length !== undefined) {
            // Agar element ek array hai, toh uske saare elements par fir se extract function run karo
            for (let i = 0; i < element.length; i++) {
                extract(element[i]); // Recursion: Andar wale array ke dabba ko bhi kholo!
            }
        } else {
            // Agar normal value hai, toh bindass result array ke end mein insert kar do
            result[result.length] = element;
        }
    }

    extract(arr); // Sabse pehle poore main array ko andar bhejo
    return result;
}

console.log("--- Pattern 13: Flatten Array Demo ---");
console.log("Flattened Array:", flattenArray([1, [2, 3], [4, [5]]])); 
// Expected Output: [1, 2, 3, 4, 5]
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 14: STRING TO NUMBER CONVERSION (Without parseInt() or Number())
// =========================================================================

/**
 * 🎯 QUESTION 14: Convert String to Number Mathematically
 * * Task: "4321" string ko bina JS ke functions (parseInt, Number, ya + operator) ke number `4321` mein badalna hai.
 * 
 * * Logic: Pure Math aur Place Value ka kamaal!
 * 1. Sabse pehle string ke har character digit ('0' to '9') ko map karne ke liye ek lookup table (`digitMap`) bana lo.
 * 2. Ab string ke upar left to right loop chalao.
 * 3. Har naye step par jab hum aage badhte hain, toh purane value ko 10 se multiply karte hain (taaki uska dhasaka/place-value shift ho jaye) aur naya unit digit usme plus kar dete hain.
 * 
 * * Example step-by-step for "432":
 *   - Start: num = 0
 *   - Step 1: Char '4' -> Map value = 4.  Naya num = (0 * 10) + 4 = 4
 *   - Step 2: Char '3' -> Map value = 3.  Naya num = (4 * 10) + 3 = 43
 *   - Step 3: Char '2' -> Map value = 2.  Naya num = (43 * 10) + 2 = 432!
 */

function stringToNumber(str) {
    // Har string character digit ka actual number value map kar diya
    const digitMap = { 
        '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, 
        '5': 5, '6': 6, '7': 7, '8': 8, '9': 9 
    };
    
    let num = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let digit = digitMap[char]; // Char ko direct actual number mein convert kiya table se
        
        // Math magic: Purani values ko left shift (multiply by 10) karo aur naya digit unit place par jod do
        num = (num * 10) + digit; 
    }

    return num;
}

console.log("--- Pattern 14: String to Number Demo ---");
let convertedNum = stringToNumber("4321");
console.log("Converted Value:", convertedNum);     // Expected Output: 4321
console.log("Type of Output: ", typeof convertedNum); // Expected Output: "number"
console.log("\n-------------------------------------------");