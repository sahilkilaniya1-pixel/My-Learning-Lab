// /*
// outer loop we will use (i) ye tay karta hai ki total kitni line or rows print hongi.(i loop)

// but for innr loop we will use (j)  ye tay karta hai ki har line ke andar kitne star * ya spaces print honge (j loop).
// */

// RIGHT ANGLED TRIANGLE:
let n = 5;
for(let i=0; i<=n; i++){
    let row ="";
    for(let j =1; j<=i; j++){
        row+="*";
    }
    console.log(row);
}

// Square Star Pattern:
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