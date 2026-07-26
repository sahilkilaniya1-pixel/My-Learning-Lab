let n =5;
for(let i=0; i<=n; i++){
    let row ="";

    for(let j =1; j<=n-1; j++){
        row += " ";
    }
    for(let s = 1; s<= i; s++){
        row += "*";
    }
    console.log(row);
}