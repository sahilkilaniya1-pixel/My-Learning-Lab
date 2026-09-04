// =========================================================================
// JAVASCRIPT BUILT-IN ARRAY METHODS REFERENCE GUIDE
// =========================================================================
// Description: JavaScript ke built-in array methods ka ultimate production-ready
// cheat-sheet guide. Isme hum har ek modern array method (.sort, .map, .filter, etc.)
// ke core mechanics, time complexity, aur behtareen deshi Hinglish explanations ko 
// line-by-line dekhenge.

// -------------------------------------------------------------------------
// Initial Setup Data (Humara Test Data)
// -------------------------------------------------------------------------
const numbersArray = [2, 4, 6, 2, 0, 56, 32, 65, 78, 65, 78, 95];

const mixedArray = [2, 4, 5, 3, 5, 3, 2, 5, "a", "b"];

const namesList = ["Aayush", "Sahil", "Akshya"];

const fruits = ["Apple", "Banana", "Mango"]; // Loop side-effect test ke liye

const usersDataset = [
  { name: "John", age: 17, isActive: true },
  { name: "Jane", age: 22, isActive: false },
  { name: "Bob", age: 19, isActive: true },
  { name: "Alice", age: 25, isActive: true }
];


// =========================================================================
// 1. ARRAY SORTING (.sort())
// =========================================================================

// --- A. Ascending Order (Chote se Bada) ---
// Note: [...numbersArray] spread operator ka use karke humne original array ki 
// shallow copy banayi hai taaki original data mutate (change) na ho!
const ascendingResult = [...numbersArray].sort((x, y) => x - y);
console.log("1. Built-in Ascending Sorted:", ascendingResult);
// EXPECTED OUTPUT: [0, 2, 2, 4, 6, 32, 56, 65, 65, 78, 78, 95]


// --- B. Descending Order (Bade se Chota) ---
const descendingResult = [...numbersArray].sort((x, y) => y - x);
console.log("2. Built-in Descending Sorted:", descendingResult);
// EXPECTED OUTPUT: [95, 78, 78, 65, 65, 56, 32, 6, 4, 2, 2, 0]

/*
  🧠 Under the Hood (Sort Mechanism):
  - `(x, y) => x - y`: Yeh humara comparator function hai. 
    Agar return value < 0 (negative) aati hai, toh 'x' pehle aayega 'y' se.
    Agar return value > 0 (positive) aati hai, toh 'y' pehle aayega 'x' se.
  - JS engine background mein iske liye V8 engine ka highly optimized Timsort algorithm chalata hai.
*/


// =========================================================================
// 2. EXTRAPOLATED MATHEMATICAL PRODUCTS
// =========================================================================

// --- A. Product of Two Largest Numbers ---
const sortedDesc = [...numbersArray].sort((x, y) => y - x);
const productOfTwoLargest = sortedDesc[0] * sortedDesc[1]; // Sabse bade pehle do elements uthaye
console.log("3. Product of 2 Largest:", productOfTwoLargest);
// EXPECTED OUTPUT: 7410 (Calculated via 95 * 78)


// --- B. Product of Extremes (Min * Max) ---
const sortedAsc = [...numbersArray].sort((x, y) => x - y);
// sortedAsc[0] = sabse chota (Min), sortedAsc[sortedAsc.length - 1] = sabse bada (Max)
const productOfExtremes = sortedAsc[0] * sortedAsc[sortedAsc.length - 1];
console.log("4. Product of Extremes:", productOfExtremes);
// EXPECTED OUTPUT: 0 (Calculated via 0 * 95)


// =========================================================================
// 3. DATA TYPE CONVERSIONS (.join() & .split())
// =========================================================================

// --- A. Array to String (.join()) ---
// Array ke saare elements ko aapas mein chipka kar ek akela String bana deta hai
const serializedString = mixedArray.join(",");
console.log("5. Serialized String:", serializedString);
// EXPECTED OUTPUT: "2,4,5,3,5,3,2,5,a,b"


// --- B. String to Array (.split()) ---
// Ek string ko bataye huye delimiter ke basis par kaat kar array mein convert karta hai
const stringSample = "Aayush"; // Output ke sath match karne ke liye humne ise "Aayush" rakha hai
const deserializedArray = stringSample.split(""); // Empty string "" dene par ek-ek character alag ho jata hai
console.log("6. Deserialized Array:", deserializedArray);
// EXPECTED OUTPUT: ['A', 'a', 'y', 'u', 's', 'h']


// =========================================================================
// 4. TRANSFORMATIVE PROJECTIONS (.map())
// =========================================================================

