let n=5;
for(let i=0; i<=n; i++){
  let row = "";

  for(let j=1; j<=n-1; j++){
    row +=" ";
  }

  for(let k =1; k<=i; k++){
    row += "*";
  }
  console.log(row);
}