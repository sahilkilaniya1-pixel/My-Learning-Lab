// let n =5;
// for(let i=1; i<=n; i++){
//     let row ='';
//     for(let j =1; j<=i; j++){
//         if(i==j){
//             row+="*";
//         }else{
//             row+=" ";
//         }
//     }
//     console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     if (i + j === n + 1) {
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
//     let mid = Math.ceil(n/2);
//     for(let j=1; j<=n; j++){
//         if(Math.abs(mid-i)+Math.abs(mid-j)===mid-1){
//             row+="*";
//         }else{
//             row+=" ";
//         }
//     }
//     console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     if (i === j || i + j === n + 1) {
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
//     for(let j=1; j<=i; j++){
//         row+= j + " ";
//     }
//     console.log(row);
// }




let n =5;
for(let i=1; i<=n; i++){
    let row ="";
    for(let j=1; j<=i; j++){
        row+= String.fromCharCode(64+i)+ " ";
    }
    console.log(row);
}
