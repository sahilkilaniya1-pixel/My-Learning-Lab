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




//
let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    if (i == 1 || j == 1 || (i == 2 && j == 2) || (i == 4 && j == 4)) {
      row += "*";
    } else {
      row += "";
    }
  }
  console.log(row);
}
