// =========================================================================
// JAVASCRIPT ARRAY MANIPULATION: PURE CUSTOM ALGORITHM IMPLEMENTATION
// =========================================================================
// Description: Ekdum zero level se, bina kisi built-in Array methods (.sort, 
// .map, .filter, etc.) ka use kiye, custom JavaScript algorithms ka master guide.
// Core control structures (Loops, If-Else) ka use karke poore data structures ko
// aasan aur behtareen desi Hinglish language mein samjhaya gaya hai.

// -------------------------------------------------------------------------
// Initial Setup Data (Humara Test Data)
// -------------------------------------------------------------------------
const numbersArray = [2, 4, 6, 2, 0, 56, 32, 65, 78, 65, 78, 95];

const mixedArray = [2, 4, 5, 3, 5, 3, 2, 5, "a", "b"];

const namesList = ["Aayush", "Sahil", "Akshya"];

const usersDataset = [
  { name: "John", age: 17, isActive: true },
  { name: "Jane", age: 22, isActive: false },
  { name: "Bob", age: 19, isActive: true },
  { name: "Alice", age: 25, isActive: true }
];

/**
 * 🛠️ Helper Function: Clone Array (Shallow Copy)
 * * Task: Ek array ki bilkul alag, naye memory reference wali copy banana.
 * * Kyun?: Taaki humara original array galti se bhi mutate (change) na ho jaye!
 * * Trick: Bina .slice() ya spread operator [...] ke, hum naye array ke index position 
 *   par purane values ko manually map kar rahe hain.
 */
function cloneArray(source) {
  let clone = [];
  for (let i = 0; i < source.length; i++) {
    // result[result.length] wali trick se bina .push() ke element end mein insert ho jata hai
    clone[clone.length] = source[i];
  }
  return clone;
}


// =========================================================================
// 1. ARRAY SORTING (Custom Bubble Sort)
// =========================================================================

// --- A. Ascending Order (Chote se Bada) ---
const ascendingResult = cloneArray(numbersArray);

// Nested loops: Bubble sort ka asool hai ki har poore round (i) ke baad, 
// sabse bada element automatically end mein "bubble up" hokar set ho jata hai.
for (let i = 0; i < ascendingResult.length; i++) {
  // -1 - i isliye kyunki aakhir ke sorted elements ko dubara check karne ki zaroorat nahi hai
  for (let j = 0; j < ascendingResult.length - 1 - i; j++) {
    // Agar left wala element right wale se bada hai, toh dono ki seats adla-badli (swap) kar do!
    if (ascendingResult[j] > ascendingResult[j + 1]) {
      let temp = ascendingResult[j]; // Temp dabba swap karne ke liye
      ascendingResult[j] = ascendingResult[j + 1];
      ascendingResult[j + 1] = temp;
    }
  }
}
console.log("1. Ascending Sorted:", ascendingResult);
// EXPECTED OUTPUT: [0, 2, 2, 4, 6, 32, 56, 65, 65, 78, 78, 95] 


// --- B. Descending Order (Bade se Chota) ---
const descendingResult = cloneArray(numbersArray);

for (let i = 0; i < descendingResult.length; i++) {
  for (let j = 0; j < descendingResult.length - 1 - i; j++) {
    // Logic ekdum same hai, bas yahan check karenge: agar left wala right wale se CHOTA hai,
    // toh use right mein dhakel do (bade numbers ko aage laao!)
    if (descendingResult[j] < descendingResult[j + 1]) {
      let temp = descendingResult[j];
      descendingResult[j] = descendingResult[j + 1];
      descendingResult[j + 1] = temp;
    }
  }
}
console.log("2. Descending Sorted:", descendingResult);
// EXPECTED OUTPUT: [95, 78, 78, 65, 65, 56, 32, 6, 4, 2, 2, 0]


// =========================================================================
// 2. EXTRAPOLATED MATHEMATICAL PRODUCTS
// =========================================================================

// --- A. Find the Product of Two Largest Numbers ---
let max1 = -Infinity;
let max2 = -Infinity;

