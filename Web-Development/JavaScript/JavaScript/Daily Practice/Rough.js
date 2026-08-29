// // function printTriangle(N) {
// //   for (let i = 1; i <= N; i++) {       // Rule 1: Row tracker
// //     let row = "";                      // Rule 2: Khali Dibba

//     for (let j = 1; j <= i; j++) {     // Rule 3: Column tracker
//       row = row + "* ";                // Dibbe mein star daalo
//     }

//     console.log(row);                  // Rule 4: Row print karo
//   }
// }
// printTriangle(5);


// function printTriangle(n) {
//     for(let i=1; i<=n; i++){
//         let row ="";

//         for(let j=1; j<=i; j++){
//             row+="*";
//         }
//         console.log(row);
//     }
// }
// printTriangle(4);


// function printArray(a)
// {
//      var len = a.length, i = 0;
//      if (len == 0)
//         console.log("Empty Array");
//      else
//      {
// do-while loop in javascript
//          do
//          {
//              console.log(a[i]);
//          } while (++i < len);
//      }
// }

// for (let i = 1; i <= 3; i++) {
//   let row = "";
//   for (let j = 1; j <= 4; j++) {
//     row += j + " ";
//   }
//   console.log(row);
// }

// function printPaddedTriangle(N) {
//     for (let i = 1; i <= N; i++) {
//         let row = "";
//         for (let s = 1; s <= (N - i); s++) {
//             row = row + " ";
//         }
//         for (let j = 1; j <= i; j++) {
//             row = row + "*";
//         }
//         console.log(row);
//     }
// }
// printPaddedTriangle(4);


// function printSolidSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= n; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }
// printSolidSquare(5);

// function printPaddedTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let s = 1; s <= (n - i); s++) {
//             row += " ";
//         }
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }

//         console.log(row);
//     }
// }
// printPaddedTriangle(4);

// function SolidSquare(n) {
// for (let i = 1; i <= n; i++) {
// let row = "";
// for (let j = 1; j <= n; j++) {
// row += "*";
// }
// console.log(row);
// }
// }
// SolidSquare(5);

// function printPattern(n){
// for(let i=1; i<=n; i++){
// let row = "";
// for(let s=1; s<=(n-i); s++){
// row+=" ";
// }
// for(let j=1; j<=i; j++){
// row+=j+" ";
// }
// console.log(row);
// }

// }
// printPattern(5);


// function  LeftParallelogram(n){
//     for(let i=1; i<=n; i++){
//         let row = "";
//         for(let s=1; s<=(n-i+1); s++){
//             row+=" ";
//         }
//         for(let j=1;j<=n; j++){
//             row+="*";
//         }
//         console.log(row);
//     }
// }
//  LeftParallelogram(5);



// function RightParallelogram(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let s = 1; s <= (i - 1); s++) {
//             row += " ";
//         }
//         for (let j = 1; j <= n; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }
// RightParallelogram(5);


// function WideSpaceTriangle(n) {
//   for (let i = 1; i <= n; i++) {
// let row = "";
// for (let s = 1; s <= (n - i); s++) {
//   row += "  ";
// }
// for (let j = 1; j <= i; j++) {
//   row += "* ";
// }
//     console.log(row);
//   }
// }
// WideSpaceTriangle(3);

// function PrintRightAngleTriangle(n){
//     for(let i=1; i<=n; i++){
//         let row ="";
//         for(let j=1; j<=i; j++){
//             row+="*";
//         }
//         console.log(row);
//     }
// }
// PrintRightAngleTriangle(5);


// function PrintInvertedRightTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= n-i; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }
// PrintInvertedRightTriangle(6);


// function  DoubleStepTriangle(n){
//     for(let i=1; i<=n; i++){
//         let row ="";
//         for(let j=1; j<=2*i-1; j++){
//             row+="*";
//         }
//         console.log(row);
//     }
// }
// DoubleStepTriangle(5);


// function AlternateLineTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = ""; 
//         for (let j = 1; j <= (i % 2 !== 0 ? 1 : 2); j++) {
//             row += "*";
//         }

//         console.log(row);
//     }
// }
// AlternateLineTriangle(5);

// function VerticaRectangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= n; j++) {
//             row += "* ";
//         }
//         console.log(row);
//     }
// }
// VerticaRectangle(3);


// function MirroredHalfDiamond(n) {
// for (let i = 1; i <= n; i++) {
// let row = "";
// for (let s = 1; s <= (n - i); s++) {
// row += " ";
// }
// for (let j = 1; j <= i; j++) {
// row += "*";
// }
// console.log(row);
// }
// for (let i = n - 1; i >= 1; i--) {
// let row = "";
// for (let s = 1; s <= (n - i); s++) {
// row += " "; 
// }
// for (let j = 1; j <= i; j++) {
// row += "*";
// }
// console.log(row);
// }
// }
// MirroredHalfDiamond(5);



// Q7 .Horizontal Triangle
// let row = 3;
// let coln = 7;
// for (let i = 1; i <= 3; i++) {
//     let row = "";

//     for (let j = 1; j <= 7; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// function HorizontalTriangle(n){
//     for(let i=1; i<=n; i++){
//         let row ="";
//         for(let j=1; j<=7; j++){
//             row+="*";
//         }
//         console.log(row);
//     }
// }
// HorizontalTriangle(3);


// Q6.vertical
// function verticalTriangle(n){
//     for(let i=1; i<=n; i++){
//         let row ="";
//         for(let j=1; j<=3; j++){
//             row+="*";
//         }
//         console.log(row);
//     }
// }
// verticalTriangle(5);



// Q8. Even Star Triangle
// function EvenStarTriangle(n){
//     for(let i=1; i<=n; i++){
//         let row = "";
//         for(let j=1; j<=(2*i); j++){
//             row+="*";
//         }
//         console.log(row);
//     }
// }
// EvenStarTriangle(5);


// function ShiftedSquare(n){
//     for(let i=1; i<=n; i++){
//         let row="";
//         for(let j=1; j<=n; j++){
//             row+="*";
//         }
//         console.log(row);
//     }
// }
// ShiftedSquare(3);

// function InvertedPyramidSolid(n) {
//     for (let i = n; i >= 1; i--) {
//         let row = "";
//         for (let s = 1; s <= (n - i); s++) {
//             row += " ";
//         }
//         for (let j = 1; j <= (2 * i - 1); j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }
// InvertedPyramidSolid(5);

// let x = 10;[]
// function test() {
// console.log(x);
// let x = 20;
// }
// Text();

// for(var  i=0; i< 3; i++){
// setTimeout(()=>console.log(i),1000);
// }

// for( let i=0; i< 3; i++){
// setTimeout(()=>console.log(i),1000);
// }

// const obj = {a:1};
// obj.a=2;
// console.log(obj.a);

// function sumObjectValues(obj){
// let sum = 0;
// for(let key in obj){
// if(typeof obj[key]==='number'){
// sum +=obj[key];
// }
// }
// return sum;
// }
// const data = {a:10, b:'hello', c:20, d:true};
// console.log(sumObjectValues(data));

// function getSquare(num) {
    // return num * num;
// }
// console.log(getSquare(7));

// function isEven(num){
    // return num % 2 ===0;
// }
// console.log(isEven(7));;

// function greetUser (name = "Guest"){
    // return   `hello ${name}`;
// }
// console.log(greetUser("Sahil"));
// console.log(greetUser());


// function sumAll(...numbers){
    // let total = 0;
    // for(let num of numbers){
        total += num;
    }
    return total;
}
console.log(sumAll(5,10,15,20,25));