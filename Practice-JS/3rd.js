// =========================================================================
// JAVASCRIPT CORE
// =========================================================================

// -------------------------------------------------------------------------
// Q1. Reverse a String (Without using reverse() or split())
// -------------------------------------------------------------------------
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("sahil")); // Output: lihas


// -------------------------------------------------------------------------
// Q2. Find the Largest (Maximum) Number in an Array (Without Math.max())
// -------------------------------------------------------------------------
function findLargestNum(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findLargestNum([1, 2, 3, 4, 5])); // Output: 5


// -------------------------------------------------------------------------
// Q3. Check if String is Palindrome (Without using split(), reverse(), join())
// -------------------------------------------------------------------------
function isPalindrome(test) {
    // Standardizing the string: removing spaces and forcing uppercase
    let cleanedText = test.toUpperCase().replace(/\s+/g, '');
    // Two-pointer approach (Pure logic without built-in array conversion)
    let left = 0;
    let right = cleanedText.length - 1;
    while (left < right) {
        if (cleanedText[left] !== cleanedText[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log("Q3. Is 'sah il' a Palindrome?:", isPalindrome("sah il")); // Output: false
console.log("Q3. Is 'racecar' a Palindrome?:", isPalindrome("racecar")); // Output: true

// =======================================================================
// 2nd option
function isPalindrome(text) {
    let cleanedtext = text.toUpperCase().replace(/\s+/, '');
    let reversetext = cleanedtext.split('').reverse().join();
    return cleanedtext === reversetext;
} console.log(isPalindrome("sahi il"));
// =====================================================================



// -------------------------------------------------------------------------
// Q4. Remove Duplicate Elements from Array (Without Set or indexOf())
// -------------------------------------------------------------------------
function removeDuplicatesManual(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        // Check if the element already exists in uniqueArr manually
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        // If it's a fresh element, add it using index assignment
        if (!isDuplicate) {
            uniqueArr[uniqueArr.length] = arr[i];
        }
    }
    return uniqueArr;
}
console.log("Q4. Unique Array:", removeDuplicatesManual([1, 2, 2, 3, 4, 4, 5, 5, 6, 3, 4, 1, 4]));
// Output: [1, 2, 3, 4, 5, 6]


// ==========================================================================
// 2nd choice
// ==========================================================================
function removeDuplicate(arr) {
    return (...new set[arr]);
} console.log(removeDuplicate([1, 1, 2, 2, 3, 4, 3, 5, 4]));





// -------------------------------------------------------------------------
// Q5. Sort an Array (Bubble Sort - Without using sort())
// -------------------------------------------------------------------------
let arrayToSort = [1, 2, 3, 4, 9, 8, 6];
let len = arrayToSort.length;

for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
        // Fixed mismatch variables to sort 'arrayToSort' instead of undefined 'm'
        if (arrayToSort[j] > arrayToSort[j + 1]) {
            let temp = arrayToSort[j];
            arrayToSort[j] = arrayToSort[j + 1];
            arrayToSort[j + 1] = temp;
        }
    }
}
console.log("Q5. Sorted Array (Bubble Sort):", arrayToSort); // Output: [1, 2, 3, 4, 6, 8, 9]


// -------------------------------------------------------------------------
// Q6. Count Character Frequency in a String (Optimized Short Way)
// -------------------------------------------------------------------------
function countCharacterFrequencyShort(str) {
    let frequency = {};
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}
console.log("Q6. Character Frequency:", countCharacterFrequencyShort("sahil"));
// Output: { s: 1, a: 1, h: 1, i: 1, l: 1 }


// -------------------------------------------------------------------------
// Q7. Rotate Array Left 'k' times (Without shift(), push(), or slice())
// -------------------------------------------------------------------------
const rotateArrayLeft = (arr, k) => {
    let n = arr.length;
    k = k % n; // Handles cases where k > array length
    let rotated = [];

    for (let i = 0; i < n; i++) {
        let newIndex = (i + k) % n; // Math formula to calculate rotated position
        rotated[i] = arr[newIndex];
    }
    return rotated;
};
console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2));
// Output: [3, 4, 5, 1, 2]


// -------------------------------------------------------------------------
// Q8. Check Substring Presence (Without using includes() or indexOf())
// -------------------------------------------------------------------------
function manualInclude(str1, str2) {
    let len1 = str1.length; // Fixed typo: 'lenght' -> 'length'
    let len2 = str2.length; // Fixed typo: ',' -> '.'

    if (len2 > len1) return false;

    // Outer loop checks till the point where substring can fit
    for (let i = 0; i <= len1 - len2; i++) {
        let match = true;

        // Inner loop checks individual characters matching str2
        for (let j = 0; j < len2; j++) {
            if (str1[i + j] !== str2[j]) {
                match = false;
                break;
            }
        }
        if (match) return true; // Found the substring sequence
    }
    return false;
}
console.log("Q8. Substring check ('programming', 'gram'):", manualInclude("programming", "gram")); // Output: true
console.log("Q8. Substring check ('programming', 'gold'):", manualInclude("programming", "gold")); // Output: false