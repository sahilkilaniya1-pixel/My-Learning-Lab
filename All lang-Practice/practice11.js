let n =5;
for(let i=0; )i<=n; i++{
  let row ="";

  for(let s=1; s<= n-i; s++){
    row +=" ";
  }
  for(let j=1; j<=i; j++){
    row +="*";
  }
  console.log(row);
}