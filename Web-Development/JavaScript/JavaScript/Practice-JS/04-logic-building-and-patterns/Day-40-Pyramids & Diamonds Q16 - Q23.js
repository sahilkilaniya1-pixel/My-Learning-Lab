function FullPyramind(n){
    for(let i=1; i<=n; i++){
        let row="";
        for(let s=1; s<=n; s++){
            row+=" ";
        }
        for(let j=1; j<=i; j++){
            row+="*";
        }
        console.log(row);
    }
}
FullPyramind(5);