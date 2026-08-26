
for(let i=1; i<=n; i++){
    let row="";
    for(let j=1; j<=n-i; j++){
        row+=" ";
    }
    for(let s=1; s<=n; s++){
        row+="*";
    }
    console.log(row);
}