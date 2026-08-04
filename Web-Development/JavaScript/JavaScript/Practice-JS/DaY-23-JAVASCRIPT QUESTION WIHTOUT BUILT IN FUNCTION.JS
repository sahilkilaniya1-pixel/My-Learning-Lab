// 1. Reversing an Array (Two-Pointer Technique)
let arr= [10,20,30,40,50];
let left = 0;
let right = arr.length-1;

while(left <right){
    let  temp =arr[left];
    arr[left] = arr[right];
    arr[right]=temp;

    left++;
    right--;
}
console.log(arr);