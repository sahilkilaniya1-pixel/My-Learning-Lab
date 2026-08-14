// Level 1 (Basic): Character Frequency Counter
/*
Problem: Ek string given hain. har character kitni baar repeat hua hain, uska object bana kar return karo.

Approch: Loop chalao, agar key pehle se object mein hai toh +1 karo, nahi 1 assign karo.
*/
function getCharacterFrequency(str) {
    const count = {};
    for (let char of str) {
        if (char === ' ')
            continue;

        count[char] = (count[char] || 0) + 1;
    }
    return count;
}
console.log(getCharacterFrequency("Javascript"));

// Level 2(intermediate): grouping Array of Objects
/*
Problem: Ek Students ka Array diya hai. unhe unke grade ke basic par group karke naya object banao.


Approach: .reduce() ya for...of loop ka use karke group-by logic create karenge.
*/
const students = [
    { name: "Rahul", grade: "A" },
    { name: "Priya", grade: "B" },
    { name: "Amit", grade: "A" },
    { name: "Neha", grade: "C" }
];

function groupByGrade(arr) {
    // Step 1: Ek khaali result object banao
    let result = {};

    // Step 2: Normal for-loop chalayein
    for (let i = 0; i < arr.length; i++) {
        let student = arr[i];
        let grade = student.grade;
        let name = student.name;
        if (result[grade] === undefined) {
            result[grade] = [name];
        } else {
            result[grade].push(name);
        }
    }
    return result;
}

console.log(groupByGrade(students));


// Level 3 (Advanced): Deep Nested Object Value Calculator
/*
Problem: Ek nested object diya gaya hai jisme items ki prices kisi bhi level par ho sakti hain. Sabhi numerical prices ka total sum calculate karo.

Approach: Dynamic Recursion + Loop (for...in) ka combination.
*/
const inventory = {
    electronics: {
        laptop: {price:50000, tax:5000},
        mobile: {price:20000}
},
    groceries: {
        frutis: {price:500},
        vegetables: {price:300}
    },
    deliveryFee: 100
};
function calculateTotalSum(obj){
    let total= 0;
    for(let key in obj){
        const value = obj[key];

        if(typeof value === 'number'){
            total += value;
        