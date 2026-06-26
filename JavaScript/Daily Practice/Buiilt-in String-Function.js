// Number of characters
let a = ["sahil"];
console.log(a[0].length)   //Output:: 5


// All characters uppercased
let b = "sahil"
console.log(b.toLocaleUpperCase()); // Output: SAHIL
// with map function use for multiple name
// let b = ["sahil", "golu"];
// let badaArray = b.map(naam => naam.toUpperCase());
// console.log(badaArray);


//  All characters lowercased
let c = "SAHIL"
console.log(c.toLocaleLowerCase());  //Output:: sahil


// Remove spaces from both ends
let digit = " Sahil  ";
console.log(digit.trimStart()); //Output:: "sahil
console.log(digit.trimEnd());   //Output:: "sahil"


// True if str is found inside
let message = "Welcome to JavaScript";
console.log(message.includes("script"));        //Output::false
console.log(message.includes("Script"));        //Output::True


// True if string starts with str
let word = "welcome to language practice";
console.log(word.startsWith("we"));         //Output:: true


// True if string ends with str
let word2 = "welcome to language practice";
console.log(word2.endsWith("ce"));          // Output:: true


// First occurrence index, or -1
let text = "abcabc";
console.log(text.indexOf("b"));         //Output: 1
console.log(text.indexOf("abc"));       //Output: 0
console.log(text.indexOf("b"));         //Output: 1

// Extract part of string by index
let users = ["sahil", "amit", "harshit", "rahul"];
console.log(users.slice(1, 3));  //Output:: [ 'amit', 'harshit' ]


// Split string into array
let sentence = "Welcome to JavaScript";
let words = sentence.split(" ");
console.log(words);  //Output::[ 'Welcome', 'to', 'JavaScript' ]


// Replace first match
let sent = ["sahil"];
let sentenc = sent[0].replace("l", "o");
console.log(sentenc);           //Output:sahio

//  Replace all matches
let PhoneNumber = "9876-543-210";
let cleanNumber = PhoneNumber.replaceAll("-", "");
console.log(cleanNumber);       //"9876543210"


// repeat(n) Repeat string n times "ha".repeat(3) // "hahaha
console.log("ha".repeat(3.9));  //Output::hahaha


// padStart(n, ch) Pad start to length n "5".padStart(3,"0") // "005"
let text2  ="7";
console.log(text2.padStart(4,"x")); //Output: xxx7

let hours = "9";
let minutes = "5";
let formattedTime = hours.padStart(2, "0") + ":" + minutes.padStart(2, "0");
console.log(formattedTime); // Output: "09:05"


// charAt(i) Character at index i "abc".charAt(0) // "a"
let text = "Hacker";
console.log(text.charAt(0)); // Output: "H"
console.log(text.charAt(3)); // Output: "k"

let text = "Hacker";
console.log(text[0]); // Output: "H"
console.log(text[3]); // Output: "k"