// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   for(let s=1; s<=n*2+1; s++){
//       row+="*";
//   }
//   console.log(row);
// }

// let row = 3;
// let coln = 7;
// for(let i=1; i<=3; i++){
//     let row ="";

//     for(let j=1; j<=7; j++){
//         row += "*";
//     }
//     console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     if (i == 1 || j == 1 || (i == 2 && j == 2) || (i == 4 && j == 4)) {
//       row += "*";
//     } else {
//       row += "";
//     }
//   }
//   console.log(row);
// }

// let  n = 5;
// for(let i=n; i>=1; i--){
//     let row ="";
//     for(let j=1; j<=i; j++){
//         row+="*";
//     }
//     console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i-1; j++) {
//     row += " ";
//   }
//   for(let s=1; s<=n-i+1; s++){
//     row+="*";
//   }
//   console.log(row);
// }

// let n = 5;
// for(let i=1; i<=n; i++){
//     let row ="";
//     for(let j=1; j<=n-i; j++){
//         row+=" ";
//     }
//     for(let s=1; s<=i; s++){
//         row+="*";
//     }
//     console.log(row);
// }

// let n =5;
// for(let i=1; i<=n; i++){
//     let row="";
//     for(let j=1; j<=i; j++){
//         row+=" ";
//     }
//     for(let s=1; s<=n; s++){
//         row+="*";
//     }
//     console.log(row);
// }

// let n =5;
// for(let i=1; i<=n; i++){
//     let row="";
//     for(let j=1; j<=n-i; j++){
//         row+=" ";
//     }
//     for(let s=1; s<=n; s++){
//         row+="*";
//     }
//     console.log(row);
// }

// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += "  ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j + " ";
//     }
//         for (let j = i - 1; j >= 1; j--) {
//         row += j + " ";
//     }

//     console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let s = 1; s <= n - i; s++) {
//         row += "  ";
//     }
//     for (let j = 1; j <= i; j++) {``
//         row += j + " ";
//     }
//     for (let j = i - 1; j >= 1; j--) {
//         row += j + " ";
//     }
//     console.log(row);
// }

// let a = [12, 15, 17, 1, 8, 12, 34];
// let firstMax = a[2];
// let secondMax = a[1];
// let firstMin = a[3];
// // a.sort();
// for (let i = 0; i < a.length; i++) {
//   let num = a;
//   if (num > firstMax) {
//     secondMax = firstMax;
//     firstMax = num;
//   } else if (num > secondMax && num !== firstMax) {
//     secondMax = num;
//   }
// }
// console.log("1st Max:", firstMax);
// console.log("2nd Max:", secondMax);
// console.log("1st Min:", firstMin);


