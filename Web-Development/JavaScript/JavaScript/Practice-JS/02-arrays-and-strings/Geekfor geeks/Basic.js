/*Given an array, arr[] of n integers, and an integer element x, find whether element x is present in the array. Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.
Examples:
Input: arr[] = [1, 2, 3, 4], x = 3
Output: 2
Explanation: For array [1, 2, 3, 4], the element to be searched is 3. Since 3 is present at index 2, the output is 2. */
class Solution {
  search(arr, x) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        index = i;
        break;
      }
    }
    return index;
  }
}
/* Given an array arr[]. The task is to find the largest element and return it.
Examples:
Input: arr[] = [1, 8, 7, 56, 90]
Output: 90
Explanation: The largest element of the given array is 90.
 */

class Solution {
  largest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
}

/*Given two arrays a[] and b[], your task is to determine whether b[] is a subset of a[].
Examples:
Input: a[] = [11, 7, 1, 13, 21, 3, 7, 3], b[] = [11, 3, 7, 1, 7]
Output: true
Explanation: b[] is a subset of a[]
 */
class solution {
  isSubset(a, b) {
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    let i = 0;
    let j = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) {
        i++;
        j++;
      } else if (a[i] < b[j]) {
        i++;
      } else {
        return false;
      }
    }
    return j === b.length;
  }
}
/*Given an array arr[]. Your task is to find the minimum and maximum elements in the array.

Examples:

Input: arr[] = [1, 4, 3, 5, 8, 6]
Output: [1, 8]
Explanation: minimum and maximum elements of array are 1 and 8.
Input: arr[] = [12, 3, 15, 7, 9]
Output: [3, 15]
Explanation: minimum and maximum element of array are 3 and 15.
 */

class Solution {
  getMinMax(arr) {
    if (arr.length === 0) return [];

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return [min, max];
  }
}
