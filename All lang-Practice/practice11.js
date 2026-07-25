

// // Question 2. Step-by-Step Code Walkthrough
// let s = 5;
// for(let i=0; i<=s; i++){
//     let row="";
//     for(let j=0; j<=i; j++){
//         row +="*";
//     }
//     console.log(row);
// }

// // Quesiton 3: Spaces wala pattern(Advanced Logic)
// let n  =5;
// for(let i=0; i<=n; i++){
//     let row="";

//     for(let k =1; k<=n-1; k++){
//         row += " ";
//     }
//     for(let j =1; j<=i; j++){
//         row+= "*";
//     }
//     console.log(row);
// }

 let s = 5;
 for(let i=0; i<=s; i++){
    let row="*";
    
    for(let j=1; j<=s-1; j++){
        row+="*";
    }
    for(let j=1; j<=i; j++){
        row+="";
    }
    console.log(row);
 }