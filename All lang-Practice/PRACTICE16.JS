// Square & Right triangle
// let n =5;
// for(let i=1; i<=n; i++){
//     let row ="";
//     for(let j=1; j<=n; j++){
//         row+="*";
//     }
//     console.log(row);
// }

// right angled triangle
// let n =5;
// for(let i=1; i<=n; i++){
//     let row ="";

//     for(let j=1; j<=i; j++){
//         row+="* ";
//     }
//     console.log(row);
// }

// let n = 7;
// for(let i=1; i<=n; i++){
//     let row ="";

//     for(let j=1; j<=n; j++){
//         if(i==1|| i==n|| j==1|| j==n|| j==i){
//             row+="*";
//         }else{
//             row+=" ";
//         }
//     }
//     console.log(row);
// }

// let n = 7;
// for(let i=1; i<=n; i++){
//     let row ="";

//     for(let j=1; j<=n; j++){
//         if(i==1||i==n|| j==i){
//             row+="*";
//         }else{
//             row+=" ";
//         }
//     }
//     console.log(row);
// }

// pyramid
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// CRoss pattren

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }

// let n =5;
// for(let i=1; i<=n; i++){
//     let row ="";

//     for(let j=1; j<=n-i; j++){
//         row+="*";
//     }
//     console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }
//   console.log(row);
// }

//
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

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for(let k=1; k<=(2*i-1); k++){
//     if(k==1|| k==(2*i-1)||i==n){
//         row+="*";
//     }else{
//         row+=" ";
//     }
//   }
//   console.log(row);
// }



let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    if (i == j || j == j) {
      row += "*";
    } else {
      row += "";
    }
  }
  console.log(row);
}