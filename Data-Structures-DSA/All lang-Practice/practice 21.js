// function printButterfly(n) {
//   for (let i = 1; i <= n; i++) {
// let row = "";
// for (let j = 1; j <= i; j++) {
//   row += "*";
// }
// for (let j = 1; j <= 2*(n-i); j++) {
//   row += " ";
// }
// for (let j = 1; j <= i; j++) {
//   row += "*";
// }

// console.log(row);
//   }
//   for (let i = n; i >= 1; i--) {
// let row = "";
// for (let j = 1; j <= i; j++) {
//   row += "*";
// }
// for (let j = 1; j <= 2*(n-i); j++) {
//   row += " ";
// }
// for (let j = 1; j <= i; j++) {
//   row += "*";
// }

// console.log(row);
//   }
// }
// printButterfly(5);

// function printDiamondInSquare(n) {
//   if (n % 2 === 0) {
    // n = n + 1;
//   }
//   let topRows = (n + 1) / 2;
//   let starCount = topRows;
//   let spaceCount = 0;
//   for (let r = 1; r <= topRows; r = r + 1) {
    // let rowText = "";
    // for (let s = 1; s <= starCount; s = s + 1) {
    //   rowText = rowText + "*";
    // }
    // for (let sp = 1; sp <= spaceCount; sp = sp + 1) {
    //   rowText = rowText + " ";
    // }
    // for (let s = 1; s <= starCount; s = s + 1) {
    //   rowText = rowText + "*";
    // }
    // console.log(rowText);
    // starCount = starCount - 1;
    // spaceCount = spaceCount + 2;
//   }
//   starCount = 2;
//   spaceCount = n - 3;
//   let bottomRows = topRows - 1;
//   for (let r = 1; r <= bottomRows; r = r + 1) {
    // let rowText = "";
    // for (let s = 1; s <= starCount; s = s + 1) {
    //   rowText = rowText + "*";
    // }
    // for (let sp = 1; sp <= spaceCount; sp = sp + 1) {
    //   rowText = rowText + " ";
    // }
    // for (let s = 1; s <= starCount; s = s + 1) {
    //   rowText = rowText + "*";
    // }
    // console.log(rowText);
    // starCount = starCount + 1;
    // spaceCount = spaceCount - 2;
//   }
// 
// printDiamondInSquare(7);



// function SandglassStar(n) {
//   for (let i = 0; i < n; i++) {
    // let row = "";
    // for (let s = 0; s < i; s++) {
    //   row += "_";
    // }
    // for (let j = 0; j < 2 * (n - i) - 1; j++) {
    //   row += "*";
    // }
    // console.log(row);
//   }
//   for (let i = 1; i < n; i++) {
    // let row = "";
    // for (let s = 0; s < n - 1 - i; s++) {
    //   row += "_";
    // }
    // for (let j = 0; j < 2 * i + 1; j++) {
    //   row += "*";
    // }
    // console.log(row);
//   }
// }
// SandglassStar(5);


