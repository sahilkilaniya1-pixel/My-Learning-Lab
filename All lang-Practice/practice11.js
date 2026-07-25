let s=5;
for(let i=0; i<=s; i++){
  let row ="*";

  for(let j=1; j <=s-1; j++){
    row += "*";
  }
  for (let j=1; j <=i; j++){
    row +="";
  }
  console.log(row);
}
