// Question 1:
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

// Question 2:
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

// Question 3:
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

// Question 4:
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

// Question 5:
/*Given an array arr, rotate the array by one position in clockwise direction.

Examples:

Input: arr[] = [1, 2, 3, 4, 5]
Output: [5, 1, 2, 3, 4]
Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.
Input: arr[] = [9, 8, 7, 6, 4, 2, 1, 3]
Output: [3, 9, 8, 7, 6, 4, 2, 1]
Explanation: After rotating clock-wise 3 comes in first position.
 */
class Solution {
  rotate(arr) {
    if (arr.length <= 1) return;
    let last = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = last;
  }
}

// Question 7:
/*Given an integer array arr[], return the sum of all elements of arr.

Examples:

Input: arr[] = [1, 2, 3, 4]
Output: 10
Explanation: 1 + 2 + 3 + 4 = 10.
Input: arr[] = [1, 3, 3]
Output: 7
Explanation: 1 + 3 + 3 = 7.
 */
class Solution {
  arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
}

// Question 8:
/*Given an array arr[]. Find the elements whose value is equal to the position where they appear.

Note: There can be more than one element in the array which have the same value as its position. You need to include the position of every such element.

Examples:

Input: arr[] = [15, 2, 45, 4, 7]
Output: [2, 4]
Explanation: Here, arr[2] = 2 exists here and arr[4] = 4 exists.
Input: arr[] = [1]
Output: [1]
Explanation: Here arr[1] = 1 exists.
*/
class Solution {
  valEqualToPos(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === i + 1) {
        ans.push(arr[i]);
      }
    }
    return ans;
  }
}

// Question 9:
/*You are given an array arr[], the task is to return a list elements of arr in alternate order (starting from index 0).
Examples:
Input: arr[] = [1, 2, 3, 4]
Output: 1 3
Explanation:
Take first element: 1
Skip second element: 2
Take third element: 3
Skip fourth element: 4
 */
class Solution {
  getAlternates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr[i]);
    }
    return result;
  }
}

// Question 10:
/*
Given an array arr[] of positive integers. Return true if all the array elements are palindrome otherwise, return false.

Examples:

Input: arr[] = [111, 222, 333, 444, 555]
Output: true
Explanation:
arr[0] = 111, which is a palindrome number.
arr[1] = 222, which is a palindrome number.
arr[2] = 333, which is a palindrome number.
arr[3] = 444, which is a palindrome number.
arr[4] = 555, which is a palindrome number.
As all numbers are palindrome so This will return true. */
class Solution {
  isPalinArray(arr) {
    for (let num of arr) {
      let temp = num;
      let reversed = 0;

      while (temp > 0) {
        let lastDigit = temp % 10;
        reversed = reversed * 10 + lastDigit;
        temp = Math.floor(temp / 10);
      }
      if (reversed !== num) {
        return false;
      }
    }
    return true;
  }
}

// Question 11:
/*Given an unsorted array arr[]. Find the count of elements less than or equal to the given element x.

Examples:

Input: x = 9, arr[] = [10, 1, 2, 8, 4, 5] 
Output: 5
Explanation: The 5 elements are 1, 2, 8, 4 and 5.
 */
class Solution {
  countOfElements(x, arr) {
    let count = 0;
    for (let num of arr) {
      if (num <= x) {
        count++;
      }
    }
    return count;
  }
}

// Question 12:
/*Given an array of arr[] positive integers where all numbers occur even number of times except one number which occurs odd number of times. Return that number.

Examples:

Input:arr[] = [1, 2, 3, 2, 3, 1, 3]
Output: 3
Explaination: 3 occurs three times. */
class Solution {
  getOddOccurrence(arr) {
    let counts = {};

    for (let num of arr) {
      counts[num] = (counts[num] || 0) + 1;
    }
    for (let key in counts) {
      if (counts[key] % 2 !== 0) {
        return Number(key);
      }
    }
  }
}

//Question 13:
/*You are given an integer n. You need to convert all zeroes of n to 5.

Examples:

Input: n = 1004
Output: 1554
Explanation: There are two zeroes in 1004 on replacing all zeroes with 5, the new number will be 1554.
 */
class Solution {
  convertFive(n) {
    if (n === 0) return 5;

    let result = 0;
    let place = 1;

    while (n > 0) {
      let digit = n % 10;

      if (digit === 0) {
        digit = 5;
      }
      result = result + digit * place;

      place = place * 10;
      n = Math.floor(n / 10);
    }
    return result;
  }
}

// Question 14:
/*Given an array arr[] of positive integers. The task is to return the count of the number of odd and even elements in the array.

Note: Return two elements where the first one in the count of odd & second one is the count of even.

Examples:

Input: arr[] = [1, 2, 3, 4, 5]
Output: 3 2
Explanation: There are 3 odd elements (1, 3, 5) and 2 even elements (2 and 4).
 */
