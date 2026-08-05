// =========================================================================
// JAVASCRIPT ARRAYS & STRINGS (EASY REFERENCE GUIDE)
// =========================================================================

// -------------------------------------------------------------------------
// Q1. Array ke saare elements ka Sum (Total) kaise nikalte hain?
// -------------------------------------------------------------------------
let marksForSum = [85, 97, 44, 37, 76, 60];
let totalSum = 0;

// 'of' loop lagaya taaki array ki ek-ek value direct 'val' variable mein milti rahe
for (let val of marksForSum) {
    totalSum += val; // Saari values ko totalSum mein jodte (add) gaye
}
console.log("Q1. Total Sum of Marks =", totalSum); // Output: 399
console.log("\n");


// -------------------------------------------------------------------------
// Q2. Array se average marks kaise nikalte hain?
// -------------------------------------------------------------------------
let marksForAvg = [85, 97, 44, 37, 76, 60];
let classSum = 0;

// Pehle saare marks ka total sum nikalenge
for (let val of marksForAvg) {
    classSum += val;
}
// Fir total sum ko array ki length (total items) se divide kar denge
let avg = classSum / marksForAvg.length;
console.log(`Q2. Avg marks of the class = ${avg}`); // Output: 66.5
console.log("\n");


// -------------------------------------------------------------------------
// Q3. Array ke har item par 10% discount kaise apply karein?
// -------------------------------------------------------------------------
let prices = [250, 645, 300, 900, 50];

// Loop ko pure end tak chalayenge (i < prices.length) taaki aakhiri item miss na ho
for (let i = 0; i < prices.length; i++) {
    let offer = prices[i] / 10; // Har price ka 10% nikala
    prices[i] -= offer;         // Us 10% ko original price se minus (ghata) diya
}
console.log("Q3. Prices after 10% Offer:", prices);
// Output: [225, 580.5, 270, 810, 45]
console.log("\n");


// -------------------------------------------------------------------------
// Q4. Array ke basic methods: push(), pop(), aur toString() kaise chalte hain?
// -------------------------------------------------------------------------
let fooditems = ["potato", "apple", "lichi", "tomato"];

// push(): Array ke aakhiri (end) mein naye elements ghusane ke liye
fooditems.push("chips", "mango");
console.log("Q4. After Push:", fooditems);

// pop(): Sabse aakhiri wala element bahar nikalne (delete karne) ke liye
fooditems.pop();
console.log("Q4. After Pop:", fooditems);

// toString(): Pure array ko commas wale single string mein badal deta hai
// Yaad rakhein: isse original array par koi asar nahi padta, ek naya string banta hai
let foodString = fooditems.toString();
console.log("Q4. After toString():", foodString);
console.log("\n");


// -------------------------------------------------------------------------
// Q5. Do alag-alag Arrays ko aapas mein kaise jodein (merge karein)?
// -------------------------------------------------------------------------
let heroes = ["thor", "spiderman", "ironman"];
let dc_heroes = ["superman", "batman"];

// .concat() dono arrays ka saaman jodkar ek naya fresh array bana deta hai
let newheroes = heroes.concat(dc_heroes);
console.log("Q5. Concatenated Heroes:", newheroes);
// Output: ["thor", "spiderman", "ironman", "superman", "batman"]
console.log("\n");


// -------------------------------------------------------------------------
// Q6. Kisi specific index par element ko badalna (replace karna) ho toh?
// -------------------------------------------------------------------------
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];

// Note: slice use nahi karenge kyunki woh original array change nahi karta.
// Kuch replace karne ke liye splice(index, kitne_items_hatane_hain, naya_saaman) use hota hai.
// Yahan index 2 se "uber" ko hataya aur uski jagah "google" fit kar diya.
companies.splice(2, 1, "google");
console.log("Q6. Companies after Splice:", companies);
console.log("\n");


// -------------------------------------------------------------------------
// Q7. Array mein se target element dhoondkar uska Index batane wala function
// -------------------------------------------------------------------------
const findElementIndx = (arr, target) => {
    // Loop ko bilkul aakhiri element tak chalaya (i < arr.length)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Target milte hi uski seat number (index) return kar do aur loop se bahar
        }
    }
    return -1; // Agar poora array dhoondh liya aur target nahi mila, toh -1 return kar do
};

const myNumbers = [10, 20, 30, 40, 50];
console.log("Q7. Index of 30:", findElementIndx(myNumbers, 30)); // Output: 2
console.log("Q7. Index of 40:", findElementIndx(myNumbers, 40)); // Output: 3
console.log("\n");


// -------------------------------------------------------------------------
// Q8. Array se sirf Even Numbers (2 se divide hone wale) filter karke alag kaise karein?
// -------------------------------------------------------------------------
let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

// Har number par check lagayenge
for (let i = 0; i < numbersList.length; i++) {
    // Agar number 2 se divide karne par 0 bacha (yaani even hai)
    if (numbersList[i] % 2 === 0) {
        evenNumbers.push(numbersList[i]); // Toh use apne naye 'evenNumbers' wale bag (array) mein daal lo
    }
}
console.log("Q8. Even numbers (using loop):", evenNumbers);
// Output: [2, 4, 6, 8, 10]
console.log("\n");


// -------------------------------------------------------------------------
// Q9. Ulte loop (decrementing loop) se String ko reverse kaise karein?
// -------------------------------------------------------------------------
const reverseWord = (word) => {
    let newWord = "";
    // Loop ko string ke aakhiri akshar (word.length - 1) se shuru kiya
    // aur peeche ki taraf le gaye (i >= 0; i--)
    for (let i = word.length - 1; i >= 0; i--) {
        newWord += word[i]; // Ek-ek ulta akshar jodte gaye
    }
    return newWord;
};

console.log("Q9. Original: 'abc'   | Reversed:", reverseWord("abc"));   // Output: cba
console.log("Q9. Original: 'sahil' | Reversed:", reverseWord("sahil")); // Output: lihas