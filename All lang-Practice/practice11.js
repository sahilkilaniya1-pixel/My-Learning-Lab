// for(let i=5; i>0; i--){
//   console.log(i);
// }
// for(let i=0; i<=5; i++){
//   console.log(i);
// }

// for(let i=1; i<=6; i++){
//   if(i==4){
//     break;
// }
//   else{
//     console.log(i);
//   }
// }

// for(let i=1; i<=6; i++){
//   if(i==3)
//     continue;
//   else
//     console.log(i);
// }

// let i =1;
// while(i<6){
//   console.log(i)
//   i++;
// }
//
// let i =5;
// while(i<5){
//     console.log("Inside the loop");
//     if(i==3){
//         i++;
//         continue;
//     }
//     else
//         console.log(i)
//     i++;
// }
// let i =1;
// do {
//     console.log("Sahil");
//     i++;
// }while(1<=10);
// let count = 10;

// do {
//   console.log("Count is: " + count);
//   count++;
// } while (count < 5);

// Square Star pattern::
// let n = 5;
// for(let i=1; i<=n; i++){
//     let row ="";
//     for(let j=1; j<=n; j++){
//         row += "*";
//     }
//     console.log(row);
// }

// Right Angled Triangle:
// let n = 5;
// for(let i=1; i<=n; i++){
//     let row ="";
//     for(let j=1; j<=i; j++){
//         row+="*";
//     }
//     console.log(row);
// }

// Inverted Right Triangle:
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i + 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// left Pascal Triangle(Right Aligned Triangle);

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let row = "";
//   for (let s = 1; s <= n - i; s++) {
//     row += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// Inverted Left Triangle:
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let s = 1; s <= n - i; s++) {
//     row += " ";
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let s = 1; s <= i - 1; s++) {
//     row += " ";
//   }
//   for (let j = 1; j <= 2 * (n - i + 1) - 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let s = 1; s <= n - i; s++) {
//     row += " ";
//     for (let j = 1; j <= 2 * i - 1; j++) {
//       row += "*";
//     }
//   }
//   console.log(row);
// }

// for(let i=n-1; i>=i; i--){
//     let row ="";
//     for(let s =i; s<=n-i; s++){
//         row+=" ";
//     for (let j=1; j<= 2*i-1; j++){
//         row+="*";
//     }
//     }
//     console.log(row);
// }

// let n = 5;

// PART 1: Upper Pyramid (Lines 1 to 5)
// for (let i = 1; i <= n; i++) {
//   let row = "";

//   // 1. Spaces (1 se n - i tak)
//   for (let s = 1; s <= n - i; s++) {
//     row += " ";
//   }

//   // 2. Stars (1 se 2 * i - 1 tak)
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// // PART 2: Lower Pyramid (Lines 1 to 4)
// for (let i = 1; i <= n - 1; i++) {
//   let row = "";

//   // 1. Spaces: Har line mein badhenge (1 se i tak)
//   for (let s = 1; s <= i; s++) {
//     row += " ";
//   }

//   // 2. Stars: Har line mein ghatenge [2 * (n - i) - 1]
//   for (let j = 1; j <= 2 * (n - i) - 1; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// let n =5;
// for(let i=1; i<=n; i++){
//   console.log("*".repeat(i));
// }
// for(let i=n-1; i>=1; i--){
//   console.log("*".repeat(i));
// }
// let n =5;
// for(let i=1; i<=n; i++){
//   let row ="";
//   for(let j=1; j<=n; j++){
//     if(i===1 || i===n || j===1|| j===n){
//       row +="*";
//     } else{
//       row+=" ";
//     }
//   }
//   console.log(row);
// }

// let n =5;
// for(let i=1; i<=n; i++){
//   let row = "";
//   for(let j=1; j<=i; j++){
//     row +="*";
//   }
//   console.log(row);
// }

// let n =5;
// for(let i=1; i<=n; i++){
//   let row = "";
//   for(let j=1; j<=n-i+1; j++){
//     row +="*";
//   }
//   console.log(row);
// }

// let n =5;
// for(let i=1; i<=n; i++){
//   let row = "";
//   for(let j=1; j<=5; j++){
//     row +="*";
//   }
//   console.log(row);
// }

// let n=5;
// for(let i=1; i<=n; i++){
//   let row ="";
//   for(let j=1; j<=i; j++){
//     row +=i+" ";
//   }
//   console.log(row);
// }

// let n=5;
// for(let i=1; i<=n; i++){
//   let row = "";
//   for(let j=1; j<=i; j++){
//     row +="*";
//   }
//   console.log(row);
// }

// Numberic pattern:
// let n =5;
// for(let i=1; i<=n; i++){
//   let row = "";

//   for(let j=1; j<=i; j++){
//     row += j+" ";
//   }
//   console.log(row);
// }

// Numberic Pattern B:
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += i + " ";
//   }
//   console.log(row);
// }



// Alphabet Varient (A, AB, ABC)::
