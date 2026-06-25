// BASIC=== QUESTIONS

// What will this code print?
var x = 10;
if (true) {
    var x = 20;
    let y = 30;
}
console.log(x);    //output :: 20
console.log(y);   //Output :: ReferenceError




// What is printed when score = 55?
let score = 90;
if (score >= 90) {
    console.log("A");
}
else if (score >= 75) {
    console.log("B");
}
else if (score >= 50) {
    console.log("C");
}
else { console.log("F"); }


// Write a nested if-else for these age categories:
let age = 65;
if (age < 13) {
    console.log("child")
} else {
    if (age < 18) {
        console.log("teenager");
    } else {
        if (age < 60) {
            console.log("adult");
        } else {
            console.log("senior");
        }
    }
}


// What is the value of result?
let num = 8;
let result = (num % 2 === 0) ? "even" : "odd";
console.log(result); // Output : even



// Rewrite this as a single ternary expression stored in a variable called access:
let loggedIn = true;
let access = loggedIn ? "welcome!" : "please log in";
console.log(access);



// What does this loop print? 
let i = 1;
while (i <= 5) {
    if (i % 2 !== 0) { console.log(i); }
    i++;
}  //Output::1,3,5




// Write a for loop that prints numbers from 10 down to 1. 
for (let i = 10; i >= 1; i--) {
    console.log(i);
}  //10,9,8,7,6,5,4,3,2,1