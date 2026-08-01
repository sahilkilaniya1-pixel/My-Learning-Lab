/**
 * 🚀 THE ULTIMATE JAVASCRIPT ARRAY METHODS GUIDE (HINGLISH VERSION)
 * Is file mein assignments ke solutions ke sath-sath advanced array concepts
 * (Mutability, Chaining, Big-O, Sparse Arrays, Array-Like Objects) ko
 * bilkul saral aur asaan Hinglish mein samjhaya gaya hai.
 * 
 * GitHub par upload karne aur interview preparation ke liye ekdum perfect sheet!
 */

// =========================================================================
// ASSIGNMENT SOLUTIONS
// =========================================================================

console.log("=== RUNNING ASSIGNMENT SOLUTIONS ===\n");

// --- QUESTION 1: Array Operations ---
function questionOne() {
    console.log("--- Question 1 ---");
    let a = [2, 4, 6, 2, 0, 56, 32, 65, 78, 65, 78, 95];

    // 1. Sort in increasing and decreasing order
    // Original array ko mutation (badlaav) se bachane ke liye humne spread operator [...a] ka use kiya hai.
    let increasing = [...a].sort((x, y) => x - y); // (x - y) yaani chote se bada (Ascending)
    let decreasing = [...a].sort((x, y) => y - x); // (y - x) yaani bade se chota (Descending)
    console.log("Increasing:", increasing);
    console.log("Decreasing:", decreasing);

    // 2. Find the product (multiply) of the two biggest numbers
    let sortedDesc = [...a].sort((x, y) => y - x);
    let multiplyTwoBiggest = sortedDesc[0] * sortedDesc[1]; // Descending array ke pehle do elements sabse bade honge
    console.log("Product of 2 Biggest:", multiplyTwoBiggest);

    // 3. Find the product of the smallest and biggest number
    let sortedInc = [...a].sort((x, y) => x - y);
    let multiplySmallestBiggest = sortedInc[0] * sortedInc[sortedInc.length - 1]; // Pehla (sabse chota) * Aakhri (sabse bada)
    console.log("Product of Extremes:", multiplySmallestBiggest);
    console.log("\n");
}
questionOne();


// --- QUESTION 2: Type Conversion ---
function questionTwo() {
    console.log("--- Question 2 ---");
    // 1. Convert array into a string
    let arr = [2, 4, 5, 3, 5, 3, 2, 5, "a", "b"];
    let arrayToString = arr.join(","); // Saare elements ko comma (,) se jodkar single string bana dega
    console.log("Array to String:", arrayToString);

    // 2. Convert string into an array
    let str = "Aayush";
    let stringToArray = str.split(""); // Har character ko alag-alag karke array ka element bana dega
    console.log("String to Array:", stringToArray);
    console.log("\n");
}
questionTwo();


// --- QUESTION 3: Length of Names (Mapping) ---
function questionThree() {
    console.log("--- Question 3 ---");
    let names = ["Aayush", "Sahil", "Akshya"];
    
    // .map() loop chala kar har element ko transform karta hai aur ek brand new array banakar deta hai
    let lengths = names.map(name => name.length); 
    console.log("Lengths of Names:", lengths);
    console.log("\n");
}
questionThree();


// --- QUESTION 4: Sorting Objects by Properties ---
function questionFour() {
    console.log("--- Question 4 ---");
    const students = [
        { name: "Aayush", marks: 99 }, { name: "Akshay", marks: 80 },
        { name: "Sahil", marks: 50 },  { name: "Neha", marks: 95 },
        { name: "Rohan", marks: 72 },  { name: "Priya", marks: 88 },
        { name: "Amit", marks: 64 },   { name: "Sneha", marks: 91 },
        { name: "Vikram", marks: 45 }, { name: "Tanvi", marks: 83 }
    ];

    // Objects ko sort karne ke liye hum comparator function ke andar unki inner properties (marks) ko target karte hain.
    students.sort((x, y) => x.marks - y.marks); // Sabse kam marks se sabse zyada marks (Ascending order)
    console.log("Sorted Students:", students);
    console.log("\n");
}
questionFour();


