// Question 1- Missing in Array:
// You are given an array arr[] of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). This array represents a permutation of the integers from 1 to n with one element missing. Your task is to identify and return the missing element.
// Examples:
// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.
class Solution {
  missingNum(arr) {
    let n = arr.length + 1;
    let sum = (n * (n + 1)) / 2;
    let arrsum = 0;
    for (let i = 0; i < arr.length; i++) {
      arrsum += arr[i];
    }
    arrsum = sum - arrsum;
    return arrsum;
  }
}

// Question 2- Second Largest:
/*
Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element.

Examples:

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.
*/
class Solution {
  getSecondLargest(arr) {
    let largest = -1;
    let secondlargest = -1;
    for (let num of arr) {
      if (num > largest) {
        secondlargest = largest;
        largest = num;
      } else if (num < largest && num > secondlargest) {
        secondlargest = num;
      }
    }

    return secondlargest;
  }
}

// Question 3: Array Leaders
/*
You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leader.

Examples:

Input: arr = [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]
Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.

*/

class Solution {
  leaders(a) {
    let n = a.length;
    let result = [];
    let maxFromRight = a[n - 1];
    result.push(maxFromRight);
    for (let i = n - 2; i >= 0; i--) {
      if (a[i] >= maxFromRight) {
        result.push(a[i]);
        maxFromRight = a[i];
      }
    }
    return result.reverse();
  }
}



//Question  4: Duplicates in a Limited Range Array
/*
Given an array arr[] of size n, containing elements from the range 1 to n, and each element appears at most twice, return an array of all the integers that appears twice.

Note: You can return the elements in any order but the driver code will print them in sorted order.

Examples:

Input: arr[] = [2, 3, 1, 2, 3]
Output: [2, 3] 
Explanation: 2 and 3 occur more than once in the given array.

*/
class Solution {
  findDuplicates(arr) {
    let output = [];
    let Match = {};

    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (Match[num]) {
        output.push(num);
      } else {
        Match[num] = true;
      }
    }

    return output;
  }
}