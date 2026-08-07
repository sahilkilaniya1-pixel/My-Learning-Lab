// class Solution {
//     search(arr, x) {
//         let index=-1;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === x) {
//                 index=i;
//                 break;
//             }
//         }
//         return index; 
//     }
// }




// Pre-defined input arrays
// let a = [11, 7, 1, 13, 21, 3, 7, 3];
// let b = [11, 3, 7, 1, 7];
// const freqMap = new Map();
// for (const num of a) {
//     freqMap.set(num, (freqMap.get(num) || 0) + 1);
// }

// let isSubset = true;

// // Check if elements of 'b' exist in 'a' with sufficient frequency
// for (const num of b) {
//     if (!freqMap.has(num) || freqMap.get(num) === 0) {
//         isSubset = false;
//         break; // Stop checking further as 'b' cannot be a subset
//     }
//     freqMap.set(num, freqMap.get(num) - 1);
// }

// console.log(isSubset); // Outputs: true or false 

// let a = [11, 7, 1, 13, 21, 3, 7, 3];
// let b = [11, 3, 7, 1, 7];
// let i=0,j=0;
// a.sort((a,b), a-b)
// b.sort((a,b), a-b)
// console.log(a);
// console.log(b);

// while(b){}







// let a = [11, 7, 1, 13, 21, 3, 7, 3,];
// let b = [11, 3, 7, 1, 7,45,];
// let i=0,j=0,count=0;
// a.sort((a,b) => a-b)
// b.sort((a,b) => a-b)

// while(j<b.length && i<a.length){
//     if(b[j]==a[i]){
//         count++;
//         i++;
//         j++;
//     }
//     else if(b[j]>a[i]){
//         i++;
//     }
// }
// if(count == b.length){
//     console.log("subset")
// }
// else{
//     console.log("not a subset")
// }





// class Solution {
//     getMinMax(arr) {
//         if (arr.length === 0) return [];
//         let min = arr[0];
//         let max = arr[0];
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i] < min) {
//                 min = arr[i];
//             }
//             if (arr[i] > max) {
//                 max = arr[i];
//             }
//         }
//         return [min, max];
//     }
// }




// var num, rem, rev =0, original;
// nuw = 121;
// original=num;
// while(num>0){
//     rem - num %10;
//     rev = rev * 10+rem;
//     num=Math.flooer(num/10);
// }
// if(original===rev){
//     console.log("Number is palindrome");
// }
// else{
//     console.log("Number is not palindrome");
// }





// let arr = [1,2,3,4,5];
// let result = [];
// target[0] = 5;
// for (let i = arr.length - 1; i >= 0; i--) {
//   result[newIndex] = arr[i];
//   newIndex++;
// }
// console.log(result);










// let arr = [1, 2, 3, 4,5];
// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;
//   start++;
//   end--;
// }
// for (let i = arr.length; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = 5;
// console.log(arr); 






// let arr=[1,2,3,4,5];
// for(let i=arr.length-1; i>0; i--){
//     temp = arr[i-1]
//     arr[i-1]= arr[i]
//     arr[i]=temp
// }
// console.log(arr);





