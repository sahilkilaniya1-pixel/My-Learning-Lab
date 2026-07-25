/*
outer loop we will use (i) ye tay karta hai ki total kitni line or rows print hongi.(i loop)

but for innr loop we will use (j)  ye tay karta hai ki har line ke andar kitne star * ya spaces print honge (j loop).
*/


for(let i =1; i<=totalRows; i++){
    let pattern = "";

    for (let j =1; j <=columns; j++){
        pattern +="*";
    }
    console.log(pattern);
}