for (let i = 0; i < numbersArray.length; i++) {
  // Case 1: Agar current number abhi tak ke sabse bade 'max1' se bhi bada nikal gaya
  if (numbersArray[i] > max1) {
    max2 = max1;             // Purana max1 ab doosre number par khisak gaya (demotion!)
    max1 = numbersArray[i];  // Naya king (max1) mil gaya!
  } 
  // Case 2: Agar number max1 se toh chota hai par max2 se bada hai, toh sirf max2 update hoga
  else if (numbersArray[i] > max2) {
    max2 = numbersArray[i];
  }
}
const productOfTwoLargest = max1 * max2;
console.log("3. Product of 2 Largest:", productOfTwoLargest);
// EXPECTED OUTPUT: 7410 (Calculated via 95 * 78)


// --- B. Find Product of Absolute Extremes (Min * Max) ---
let absoluteMin = numbersArray[0];
let absoluteMax = numbersArray[0];

for (let i = 1; i < numbersArray.length; i++) {
  // Agar koi number absoluteMin se bhi chota hai, use new min bana do
  if (numbersArray[i] < absoluteMin) absoluteMin = numbersArray[i];
  // Agar koi number absoluteMax se bhi bada hai, use new max bana do
  if (numbersArray[i] > absoluteMax) absoluteMax = numbersArray[i];
}
const productOfExtremes = absoluteMin * absoluteMax;
console.log("4. Product of Extremes:", productOfExtremes);
// EXPECTED OUTPUT: 0 (Calculated via 0 * 95)


// =========================================================================
// 3. DATA TYPE CONVERSIONS (Custom Join & Split Algorithms)
// =========================================================================

// --- A. Custom Array to String (Replicating .join(",")) ---
let serializedString = "";
for (let i = 0; i < mixedArray.length; i++) {
  serializedString += mixedArray[i]; // String mein element jodo
  
  // Aakhir wale element ke baad comma (,) nahi aana chahiye, isliye length - 1 ka check
  if (i < mixedArray.length - 1) {
    serializedString += ",";
  }
}
console.log("5. Serialized String:", serializedString);
// EXPECTED OUTPUT: "2,4,5,3,5,3,2,5,a,b"


// --- B. Custom String to Array (Replicating .split("")) ---
const stringSample = "Aayush";
const deserializedArray = [];

for (let i = 0; i < stringSample.length; i++) {
  // String internally array ki tarah indexable hoti hai. 
  // Hum har character ko manually naye array ke dynamic position par copy kar rahe hain.
  deserializedArray[deserializedArray.length] = stringSample[i];
}
console.log("6. Deserialized Array:", deserializedArray);
// EXPECTED OUTPUT: ['A', 'a', 'y', 'u', 's', 'h']


// =========================================================================
// 4. TRANSFORMATIVE PROJECTIONS (Replicating .map())
// =========================================================================

const transformationResult = [];
for (let i = 0; i < namesList.length; i++) {
  // Har ek string uthao, uski length nikaalo aur result array mein push kar do.
  // result[result.length] dynamic push ka superfast alternative hai!
  transformationResult[transformationResult.length] = namesList[i].length;
}
console.log("7. Transformation Result (.map):", transformationResult);
// EXPECTED OUTPUT: [6, 5, 6]


// =========================================================================
// 5. ADVANCED PREDICATE LOOKUPS (Replicating .find(), .every(), .some())
// =========================================================================

// --- A. Custom .find() ---
let matchedUser = undefined;
for (let i = 0; i < usersDataset.length; i++) {
  // Jo user condition ko meet karega (Active ho aur 18+ ho), use match user bana do
  if (usersDataset[i].isActive === true && usersDataset[i].age > 18) {
    matchedUser = usersDataset[i];
    break; // Shuruat ka pehla banda milte hi loop ko tod do (No extra execution!)
  }
}
console.log("8. Matched User (.find):", matchedUser);
// EXPECTED OUTPUT: { name: "Bob", age: 19, isActive: true }


// --- B. Custom .every() ---
let functionalSanityCheck = true; // Maan lo ki pehle se sab sahi (true) hai
for (let i = 0; i < usersDataset.length; i++) {
  // Agar ek bhi user inactive (isActive !== true) mil gaya, toh hamara condition fail!
  if (usersDataset[i].isActive !== true) {
    functionalSanityCheck = false; 
    break; // Ek bhi gunehgar milte hi short-circuit (break) kar do!
  }
}
console.log("9. Sanity Check (.every):", functionalSanityCheck);
// EXPECTED OUTPUT: false


