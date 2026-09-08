function printButterfly(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    const spaces = 2 * (n - i);
    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    const spaces = 2 * (n - i);
    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}
printButterfly(5);