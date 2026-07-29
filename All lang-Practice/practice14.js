// let n =5;
// for(let i =0; i<=n; i++){
//     let row = "";
//     for(let j=1; j<=i; j++){
//         row +="*";
//     }
//     console.log(row);
// }


let n = 5;
for(let i=1; i<=n; i++){
    let row = "";
    
    for(let j=1; j<=i; j++){
        row +=" ";
    }
    for(let s =1; s<=2*n-1; s++){
        row+="*";
    }
    console.log(row);
}