class Solution {
  countOddEven(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        even++;
      } else {
        odd++;
      }
    }
    return [odd, even];
  }
}

// Question 15:
/*You are given an array arr(0-based index) and two positive integer index and val. You need to insert an val at given index.

Examples:

Input: arr[] = [1, 2, 3, 4, 5], index = 5, val = 90
Output: 1 2 3 4 5 90
Explanation: 90 is inserted at index 5(0-based indexing). After inserting, array elements are like [1, 2, 3, 4, 5, 90].
Input: arr[] = [1, 2, 3, 4, 5], index = 2, val = 90
Output: [1, 2, 90, 3, 4, 5]
Explanation: 90 is inserted at index 2(0-based indexing). After inserting, array elements are like [1, 2, 90, 3, 4, 5]. */
class Solution {
  insertAtIndex(arr, index, val) {
    for (let i = arr.length; i > index; i--) {
      arr[i] = arr[i - 1];
    }
    arr[index] = val;
    return arr;
  }
}

// Question 16:
/*Given an array arr[] and two elements x and y, return the element that occurs more frequently. If both elements have the same frequency, return the smaller one.

Examples:

Input: arr[] = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], x = 4, y = 5
Output: 4
Explanation: frequency of 4 is 4.frequency of 5 is 1.Since 4>1 so return 4 */
class Solution {
  moreFrequent(arr, x, y) {
    let countX = 0;
    let countY = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        countX++;
      } else if (arr[i] === y) {
        countY++;
      }
    }
    if (countX > countY) {
      return x;
    } else if (countY > countX) {
      return y;
    } else {
      return Math.min(x, y);
    }
  }
}

// Question 17:
/*Given an array arr[] of integers and an index i(0-based index). Return the element present at the index i in the array.

Examples:

Input: i = 2 , arr[] = [10, 20, 30, 40, 50]
Output: 30
Explanation: The value of arr[2] is 30 .
 */
class Solution {
  findElementAtIndex(i, arr) {
    for (let index = 0; index < arr.length; index++) {
      if (index === i) {
        return arr[index];
      }
    }
  }
}

// Question 18:
/*Given an array arr[] containing distinct positive integers, and two integers start and end defining a range. Determine if the array contains all elements within inclusive range [start, end].

Note: If the array contains all elements in the given range return true otherwise return false.

Examples :

Input: start = 2, end = 5, arr[] =  [1, 4, 5, 2, 7, 8, 3]
Output: true
Explanation: All integers within the range [2, 5] are 2, 3, 4, and 5, and all of them are present in the array. Therefore, the answer is true for this test case. */
class Solution {
  checkElements(start, end, arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
      output[arr[i]] = true;
    }
    for (let num = start; num <= end; num++) {
      if (output[num] != true) {
        return false;
      }
    }
    return true;
  }
}

// Question 19:
/*Given a sorted array arr[] and a value target, return an array of size 2. The first value is the number of elements less than or equal to the target, and the second value is the number of elements greater than or equal to the target.

Examples:

Input: arr[] = [1, 2, 8, 10, 11, 12, 19], target = 0
Output: [0, 7]
Explanation: There are no elements less or equal to 0 and 7 elements greater to 0. */
class Solution {
  getMoreAndLess(arr, target) {
    let lessOrEqual = 0;
    let greaterOrEqual = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= target) {
        lessOrEqual++;
      }
      if (arr[i] >= target) {
        greaterOrEqual++;
      }
    }
    return [lessOrEqual, greaterOrEqual];
  }
}

// Question 20:
/* given an array arr[], the task is to find whether the arr is palindrome or not. if the arr is palindrome the return true  else return false. 
Note: An array is said to be palindrome if its reverse array matches the original array.
Example:
Input: arr=[1,2,3,2,1] 
Output: true
Explanation: if we reverse, we get [1,2,3,2,1] which is the same as before. so, the answer is true.*/
class Solution {
  isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] !== arr[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}

// Question: 21
/*Given an array [] containing strings of names. Your task is to return the longest string. if there are multiple names of the  longest size, return the first ouccuring name.
Input: arr[]= ["Geek","Greeks","Geeksfor","GeeksforGeek","GeeksforGeeks"]
Output:"GeelsforGeeks"
Explanation: Name "GeeksforGeeks" has maximum length among all names.
*/
class Solution {
  longest(arr) {
    let longestnumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longestnumber.length) {
        longestnumber = arr[i];
      }
    }
    return longestnumber;
  }
}


// Question 22: - Last coin in a game of Alternates
/*Given an array integer arr[], representing the values of coins arranged in a row.
-Two players play a game by picking coins alternately.
-At each turn, a player can pick a coin from either the beginning or the end of the array. Both players follow a greedy stratedy, i.e, the a
*/