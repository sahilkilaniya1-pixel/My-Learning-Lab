// function printHollowParallelogram(rows, cols) {
  // for (let i = 0; i < rows; i++) {
    // let rowStr = "";
    // for (let j = 0; j < rows - i - 1; j++) {
      // rowStr += " ";
    // }
    // for (let j = 0; j < cols; j++) {
      // if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
        // rowStr += "*";
      // } else {
        // rowStr += " ";
      // }
    // }
    // console.log(rowStr);
  // }
// }
// printHollowParallelogram(5, 8);

// function SameNumberRow(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
}
SameNumberRow(4);

function IncreasingColumn(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}
IncreasingColumn(4);

function FloydsTriangle(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += count + " ";
      count++;
    }
    console.log(row);
  }
}
FloydsTriangle(4);

function InvertedNumbers(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }

    console.log(row);
  }
}
InvertedNumbers(5);

function NumberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 1; s <= n - i; s++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}
NumberPyramid(5);

function BinaryTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) {
        row += "1 ";
      } else {
        row += "0 ";
      }
    }
    console.log(row);
  }
}
BinaryTriangle(5);