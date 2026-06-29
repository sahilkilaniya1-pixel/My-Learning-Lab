// =========================================================================
// JAVASCRIPT ARRAYS & STRINGS 
// =========================================================================

// -------------------------------------------------------------------------
// Q1. How do you calculate the Sum of all elements in an Array?
// -------------------------------------------------------------------------
let marksForSum = [85, 97, 44, 37, 76, 60];
let totalSum = 0;

for (let val of marksForSum) {
    totalSum += val;
}
console.log("Q1. Total Sum of Marks =", totalSum); // Output: 399
console.log("\n");


// -------------------------------------------------------------------------
// Q2. How do you find the Average Marks of a class from an Array?
// -------------------------------------------------------------------------
let marksForAvg = [85, 97, 44, 37, 76, 60];
let classSum = 0;

for (let val of marksForAvg) {
    classSum += val;
}
let avg = classSum / marksForAvg.length;
console.log(`Q2. Avg marks of the class = ${avg}`); // Output: 66.5
console.log("\n");


// -------------------------------------------------------------------------
// Q3. Apply a 10% discount/offer on every item price in an Array.
// -------------------------------------------------------------------------
let prices = [250, 645, 300, 900, 50];

// Fixed: Changed 'i < prices.length - 1' to 'i < prices.length' so the last item is not skipped.
for (let i = 0; i < prices.length; i++) {
    let offer = prices[i] / 10;
    prices[i] -= offer;
}
console.log("Q3. Prices after 10% Offer:", prices);
// Output: [225, 580.5, 270, 810, 45]
console.log("\n");


// -------------------------------------------------------------------------
// Q4. Demonstrate Array basic methods: push(), pop(), and toString().
// -------------------------------------------------------------------------
let fooditems = ["potato", "apple", "lichi", "tomato"];

// push(): Adds elements to the end
fooditems.push("chips", "mango");
console.log("Q4. After Push:", fooditems);

// pop(): Removes the last element
fooditems.pop();
console.log("Q4. After Pop:", fooditems);

// toString(): Converts array to a comma-separated string
// Note: toString() returns a new string, it does not change the original array.
let foodString = fooditems.toString();
console.log("Q4. After toString():", foodString);
console.log("\n");


// -------------------------------------------------------------------------
// Q5. How do you merge or concatenate two different Arrays?
// -------------------------------------------------------------------------
let heroes = ["thor", "spiderman", "ironman"];
let dc_heroes = ["superman", "batman"];

let newheroes = heroes.concat(dc_heroes);
console.log("Q5. Concatenated Heroes:", newheroes);
// Output: ["thor", "spiderman", "ironman", "superman", "batman"]
console.log("\n");


// -------------------------------------------------------------------------
// Q6. How do you modify or replace elements at a specific index?
// -------------------------------------------------------------------------
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];

// Fixed: 'slice' does not modify original array. To replace/insert, we use 'splice(index, deleteCount, element)'.
// This replaces 1 element at index 2 ("uber") with "google".
companies.splice(2, 1, "google");
console.log("Q6. Companies after Splice:", companies);
console.log("\n");


// -------------------------------------------------------------------------
// Q7. Write a function to find the Index of a Target element (Linear Search).
// -------------------------------------------------------------------------
// Fixed: Changed 'i < arr.length - 1' to 'i < arr.length' to check the last element as well.
const findElementIndx = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Returns the index if found
        }
    }
    return -1; // Returns -1 if not found
};

const myNumbers = [10, 20, 30, 40, 50];
console.log("Q7. Index of 30:", findElementIndx(myNumbers, 30)); // Output: 2
console.log("Q7. Index of 40:", findElementIndx(myNumbers, 40)); // Output: 3
console.log("\n");


// -------------------------------------------------------------------------
// Q8. How do you filter and extract Even Numbers from an Array into a new Array?
// -------------------------------------------------------------------------
let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

for (let i = 0; i < numbersList.length; i++) {
    if (numbersList[i] % 2 === 0) {
        evenNumbers.push(numbersList[i]);
    }
}
console.log("Q8. Even numbers (using loop):", evenNumbers);
// Output: [2, 4, 6, 8, 10]
console.log("\n");


// -------------------------------------------------------------------------
// Q9. How do you reverse a String using a decrementing 'for' loop?
// -------------------------------------------------------------------------
const reverseWord = (word) => {
    let newWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        newWord += word[i];
    }
    return newWord;
};

console.log("Q9. Original: 'abc'   | Reversed:", reverseWord("abc"));   // Output: cba
console.log("Q9. Original: 'sahil' | Reversed:", reverseWord("sahil")); // Output: lihas