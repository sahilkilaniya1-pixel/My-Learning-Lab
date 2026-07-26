let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    
    // Spaces ke liye loop
    for (let s = 1; s <= n - i; s++) {
        row += " ";
    }
    // Stars ke liye loop
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    
    console.log(row);
}