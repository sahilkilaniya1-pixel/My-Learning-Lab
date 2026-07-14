// =========================================================================
// JAVASCRIPT FOUNDATION: ADVANCED ALGORITHMS & CORE CODING PATTERNS (PART 2)
// =========================================================================

// =========================================================================
// PATTERN 8: SECOND LARGEST NUMBER (Without Array Sorting)
// =========================================================================

/**
 * 🎯 QUESTION 8: Find the Second Largest Element
 * * Task: Array mein se doosra sabse bada (Second Largest) number dhoondna hai.
 * Kisi bhi sort() method ya Math.max() ka use nahi karna hai.
 * 
 * * Logic: Do variables banayein—'largest' aur 'secondLargest'. Dono ko shuruat mein behad choti value `-Infinity` de di.
 * Ab array par loop chalayein:
 * - Case A: Agar current number 'largest' se bhi bada nikal gaya, toh purana 'largest' ab bechara second position par khisak jayega (`secondLargest = largest`) aur 'largest' ko naya number bana denge.
 * - Case B: Agar current number 'largest' se toh chota hai, par humare 'secondLargest' se bada hai, toh sirf 'secondLargest' ko update karenge.
 * - Dhyaan rahe: Duplicates se bachne ke liye check karenge ki naya number current 'largest' ke barabar na ho!
 */

function getSecondLargest(arr) {
    // Edge Case: Agar array mein 2 se kam elements hain, toh second largest mil hi nahi sakta!
    if (arr.length < 2) return "Array must contain at least 2 elements";

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        // Case A: Agar hume sabse bada number milta hai
        if (arr[i] > largest) {
            secondLargest = largest; // Purana sabse bada ab second position par aa gaya (gaddi khali ki!)
            largest = arr[i];        // Aur yeh naya number ban gaya sabse bada king!
        } 
        // Case B: Agar number 'largest' se chota hai, par 'secondLargest' se bada hai...
        // ...aur sath hi woh duplicate nahi hona chahiye (arr[i] !== largest)
        else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];  // Toh second place isko de do!
        }
    }

    // Agar saare elements same hi the (jaise [10, 10, 10]), toh secondLargest kabhi update hi nahi hoga aur -Infinity hi rahega.
    return secondLargest === -Infinity ? "No second largest element exists" : secondLargest;
}

console.log("--- Pattern 8: Second Largest Demo ---");
console.log("Result:", getSecondLargest([12, 35, 1, 10, 34, 1])); 
// Expected Output: 34
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 9: SUBARRAY SUM / SLIDING WINDOW (Without .slice())
// =========================================================================

/**
 * 🎯 QUESTION 9: Max Sum of 'K' Consecutive Elements (Sliding Window)
 * * Task: Array mein se 'k' lagatar (consecutive) elements ka maximum sum dhoondna hai.
 * 
 * * Logic: Agar simple tareeqe se har baar nested loop lagakar sum karenge toh performace slow ho jayegi.
 * Isliye hum "Sliding Window" technique use karenge:
 * 1. Pehle 'k' elements ka sum nikaal lo aur use hi abhi tak ka 'maxSum' maan lo.
 * 2. Ab window ko ek-ek step aage sarakao. Sarakne ka trick: Agle element ko window mein jodh lo (add) aur pichle sabse left wale element ko ghata do (subtract).
 * Is se bar-bar sum nahi karna padta, bas ek simple plus-minus se kaam chal jata hai!
 */

function maxSubarraySum(arr, k) {
    // Edge Case: Agar array ki length k se choti hai, toh k size ka subarray ban hi nahi sakta
    if (arr.length < k) return "Invalid size";

    // Step 1: Pehli window (pehle k elements) ka total sum nikaalo
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }

    let windowSum = maxSum;

    // Step 2: Window ko aage slide karo. Loop index 'k' se shuru hoga
    for (let i = k; i < arr.length; i++) {
        // Naya element (arr[i]) andar aayega, aur purana left-most element (arr[i - k]) window se bahar nikal jayega
        windowSum += arr[i] - arr[i - k]; 
        
        // Agar naya sum pehle wale maxSum se bada hai, toh update kar do!
        if (windowSum > maxSum) {
            maxSum = windowSum; 
        }
    }

    return maxSum;
}

console.log("--- Pattern 9: Sliding Window Demo ---");
console.log("Max sum of 4 consecutive elements:", maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); 
// Expected Output: 39 (Kyunki 4 + 2 + 10 + 23 = 39 sabse bada sum hai)
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 10: MATRIX TRANSPOSE (2D Array Rotation)
// =========================================================================

/**
 * 🎯 QUESTION 10: Transpose of a 2D Matrix
 * * Task: Ek 2D array (matrix) ke Rows ko Columns mein aur Columns ko Rows mein badalna hai.
 * 
 * * Logic: Agar original matrix `rows x cols` size ki hai, toh transposed matrix `cols x rows` size ki hogi.
 * 1. Pehle transposed matrix ke liye empty arrays (rows) declare kar lo columns ke size ke barabar.
 * 2. Nested loop lagakar swap karo: matrix ke index `[r][c]` ki value ko uthakar transposed ke `[c][r]` par rakh do.
 * Bas row aur column ke pointers ka adla-badli (swap) hi transpose hai!
 */

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = [];

    // Step 1: Pehle transposed matrix ke liye khali structure bana lo.
    // Jo purani columns ki counting thi, ab wo naye matrix ki rows banegi.
    for (let i = 0; i < cols; i++) {
        result[i] = [];
    }

    // Step 2: Nested loops chalao aur values ko transpose karke daal do
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Zamana badal gaya! Row index column ban gaya, aur column index row ban gaya.
            result[c][r] = matrix[r][c]; 
        }
    }

    return result;
}

const myMatrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log("--- Pattern 10: Matrix Transpose Demo ---");
console.log("Original Matrix:", JSON.stringify(myMatrix));
console.log("Transposed Matrix:", JSON.stringify(transposeMatrix(myMatrix)));
// Expected Output: [ [1, 3, 5], [2, 4, 6] ]
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 11: REMOVE ALL OCCURRENCES OF AN ELEMENT
// =========================================================================

/**
 * 🎯 QUESTION 11: Remove All Target Elements
 * * Task: Array mein se kisi ek specific element ki saari occurrences ko gayab karna hai.
 * Built-in methods jaise .filter() ya .splice() ka use bilkul nahi karna hai.
 * 
 * * Logic: Ek naya khali array `result` lo.
 * Array par loop chalao aur check karo: kya current element target ke barabar hai?
 * - Agar nahi hai, toh use humare naye `result` array ke aakhir mein manually daal do.
 * - Agar target mil jata hai, toh use chupchaap skip kar do (naye array mein mat dalo).
 * Bina filter() ke array dynamic push karne ke liye hum `result[result.length]` ka jugad use karenge!
 */

function removeElement(arr, target) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        // Agar current element humare target ke barabar nahi hai, toh hi isko select karo
        if (arr[i] !== target) {
            // result.length hamesha naye array ke next empty slot ka index batata hai.
            // Is trick se hum bina push() ya splice() ke elements ko naye array mein save kar sakte hain.
            result[result.length] = arr[i]; 
        }
    }

    return result;
}

console.log("--- Pattern 11: Remove Occurrences Demo ---");
console.log("Original: [3, 2, 2, 3, 4, 3], Remove target: 3");
console.log("Result:  ", removeElement([3, 2, 2, 3, 4, 3], 3)); 
// Expected Output: [2, 2, 4]
console.log("\n-------------------------------------------");