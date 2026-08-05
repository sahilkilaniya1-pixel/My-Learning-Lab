// 1. Reversing an Array (Two-Pointer Technique)
//// let arr= [10,20,30,40,50];
// let left = 0;
// let right = arr.length-1;
// while(left <right){
//     let  temp =arr[left];
//     arr[left] = arr[right];
//     arr[right]=temp;
//     left++;
//     right--;
// }
// console.log(arr);




//  2. Linear Search & Binary Search
// let arr = [10,51,15,65,4,15];
// let target = 10;
// let foundIndex = -1;
// for(let i=0; i<=arr.length; i++){
//     if(arr[i]=== target){
//         foundIndex =i;
//         break;
//     }
// }
// console.log(foundIndex);





// B. Binary Search (Sorted Array ke liye — Fast Search)Time Complexity: O(log N)
// let arr = [2, 4, 5, 815, 12, 16, 38, 56, 72, 91];
// let target = 56;
// let low = 0;
// let high = arr.length - 1;
// let resultIndex = -1;
// while (low <= high) {
//   let mid = Math.floor((low + high) / 2);
//   if (arr[mid] === target) {
//     resultIndex = mid;
//     break;
//   } else if (arr[mid] < target) {
//     low = mid + 1;
//   } else {
//     high = mid - 1;
//   }
// }
// console.log(resultIndex);




// 3. Remove Duplicates from Sorted Array (In-Place)
// Bina extra space / new array ke duplicates hatana.
let arr = [1,1,2,2,3,4,4,5];
if(arr.length >0){
    let i=0
    for(let j=1; j<arr.length; j++){
        if(arr[j]!==arr[i]){
            i++;
            arr[i]=arr[j];
        }
    }
    arr.length =i+1;
}
console.log(arr);