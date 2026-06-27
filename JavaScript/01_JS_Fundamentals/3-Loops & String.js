// // print 1 to 10 loop
// Note: Changed from 5 to 10 based on the loop condition below

for (let count = 1; count <= 10; count++) {
    console.log("Sahil");  // Executes 10 times
}
console.log("Loop has ended");

// // =================================================
// // calculate sum of 1 to 100
let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log("sum", sum);
console.log("loop has ended");


for (let i = 1; i <= 5; i++) {
    console.log("i =", i);
}

// // ===========================================
//  infinite loop - a loop that never ends
// print numbers starting from 1 continuously

// WARNING: This will crash your browser or console because i keeps increasing and remains >= 0
/*
for (let i = 1; i >= 0; i++) {
    console.log("i=", i);
}
*/


// // ==================================================
// // while loop
let whileCount = 1; // Created variable (renamed to avoid conflict)

while (whileCount <= 5) { // Applied the correct condition
    console.log("Work is in progress, count =", whileCount);
    whileCount++; // Incrementing the count is necessary, otherwise the loop will never stop
}

let whileI = 1; // Renamed to avoid identifier conflict
while (whileI <= 5) {
    // console.log("i", whileI);
    console.log("Sahil");
    whileI++;
}

// // ===============================================
//  do-while loop
// Syntax:
// do {
//     // do some work
// } while(condition);

let j = 1; // Kept 1 so the loop can execute properly

do {
    console.log("Apna college");
    j++; // Used 'j' instead of 'i'
} while (j <= 10); // Used 'j' instead of 'i'

let doWhileI = 1; // Started from 1 to loop from 1 to 5

do {
    console.log("i =", doWhileI); // Fixed variable name from 's' to 'doWhileI'
    doWhileI++;
} while (doWhileI <= 5);


// // ==================================================
// // For-of loop (Used for Strings and Arrays)

// // Syntax:
// // for(let val of strVar){
// //     // do some work
// // }

let nameStr = "sahil";   // iterator -> characters
let size = 0;
for (let char of nameStr) {
    console.log("value =", char);
    size++;
}

console.log("string size = ", size); // 5



// // for-in loop (Used for Objects to loop through keys)

let student = {
    name: "sahil",
    age: 23,
    cgpa: 7.5,
    isPass: true,
};
for (let key in student) {
    console.log("key =", key, ", value =", student[key]);
}

for (let num = 0; num <= 5; num++) {
    console.log("num=", num);
}

// Loop to print even numbers
for (let num = 0; num <= 10; num++) {
    if (num % 2 == 0) {
        // even number
        console.log("even num=", num);
    }
}


let gameNum = 25;
let userNum = prompt("Guess the game number: ");
// Loop runs as long as the user's guess is wrong
while (userNum != gameNum) {
    userNum = prompt("You entered the wrong number. Guess again:");
}
console.log("Congratulations, you entered the right number!");


// // ======================================================
// // Strings in JS
// Strings are inmuteable but 


// // create string --->

let sampleStr = "sahil"; // First time declaration (Correct)
sampleStr = "new name";  // Do not use 'let' again when reassigning a value 
console.log(sampleStr[2]); // Accessing character at index 2 ('w')

// string length --->
// sampleStr.length


// string indices --->
// sampleStr[0], sampleStr[1], sampleStr[2]



// ==============================================
// Template Literal
// A way to have embedded expressions in strings
//   `this is a Template literal`

// String interpolation
// To create strings by substituting placeholders with values
// `string text ${expression} string text`
let obj = {
    item: "pen", // Fixed key name from 'items' to match the template below
    price: "10"
}
let output = `the cost of ${obj.item} is ${obj.price} rupees`; // Fixed keys inside the template
console.log(output);
console.log("the cost of", obj.item, "is", obj.price, "rupees");

// =================================================
let escapeStr = "sahil\nkilaniya"; // \n adds a new line but counts as 1 character
let escapeStr = "sahil\tilaniya"; // \t make a sapce btw to name
console.log(escapeStr.length); // Outputs 14

// ==================================================
// These are built-in functions to manipulate a string 
// Note: Strings are immutable in JS, these methods return a new string.
// str.toUpperCase()
// str.toLowerCase()
// str.trim() // removes leading and trailing whitespaces


let upperCaseStr = "sahil kilaniya";
// 'sahil kilaniya'
// upperCaseStr.toUpperCase() -> returns 'SAHIL KILANIYA'
upperCaseStr = upperCaseStr.toUpperCase(); // Reassigned to store changes

// =================================
let originalStr = "sahil kilaniya";
// 'sahil kilaniya'
// originalStr.toUpperCase() -> returns 'SAHIL KILANIYA'
let newStr = originalStr.toUpperCase(); // Storing result in a new variable
console.log(originalStr); // Prints original: "sahil kilaniya"
console.log(newStr);      // Prints modified: "SAHIL KILANIYA"


// ================================
let str = "   sahil             "
console.log(str.trim());   //Output:: "sahil"




// ====================================================
// str.slice(start, end?) //return part of string
let str = "Hello";
console.log(str.slice(2));

// str1.concat(str2) // join str2 with str1
let str1 = "sahil";
let str2 = "xyz";

let res = str1.concat(str2);
console.log(res); // Output sahil xyz

// str.replace(searchVal,newVal)
let str = "hello";
console.log(str.replace("h","y")); // Output: Yello
console.log(str.replaceAll("l","y")); // Replace all matching value

// str.charAt(idx)
let myName = "sahil";
console.log(myName.charAt(0));


// Questions:
let fullname = prompt("enter  your fullname without spaces");
let username = "@"+ fullname + fullname.length
console.log(username);