// --- QUESTION 5: Advanced User Array Lookups ---
function questionFive() {
    console.log("--- Question 5 ---");
    const users = [
        { name: "John", age: 17, isActive: true },
        { name: "Jane", age: 22, isActive: false },
        { name: "Bob", age: 19, isActive: true },
        { name: "Alice", age: 25, isActive: true }
    ];

    // 1. Find the first user who is active and over the age of 18
    // .find() pure array mein se dhoondhega aur pehla matching element milte hi wahi ruk jayega (Short-circuit!)
    let activeAdult = users.find(user => user.isActive === true && user.age > 18);
    console.log("Active Adult found:", activeAdult);

    // 2. Check if every user in the list is active
    // .every() tabhi true dega jab sab ke sab users active (isActive === true) honge
    let isAllActive = users.every(user => user.isActive === true);
    console.log("Are all users active?:", isAllActive);

    // 3. Check if at least one user is under the age of 18
    // .some() check karta hai ki kya kam-se-kam ek bhi banda minor (age < 18) hai
    let hasMinor = users.some(user => user.age < 18);
    console.log("Does the list have any minor?:", hasMinor);
    console.log("\n");
}
questionFive();


// =========================================================================
// ADVANCED MASTERCLASS (PRO DEVELOPER CORE CONCEPTS)
// =========================================================================

console.log("=== RUNNING ADVANCED CORE CONCEPTS ===\n");

// --- 1. MUTABILITY VS IMMUTABILITY ---
// Mutable methods original data structure ke memory address ko badal dete hain.
let originalArray = ["Apple", "Banana"];
originalArray.push("Mango"); // Direct original array mein change kar diya (Mutation)
console.log("Mutated Array:", originalArray);

// Immutable methods original data ko bina chhede, background mein ek fresh copy generate karte hain.
let numericArray = [1, 2, 3];
let newArrayCopy = numericArray.map(num => num * 10); // original array [1, 2, 3] surakshit hai!
console.log("Original Array (Intact):", numericArray);
console.log("New Copy (Transformed):", newArrayCopy);
console.log("\n");


// --- 2. METHOD CHAINING ---
// Jab hum ek se zyada array operations ko ek line se link karte hain taaki beech mein
// faltu ke temporary variables na banane padein. Isme ek loop ka output doosre ka input banta hai.
const dashboardData = [
    { name: "John", isActive: true, score: 80 },
    { name: "Jane", isActive: false, score: 90 },
    { name: "Bob", isActive: true, score: 70 }
];

let finalScoreSum = dashboardData
    .filter(item => item.isActive === true)    // Sabse pehle inactive users ko bahar pheka
    .map(item => item.score)                   // Bache huye active logon ke scores nikale -> [80, 70]
    .reduce((accum, curr) => accum + curr, 0); // Un saare scores ko aapas mein jodh diya -> 150

console.log("Chained Total Score Sum:", finalScoreSum);
console.log("\n");


// --- 3. TIME COMPLEXITY (BIG O PERFORMANCE) ---
console.log("--- Performance Insights (Big-O) ---");
console.log(".push() / .pop() runs in O(1) - Superfast! Kyunki isme array ke end mein change hota hai, kisi element ko aage-piche nahi khiskana padta.");
console.log(".unshift() / .shift() runs in O(n) - Slow! Kyunki pehle position par naya element aane se baaki saare elements ko naye indexes par shift hona padta hai.");
console.log(".find() / .filter() runs in O(n) - Linear scan. Ek-ek karke element check karne padte hain jab tak match na mile.");
console.log("\n");


// --- 4. SPARSE ARRAYS (THE INTERVIEW TRAP) ---
// Sparse Arrays yaani wo arrays jisme beech-beech ke index slots khaali (empty/holes) hote hain.
let sparseArr = [1, , , 4]; // Iska length 4 hai, par index 1 aur 2 par kuch nahi hai
console.log("Sparse Array Length:", sparseArr.length);

console.log("Iterating through Sparse Array:");
sparseArr.forEach((element, index) => {
    // 💡 INTERVIEW TRAP: JS ke built-in iteration methods (forEach, map, etc.) empty slots ko skip kar dete hain!
    console.log(`Index ${index}: ${element}`);
});
console.log("\n");


// --- 5. ARRAY-LIKE OBJECTS ---
// Aise objects jinke paas numerical indices aur 'length' property hoti hai, par array ke methods (.map, .filter) nahi hote.
function handleArrayLike() {
    // Standard functions ke andar milne wala 'arguments' object ek Array-like object hai.
    console.log("Is 'arguments' a true array?:", Array.isArray(arguments));
    
    // Isko modern dynamic array banane ke liye hum Array.from() ka use karte hain.
    let trueArray = Array.from(arguments);
    console.log("Is converted array a true array?:", Array.isArray(trueArray));
    
    // Conversion ke baad ab aap is par bindas array methods chala sakte ho!
    let calculated = trueArray.map(v => v * 2);
    console.log("Mapped Arguments Array:", calculated);
}
handleArrayLike(10, 20, 30);

console.log("\n=== ALL EXERCISES EXECUTED SUCCESSFULLY ===");