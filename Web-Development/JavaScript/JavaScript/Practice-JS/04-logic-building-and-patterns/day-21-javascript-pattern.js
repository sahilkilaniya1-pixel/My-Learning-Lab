// Q1. Solid Square
function SolidSquare(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += "*";
        }
        console.log(row);
    }
}
SolidSquare(5);

// Q2. RightAngleTriangle
function PrintRightAngleTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
PrintRightAngleTriangle(5);


// Q3. InvertedRightTriangle
function PrintInvertedRightTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n - i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
PrintInvertedRightTriangle(6);


// Q4. DoubleStepTriangle
function DoubleStepTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= 2 * i - 1; j++) {
            row += "*";
        }
        console.log(row);
    }
}
DoubleStepTriangle(5);

// Q5. Alternate Line Triangle
function AlternateLineTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= (i % 2 !== 0 ? 1 : 2); j++) {
            row += "*";
        }

        console.log(row);
    }
}
AlternateLineTriangle(5);


// Q7 .Horizontal Triangle
// let row = 3;
// let coln = 7;
// for (let i = 1; i <= 3; i++) {
//     let row = "";

//     for (let j = 1; j <= 7; j++) {
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



// Q11. Right Parallelogram
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



// Q12. Left Parallelogram
// function LeftParallelogram(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let s = 1; s <= (n - i + 1); s++) {
//             row += " ";
//         }
//         for (let j = 1; j <= n; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }
// LeftParallelogram(5);

// Q13. MirroredHalfDiamond
// function MirroredHalfDiamond(n) {
    // for (let i = 1; i <= n; i++) {
        // let row = "";
        // for (let s = 1; s <= (n - i); s++) {
            // row += " ";
        // }
        // for (let j = 1; j <= i; j++) {
            // row += "*";
        }
// console.log(row);
// }
// for (let i = n - 1; i >= 1; i--) {
// let row = "";
// for (let s = 1; s <= (n - i); s++) {
// row += " ";
// }
// for (let j = 1; j <= i; j++) {
// row += "*";
// }
console.log(row);
}
}
MirroredHalfDiamond(5);



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



// Q38. Palindromic Number
// function PrintpalindromicPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let s = 1; s <= n - i; s++) {
//             row += "  ";
//         }
//         for (let j = 1; j <= i; j++) {
//             ``
//             row += j + " ";
//         }
//         for (let j = i - 1; j >= 1; j--) {
//             row += j + " ";
//         }
//         console.log(row);
//     }
// }
// PrintpalindromicPattern(5);