/*
outer loop we will use (i) ye tay karta hai ki total kitni line or rows print hongi.(i loop)

but for innr loop we will use (j)  ye tay karta hai ki har line ke andar kitne star * ya spaces print honge (j loop).
*/


// Question 2. Step-by-Step Code Walkthrough
let s = 5;
for(let i=0; i<=s; i++){
    let row="";
    for(let j=0; j<=i; j++){
        row +="*";
    }
    console.log(row);
}

// Quesiton 3: Spaces wala pattern(Advanced Logic)
let n  =5;
for(let i=0; i<=n; i++){
    let row="";

    for(let k =1; k<=n-1; k++){
        row += " ";
    }
    for(let j =1; j<=i; j++){
        row+= "*";
    }
    console.log(row);
}