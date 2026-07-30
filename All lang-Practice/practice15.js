// let n = 5;
// for(let i=1; i<=n; i++){
//     let row ="";
//     for(let j=1; j<=5; j++){
//         if(i==1 || i==n || j==1 || j==n || i==j){
//             row += "*";
//         }else{
//          
// 
//    row+= " ";
//         }
//     }
//     console.log(row);
// }

let n = 5;
for(let i=1; i<=n; i++){
    let row ="";
    for(let j=1; j<=5; j++){
        if( i==n || j==1  || i==j){
            row += "*";
        }else{
            row+= " ";
        }
    }
    console.log(row);
}