// Map loop chala kar, har ek element par callback function chalata hai 
// aur ek brand-new same-length ka array return karta hai.
const transformationResult = namesList.map(name => name.length);
console.log("7. Transformation Result (.map):", transformationResult);
// EXPECTED OUTPUT: [6, 5, 6] (Names ki character length ka array)


// =========================================================================
// 5. ADVANCED PREDICATE LOOKUPS (.find(), .every(), .some())
// =========================================================================

// --- A. .find() ---
// Poore array mein dhoondhega aur jo pehla element condition true karega, use return kar ke exit ho jayega
const matchedUser = usersDataset.find(user => user.isActive === true && user.age > 18);
console.log("8. Matched User (.find):", matchedUser);
// EXPECTED OUTPUT: { name: "Bob", age: 19, isActive: true }


// --- B. .every() ---
// "Sab ke sab pass hone chahiye!" Agar ek bhi element condition fail karega, toh result turant FALSE!
const functionalSanityCheck = usersDataset.every(user => user.isActive === true);
console.log("9. Sanity Check (.every):", functionalSanityCheck);
// EXPECTED OUTPUT: false (Kyunki Jane active nahi hai, yaani 'isActive === false')


// --- C. .some() ---
// "Koi ek bhi chalega!" Agar pure array mein koi ek bnda bhi condition pass kar de, toh result TRUE!
const existenceEvaluation = usersDataset.some(user => user.age < 18);
console.log("10. Existence Check (.some):", existenceEvaluation);
// EXPECTED OUTPUT: true (Kyunki John 17 ka hai, yaani 18 se chota hai)


// =========================================================================
// 6. CONDITIONAL SUBSET FILTERING (.filter())
// =========================================================================

// Pure array par filter chalakar, sirf un elements ko naye array mein save karta hai 
// jo condition pass (true return) karte hain.
const filteredSubset = usersDataset.filter(user => user.isActive === true);
console.log("11. Filtered Subset (.filter):", filteredSubset);
/* 
  EXPECTED OUTPUT:
  [
    { name: "John", age: 17, isActive: true },
    { name: "Bob", age: 19, isActive: true },
    { name: "Alice", age: 25, isActive: true }
  ]
*/


// =========================================================================
// 7. DATA COLLECTION ACCUMULATION (.reduce())
// =========================================================================

const expenseList = [100, 250, 500, 80];
// reduce() hume poore array ko single value mein collapse (summarize) karne ka mauka deta hai.
// accumulator = upar tak ka jama-khata (running total)
// current = is round ka element
// 0 = accumulator ki initial state (seed value)
const runningGrandTotal = expenseList.reduce((accumulator, current) => accumulator + current, 0);
console.log("12. Running Grand Total (.reduce):", runningGrandTotal);
// EXPECTED OUTPUT: 930


// =========================================================================
// 8. SIDE-EFFECT ITERATIONS (.forEach())
// =========================================================================

console.log("13. Stream Processing Output (.forEach):");
// forEach sirf elements ko stream karke action lene ke kaam aata hai (jaise print, DB save etc.)
// Iska return value humesha undefined hota hai, isliye iska use calculations store karne ke liye nahi karte!
fruits.forEach((fruit, index) => {
  console.log(` -> Element detected at positional index [${index}]: ${fruit}`);
});
/*
  EXPECTED OUTPUT:
  -> Element detected at positional index [0]: Apple
  -> Element detected at positional index [1]: Banana
  -> Element detected at positional index [2]: Mango
*/


// =========================================================================
// 9. INDEX DETERMINATION LOOKUPS (.findIndex())
// =========================================================================

const genericScores = [45, 72, 98, 60];
// findIndex exact match hone par index location (0, 1, 2...) bhejega. 
// Kuch na milne par -1 return karega.
const targetIndexResult = genericScores.findIndex(score => score >= 75);
console.log("14. Target Index (.findIndex):", targetIndexResult);
// EXPECTED OUTPUT: 2 (Kyunki 98 index 2 par hai)


// =========================================================================
// 10. PRESENCE VERIFICATION VALIDATION (.includes())
// =========================================================================

const logisticsCart = ["Laptop", "Mouse", "Keyboard"];
// Direct simple items dhoondhne ka sabse short shortcut! Return types strictly boolean hote hain.
console.log("15. Includes 'Trimmer'?:", logisticsCart.includes("Trimmer")); // Expected: false
console.log("16. Includes 'Mouse'?:", logisticsCart.includes("Mouse"));     // Expected: true
console.log("\n-------------------------------------------");