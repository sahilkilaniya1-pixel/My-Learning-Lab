// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= 1; j++) {
//     row += " ";
//   }
//   for (let s = 1; s <= 1; s++) {
//     row += "*";
//   }
//   console.log(row);

// }
// let n = prompt("input");
// for(let i = 1;i<n+1;n--){
//     if (i == 1  && i==n){
//         console.log('+');
//     }
// }
// let age = 18 ;
// let city  = "Rohtak";

// Corrected Code
// Input lene ke liye prompt
// let age = 18;
// let city = rohtak;
// let age = Number(prompt("Enter your age:"));
// let city = prompt("Enter the city:");
// if (age >= 18 && age < 60)
//     if (city === "rohtak") {
//         console.log("Eligible for vote in " + city);
//     } else {
//         console.error("Voting is only allowed for residents of Rohtak!");
//     }
// else{
//     console.log("Not Eligible for vote due to age criteria.");
// }


// let x = 50;
// if(x% 2==0){
//     console.log("Even");
// } else{
//     console.log("Odd");
// }


// let age = 25;
// if(age >=18){
//     console.log("Adult")
// } else{
//     console.loh("Not an adult")
// };


// const x =10;
// if(x>0){
//     console.log("Positive");
// } else if(x<0){
//     console.log("Negative.");
// } else {
//     console.log("Zero");
// // };

// const marks = 85;
// let branch;

// switch (true){
//     case marks >=90:
//         branch = "Computer science engineering";
//         break;
//     case marks >=80:
//         branch = "Mechnical engineering";
//         break;
//     case marks >=70:
//         branch = "Chemical engineering";
//         break;
//     case marks >=60:
//         branch = "Electronics and communication";
//         break;
//     case marks >=50:
//         branch = "Civil engineering";
//         break;
//     default:
//         branch = "Bio technology"
//         break;
// }
// console.log(`student branch name is: ${branch}`);

// let score = 0;

// if (score) {
//   console.log("Score saved!");
// } else {
//   console.log("No score found!");
// }


// let userCartCount = 0;

// Test A: Using Logical OR
// if (userCartCount || 5) {
//   console.log("A:", userCartCount || 5);
// }

// // Test B: Using Nullish Coalescing
// if (userCartCount ?? 5) {
//   console.log("B:", userCartCount ?? 5);
// }