let n =5;
for(let i=1; i<= 5; i++){
  let row = "";

  for(let k = 1; k<= n-1; k++){
    row += " ";
  }

  for(let j =1; j<=i; j++){
    row += "*";
  }
  console.log(row);
}