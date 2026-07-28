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
let age = Number(prompt("Enter your age:"));
let city = prompt("Enter your city:");

if (age >= 18&& age< 60 ) {
    console.log("Eligible for vote in " + city);
} else {
    console.log("Not eligible for vote");
}