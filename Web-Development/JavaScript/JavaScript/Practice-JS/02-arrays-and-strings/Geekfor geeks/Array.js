/**
 * -------------------------------------------------------------
 * 1. LINEAR SEARCH
 * Task: Array mein x element ka index dhoondhna.
 * -------------------------------------------------------------
 */
function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
}
console.log("=== 1. Linear Search ===");
console.log("Index of 13:", linearSearch([11, 7, 1, 13, 21, 3], 13)); // Output: 3
/**
 * -------------------------------------------------------------
 * 2. SUBSET CHECK (Frequency Map Approach)
 * Task: Check karna ki kya array 'b', array 'a' ka subset hai.
 * -------------------------------------------------------------
 */
function isSubset(a, b) {
    const freqMap = new Map();
    for (const num of a) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (const num of b) {
        if (!freqMap.has(num) || freqMap.get(num) === 0) {
            return false;
        }
        freqMap.set(num, freqMap.get(num) - 1);
    }
    return true;
}
console.log("\n=== 2. Array Subset Check ===");
let a = [11, 7, 1, 13, 21, 3, 7, 3];
let b = [11, 3, 7, 1, 7];
console.log("Is 'b' a subset of 'a'?:", isSubset(a, b)); // Output: true
/**
 * -------------------------------------------------------------
 * 3. FIND MINIMUM AND MAXIMUM
 * Task: Array ka smallest aur largest element nikalna.
 * -------------------------------------------------------------
 */
function getMinMax(arr) {
    if (arr.length === 0) return [];
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    return [min, max];
}
console.log("\n=== 3. Minimum & Maximum ===");
console.log("[Min, Max]:", getMinMax([11, 7, 1, 13, 21, 3])); // Output: [1, 21]
/**
 * -------------------------------------------------------------
 * 4. PALINDROME NUMBER CHECK
 * Task: Check karna ki kya number ulta karne par bhi same rehta hai.
 * -------------------------------------------------------------
 */
function isPalindrome(num) {
    let original = num;
    let rev = 0;

    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return original === rev;
}
console.log("\n=== 4. Palindrome Number Check ===");
console.log("Is 121 Palindrome?:", isPalindrome(121)); // Output: true
console.log("Is 123 Palindrome?:", isPalindrome(123)); // Output: false
/**
 * -------------------------------------------------------------
 * 5. REVERSE AN ARRAY IN-PLACE
 * Task: Array ke elements ko ulta karna.
 * -------------------------------------------------------------
 */
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
console.log("\n=== 5. Reverse Array ===");
console.log("Reversed Array:", reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
/**
 * -------------------------------------------------------------
 * 6. VALUE EQUAL TO 1-BASED POSITION
 * Task: Un elements ko dhoondna jinki value unke index (i + 1) ke barabar ho.
 * -------------------------------------------------------------
 */
function valEqualToPos(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i + 1) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
console.log("\n=== 6. Value Equal to Position ===");
console.log("Matching Values:", valEqualToPos([15, 2, 45, 12, 7])); // Output: [2]












