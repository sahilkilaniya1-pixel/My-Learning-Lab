let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  // 1. Pehle spaces add karo
  for (let j = 1; j <= n - i; j++) {
    row += "";
  }

  // 2. Phir stars add karo
  for (let k = 1; k <= i; k++) {
    row += " ";
  }
  for(let l =2; l<=i; l++ ){
    row += "*";
  }

  console.log(row);
}