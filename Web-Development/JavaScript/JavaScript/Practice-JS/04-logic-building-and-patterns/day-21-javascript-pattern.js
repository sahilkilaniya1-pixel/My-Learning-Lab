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



// Q7 .Horizontal Triangle
// let row = 3;
// let coln = 7;
// for(let i=1; i<=3; i++){
//     let row ="";

//     for(let j=1; j<=7; j++){
//         row += "*";
//     }
//     console.log(row);
// }



// Q5. Alternate Line Triangle
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



// Q3. Inverted Right Triangle
// let  n = 5;
// for(let i=n; i>=1; i--){
//     let row ="";
//     for(let j=1; j<=i; j++){
//         row+="*";
//     }
//     console.log(row);
// }




// Q10. Inverted Left Triangle
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



// Q9. Left-Aligned Triangle
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



// Q12. Right Parallelogram
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



// Q13. Left Parallelogram
function LeftParallelogram(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let s = 1; s <= (n - i + 1); s++) {
            row += " ";
        }
        for (let j = 1; j <= n; j++) {
            row += "*";
        }
        console.log(row);
    }
}
LeftParallelogram(5);




// Q14. Wide Space Triangle
// function WideSpaceTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let s = 1; s <= (n - i); s++) {
//             row += "  ";
//         }
//         for (let j = 1; j <= i; j++) {
//             row += "* ";
//         }
//         console.log(row);
//     }
// }
// WideSpaceTriangle(3);


// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j + " ";
//     }
//     console.log(row);
// }




// Q38. Palindromic Number
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