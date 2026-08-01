// 1.Find the Largest Number in an Array:
//  Write a function that takes an array of numbers and returns 
// the largest number.
function findLargest(arr) {
    return Math.max(...arr);
}
console.log(findLargest([10, 5, 20, 8])); //Output 20



// 2.Array Sum: Write a function to calculate the sum of all elements in an array.
function arraysum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log(arraysum([1, 2, 3, 4, 5]));  //Output 15



// 3.Reverse an Array:
// Write a function to reverse the elements of an array without using built-in reverse() method.
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3, 4]));   // Output- [ 4, 3, 2, 1 ]



// 4.Remove Duplicates from an Array:Write a function to remove duplicate elements from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 6, 3, 4, 1, 4]));  //Output- [ 1, 2, 3, 4, 5, 6 ]



// 5.Find the Intersection of Two Arrays: Write a function that takes two arrays and returns a new arraycontaining elements common to both arrays.
function findIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
console.log(findIntersection([1, 2, 3], [2, 3, 4])); //Output - [ 2, 3 ]



// 6.Array Chunking: Write a function that splits an array into chunks of a specified size
function chunkArray(arr, size) {
    let chunks = [];
    let i = 0;
    while (i < arr.length) {
        chunks.push(arr.slice(i, i + size));
        i += size;
    }
    return chunks;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));   //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]


// 7.Rotate an Array: Write a function to rotate an array by n positions.
function rotateArray(arr, n) {
    let positions = n % arr.length; // Handles rotations larger than array length
    return [...arr.slice(-positions), ...arr.slice(0, -positions)];
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));   //[ 4, 5, 1, 2, 3 ]



// 8.Find the Missing Number: Write a function that takes an array containing numbers from 1 to n withone number missing, and returns the missing number.
let n = [4, 2, 1, 5];
n = n.sort();
let tempsum = 0;
for (let i = n[0]; i <= n[n.length - 1]; i++) {
    tempsum = tempsum + i;
}
finalsum = 0;
for (let i = 0; i <= n.length - 1; i++) {
    finalsum = finalsum + n[i];
}
console.log(tempsum - finalsum);  //Output : 3



// 9.Find the Pair with the Given Sum: Write a function that takes an array of numbers and a target sum,
// and returns the indices of the two numbers that add up to the target sum.
function findPairSum(arr, target) {
    let seen = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(arr[i], i);
    }
    return [];
}
console.log(findPairSum([2, 7, 11, 15], 9));    // [ 0, 1 ]



// 10.Reverse a String: Write a function to reverse a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello"));  // [ 'o', 'l', 'l', 'e', 'H' ]



// 11.Check for Palindrome: Write a function to check if a given string is a palindrome
function isPalindrome(text) {
    let cleanedText = text.toLowerCase().replace(/\s+/g, '');// 1. convert to lowercase and remove all space
    let reverseText = cleanedText.split('').reverse().join(''); // 2. do the exact same reverse check
    return cleanedText === reverseText;
}
console.log(isPalindrome("nurse run")); // Output:  flase



// 12.Count Vowels in a String: Write a function to count the number of vowels in a given string.
function countVowels(str) {
    let matches = str.match(/[aeiou]/gi); {
        return matches ? matches.length : 0;
    }
    console.log(countVowels("javascript"));
} //Output::  3



// 13.Find the Longest Word in a Sentence: Write a function to find the longest word in a given sentence.
function findLongestWord(sentence) {
    let words = sentence.split(' ');
    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}
console.log(findLongestWord("the quick brown fox jumps over the lazy dog"));



// 14.Title Case a Sentence: Write a function to convert a given sentence to title case (the first letter of
// each word is capitalized).
function titlecase(str) {
    return str.towlowercase().split('').Map(Word => word.charAt(0).touppercase() + word.slice(1)).join('');
}
console.log(titlecase("i am a lItle tEapot"));    //Output:: i am a little teapot
console.log(titlecase("sHORT AND sHOUT"));  //Output:: short and shout



// 15.Check for Anagram: Write a function to check if two given strings are anagrams of each other.
function isAnagram(str1, str2){
    // 1. convert both strings to lowercase
    let s1= str1.tolowercase();
    let s2= str2.tolowercase();
    // 2. sort the letter of bot strings
    let sorted1 =s1.split('').sort().join('');
    let sorted2 =s2.split('').sort().join('');
    // 3. check if they match return sorted1 === sorted2;
}
console.log(isAnagram("listen"),"silent");//true
console.log(isAnagram("hello","olleh"));//true
console.log(isAnagram("cat","rat")) // fale



// 16.Character Frequency in a String: Write a function to find the frequency of each character in a givenstring.
function charFrequency(str) {
    let frequency = {};
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}
console.log(charFrequency("hello"));   //{ h: 1, e: 1, l: 2, o: 1 }



// 17.Remove Duplicate Characters from a String:Write a function to remove duplicate characters from agiven string.
function removeDuplicateChars(str) {
    return [...new Set(str)].join('');
}
console.log(removeDuplicateChars("programming"));   // progamin



// 18.Find the First Non-Repeating Character:Write a function to find the first non-repeating character ina given string.
function firstnonRepeatingChar(str) {
    let frequency = {};
    for (let char of str) frequency[char] = (frequency[char] || 0) + 1;

    for (let char of str) {
        if (frequency[char] === 1) return char;
    }
    return null;
}
console.log(firstnonRepeatingChar("swiss"));  //Output : w



// 19.String Compression:Write a function to compress a string using the counts of repeated characters(e.g., 'aaabbc' -> 'a3b2c1').
function compressString(str) {
    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    return compressed;
}
console.log(compressString("aaabbc"));   // Output:: a3b2c1