// --- C. Custom .some() ---
let existenceEvaluation = false; // Maan lo ki koi bhi candidate condition pass nahi karega
for (let i = 0; i < usersDataset.length; i++) {
  // Agar ek bhi 18 saal se chota bacha mil gaya, toh existence 'true' ho jayegi
  if (usersDataset[i].age < 18) {
    existenceEvaluation = true;
    break; // Ek mil gaya na? Bas kaam poora! Break early!
  }
}
console.log("10. Existence Check (.some):", existenceEvaluation);
// EXPECTED OUTPUT: true


// =========================================================================
// 6. CONDITIONAL SUBSET FILTERING (Replicating .filter())
// =========================================================================

const filteredSubset = [];
for (let i = 0; i < usersDataset.length; i++) {
  // Filter algorithm: Agar filter condition 'true' aati hai, toh hi data payload ko naye container mein copy karo
  if (usersDataset[i].isActive === true) {
    filteredSubset[filteredSubset.length] = usersDataset[i];
  }
}
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
// 7. DATA COLLECTION ACCUMULATION (Replicating .reduce())
// =========================================================================

const expenseList = [100, 250, 500, 80];
let runningGrandTotal = 0; // Humara accumulator (starter value is 0)

for (let i = 0; i < expenseList.length; i++) {
  // Har iteration mein current element ko hum accumulator ke andar manually add karte jaa rahe hain
  runningGrandTotal += expenseList[i];
}
console.log("12. Running Grand Total (.reduce):", runningGrandTotal);
// EXPECTED OUTPUT: 930


// =========================================================================
// 8. SIDE-EFFECT ITERATIONS (Replicating .forEach())
// =========================================================================

const fruits = ["Apple", "Banana", "Mango"];
console.log("13. Stream Processing Output (.forEach):");

for (let i = 0; i < fruits.length; i++) {
  // Yeh loop koi value transform nahi karta, bas seedhe external side-effects (console logging) chalata hai
  console.log(` -> Element detected at positional index [${i}]: ${fruits[i]}`);
}
/*
  EXPECTED OUTPUT:
  -> Element detected at positional index [0]: Apple
  -> Element detected at positional index [1]: Banana
  -> Element detected at positional index [2]: Mango
*/


// =========================================================================
// 9. INDEX DETERMINATION LOOKUPS (Replicating .findIndex())
// =========================================================================

const genericScores = [45, 72, 98, 60];
let targetIndexResult = -1; // Default -1 (taaki match na hone par error state standard rahe)

for (let i = 0; i < genericScores.length; i++) {
  // Agar score 75 se bada ya equal hai, toh us index number ko save karke ruk jao
  if (genericScores[i] >= 75) {
    targetIndexResult = i;
    break; // Milte hi loop se exit!
  }
}
console.log("14. Target Index (.findIndex):", targetIndexResult);
// EXPECTED OUTPUT: 2


// =========================================================================
// 10. PRESENCE VERIFICATION VALIDATION (Replicating .includes())
// =========================================================================

const logisticsCart = ["Laptop", "Mouse", "Keyboard"];

/**
 * * logic: Pooray array par loop chalao, agar element strict match (===) ho gaya,
 * toh turant return 'true' kar do. Poora loop khatam hone par bhi na mile, toh 'false' bhej do.
 */
function evaluateInclusion(targetArray, lookupItem) {
  for (let i = 0; i < targetArray.length; i++) {
    if (targetArray[i] === lookupItem) {
      return true; // Match found! Exit execution immediately.
    }
  }
  return false; // Loop complete ho gaya par item kahi nahi mila.
}

console.log("15. Includes 'Trimmer'?:", evaluateInclusion(logisticsCart, "Trimmer")); // Expected: false
console.log("16. Includes 'Mouse'?:", evaluateInclusion(logisticsCart, "Mouse"));     // Expected: true
console.log("\n-------------------------------------------");