function printTriangle(N) {
  for (let i = 1; i <= N; i++) {       // Rule 1: Row tracker
    let row = "";                      // Rule 2: Khali Dibba
    
    for (let j = 1; j <= i; j++) {     // Rule 3: Column tracker
      row = row + "* ";                // Dibbe mein star daalo
    