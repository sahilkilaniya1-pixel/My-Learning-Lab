// Question 1: Linear Search & Index Return
// let arr = [4, 2, 8, 10, 5];
// let arr = [4,2,8,10,5];
// let target = 5;
// let foundIndex = -1;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] === target) {
//     foundIndex = i;
//     break;
//   }
// }
// console.log(foundIndex);

// Question 2: Count Frequency of Elements (Sorted Array)
// let arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4];
// let count =0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]!==arr[i+1]){
//         count++
//     }
// }
// console.log(count);

// Question 3: Two Sum (Find Pair with Target Sum)

// let arr = [2, 7, 11, 15];
// let target = 9;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === target) {
//             console.log(`Indices: ${i}, ${j}`);
//             console.log(`Numbers: ${arr[i]}, ${arr[j]}`);
//         }
//     }
// }

// Question 4: Merge Two Sorted Arrays (Without Inbuilt Sort)

// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];

// let result = [];
// let i = 0;
// let j = 0;
// let k = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     result[k] = arr1[i];
//     i++;
//   } else {
//     result[k] = arr2[j];
//     j++;
//   }
//   k++;
// }
// while (i < arr1.length) {
//   result[k] = arr1[i];
//   i++;
//   k++;
// }
// while (j < arr2.length) {
//   result[k] = arr2[j];
//   j++;
//   k++;
// }
// console.log(result);








let arr = [4, 2, 8, 10, 5];
let target = 5;
let foundIndex = -1;
for (let i = 1; i < arr.length; i++) {
	if (arr[i] === target) {
		foundIndex = i;
		break;
	}
}
console.log(foundIndex);
