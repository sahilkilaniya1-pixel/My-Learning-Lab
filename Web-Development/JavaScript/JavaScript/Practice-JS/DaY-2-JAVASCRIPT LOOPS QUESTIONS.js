// =========================================================================
// JAVASCRIPT LOOPS (SUPER EASY HINGLISH GUIDE)
// =========================================================================

// -------------------------------------------------------------------------
// Q1. Ek hi message ko baar-baar print karne ke liye basic 'for' loop kaise chalayein?
// -------------------------------------------------------------------------
// Tarika: Pehle ek counter banao (let count = 1), fir limit set karo (count <= 5),
// aur har round ke baad counter ko 1 se badhao (count++).
for (let count = 1; count <= 5; count++) {
    console.log("sahil"); // Yeh message 5 baar print hoga
}
console.log("loop has ended!\n");


// -------------------------------------------------------------------------
// Q2. Loop ka use karke 1 se 5 tak ke saare numbers ko aapas mein kaise jodein (sum)?
// -------------------------------------------------------------------------
// Tarika: Pehle ek sum variable ko 0 set karo, fir loop ke andar 'i' ki ek-ek value usme add karte jao.
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i; // Har baar naya number sum mein judta jayega
}
console.log("sum =", sum); // Output: 15 (1+2+3+4+5)
console.log("\n");


// -------------------------------------------------------------------------
// Q3. Infinite Loop kya hota hai? Ek example dijiye.
// -------------------------------------------------------------------------
// Answer: Jab loop ke rukne ki condition (stopping condition) kabhi sach hi nahi hoti,
// toh loop bina ruke chalta hi chala jata hai. Isko infinite loop bolte hain.
// WARNING: Ise run mat karna, warna computer/browser crash ho jayega kyunki 'i' hamesha 0 se bada hi rahega!
/*
for (let i = 1; i >= 0; i++) {
    console.log("i =", i);
}
*/


// -------------------------------------------------------------------------
// Q4. 'while' loop kaise kaam karta hai? Isse 10 baar message kaise print karein?
// -------------------------------------------------------------------------
// Answer: Yeh loop chalne se PEHLE condition check karta hai. Agar condition sahi hai,
// toh andar ka code chalta hai aur hume andar hi counter ko badhana (iWhile++) padta hai.
let iWhile = 1;
while (iWhile <= 10) {
    console.log("javascript");
    iWhile++; // Agar yeh line bhool gaye toh infinite loop ban jayega!
}
console.log("\n");


// -------------------------------------------------------------------------
// Q5. 'do-while' aur 'while' loop mein kya farq hai? Isse 20 baar print kaise karein?
// -------------------------------------------------------------------------
// Answer: 'while' loop pehle check karta hai fir chalta hai, lekin 'do-while' loop
// PEHLE ek baar code chala deta hai aur uske BAAD check karta hai. 
// Matlab condition galat bhi ho, tab bhi yeh kam se kam ek baar zaroor chalega!
let iDo = 1;
do {
    console.log("sahil javascript");
    iDo++;
} while (iDo <= 20);
console.log("\n");


// -------------------------------------------------------------------------
// Q6. String ke ek-ek akshar (character) par ghoomne aur length nikalne ke liye 'for-of' loop
// -------------------------------------------------------------------------
// Answer: 'for-of' loop ka use karke hum string ke ek-ek letter ko seedhe nikal sakte hain.
// Hum saath mein ek 'size' counter rkhkar length bhi khud nikal sakte hain.
let str = "sahil";
let size = 0;
for (let char of str) {
    console.log("character =", char); // Har round mein ek-ek letter print hoga
    size++; // Har letter milne par size ko 1 badha diya
}
console.log("string size =", size); // Output: 5
console.log("\n");


// -------------------------------------------------------------------------
// Q7. Object ke andar ki saari properties (keys aur values) par kaise ghoomein?
// -------------------------------------------------------------------------
// Answer: Object ke andar ghoomne ke liye 'for-in' loop use hota hai.
// Yahan 'key' variable se property ka naam milega, aur student[key] se uski andar ki value.
let student = {
    name: "sahil",
    age: 20,
    cgpa: 7.9,
    isPass: true
};

for (let key in student) {
    console.log("key =", key, ", value =", student[key]);
}
console.log("\n");


// -------------------------------------------------------------------------
// Q8. 0 se 100 tak ke saare Even Numbers (jo 2 se divide ho jayein) print karein.
// -------------------------------------------------------------------------
// Answer: 0 se 100 tak ka loop chalaya aur modulus (%) operator se check kiya ki divide karne par 0 bach raha hai ya nahi.
for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log("even num =", num); // Agar remainder 0 bacha, toh number even hai
    }
}