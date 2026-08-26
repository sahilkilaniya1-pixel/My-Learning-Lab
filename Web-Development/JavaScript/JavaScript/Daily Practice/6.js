// // function printTriangle(N) {
// //   for (let i = 1; i <= N; i++) {       // Rule 1: Row tracker
// //     let row = "";                      // Rule 2: Khali Dibba

//     for (let j = 1; j <= i; j++) {     // Rule 3: Column tracker
//       row = row + "* ";                // Dibbe mein star daalo
//     }

//     console.log(row);                  // Rule 4: Row print karo
//   }
// }
// printTriangle(5);


// function printTriangle(n) {
//     for(let i=1; i<=n; i++){
//         let row ="";

//         for(let j=1; j<=i; j++){
//             row+="*";
//         }
//         console.log(row);
//     }
// }
// printTriangle(4);


// function printArray(a)
// {
//      var len = a.length, i = 0;
//      if (len == 0)
//         console.log("Empty Array");
//      else
//      {
// do-while loop in javascript
//          do
//          {
//              console.log(a[i]);
//          } while (++i < len);
//      }
// }

// for (let i = 1; i <= 3; i++) {
//   let row = "";
//   for (let j = 1; j <= 4; j++) {
//     row += j + " ";
//   }
//   console.log(row);
// }

// function printPaddedTriangle(N) {
//     for (let i = 1; i <= N; i++) {
//         let row = "";
//         for (let s = 1; s <= (N - i); s++) {
//             row = row + " ";
//         }
//         for (let j = 1; j <= i; j++) {
//             row = row + "*";
//         }
//         console.log(row);
//     }
// }
// printPaddedTriangle(4);


// function printSolidSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= n; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }
// printSolidSquare(5);

// function printPaddedTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let s = 1; s <= (n - i); s++) {
//             row += " ";
//         }
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }

//         console.log(row);
//     }
// }
// printPaddedTriangle(4);

// function SolidSquare(n) {
// for (let i = 1; i <= n; i++) {
// let row = "";
// for (let j = 1; j <= n; j++) {
// row += "*";
// }
// console.log(row);
// }
// }
// SolidSquare(5);

// function printPattern(n){
// for(let i=1; i<=n; i++){
// let row = "";
// for(let s=1; s<=(n-i); s++){
// row+=" ";
// }
// for(let j=1; j<=i; j++){
// row+=j+" ";
// }
// console.log(row);
// }

// }
// printPattern(5);


// function  LeftParallelogram(n){
//     for(let i=1; i<=n; i++){
//         let row = "";
//         for(let s=1; s<=(n-i+1); s++){
//             row+=" ";
//         }
//         for(let j=1;j<=n; j++){
//             row+="*";
//         }
//         console.log(row);
//     }
// }
//  LeftParallelogram(5);



// function RightParallelogram(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let s = 1; s <= (i - 1); s++) {
//             row += " ";
//         }
//         for (let j = 1; j <= n; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }
// RightParallelogram(5);


// function WideSpaceTriangle(n) {
//   for (let i = 1; i <= n; i++) {
// let row = "";
// for (let s = 1; s <= (n - i); s++) {
//   row += "  ";
// }
// for (let j = 1; j <= i; j++) {
//   row += "* ";
// }
//     console.log(row);
//   }
// }
// WideSpaceTriangle(3);