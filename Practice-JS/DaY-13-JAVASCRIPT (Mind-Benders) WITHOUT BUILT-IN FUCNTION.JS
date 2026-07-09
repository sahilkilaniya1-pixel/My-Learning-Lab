// =========================================================================
// Pattern 12: Object Equality (Deep Comparison of Two Objects)
// =========================================================================
// Problem Statement: In JavaScript, using strict equality (===) on two different 
// objects always returns false, even if they contain identical data, because 
// they point to different memory references. Without using any external libraries, 
// write a function to check if the data inside two objects is exactly the same.
//
// Approach:
// We need to iterate through the keys of both objects and verify that every key's 
// value in 'obj1' matches the corresponding key's value in 'obj2'.
function areObjectsEqual(obj1, obj2) {
    // 1. Manually count the keys of both objects (Without using Object.keys())
    let count1 = 0;
    for (let key in obj1) count1++;
    
    let count2 = 0;
    for (let key in obj2) count2++;

    // If the number of keys does not match, the objects are not equal
    if (count1 !== count2) return false;

    // 2. Loop through the keys to compare their values
    for (let key in obj1) {
        // If the key doesn't exist in obj2, or the values do not match
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // Return true if all keys and values match perfectly
    return true; 
}

console.log(areObjectsEqual({a: 1, b: 2}, {a: 1, b: 2})); // Output: true
console.log(areObjectsEqual({a: 1, b: 2}, {a: 1, b: 3})); // Output: false


// =========================================================================
// Pattern 13: Flatten a Nested Array (Without using .flat())
// =========================================================================
// Problem Statement: Given a nested array containing multiple levels of arrays 
// (e.g., [1, [2, 3], [4, [5]] ]), flatten it into a single-level array 
// [1, 2, 3, 4, 5] without using the built-in .flat() method.
//
// Approach (Using Recursion):
// We will iterate through each element of the array.
// - If the element is a normal value -> push it into the result array.
// - If the element is an array -> recursively call the helper function for that nested array.
function flattenArray(arr) {
    let result = [];

    // Helper function to evaluate and extract each element
    function extract(element) {
        // Check if the element is an array without using built-in array methods
        if (typeof element === "object" && element !== null && element.length !== undefined) {
            // If it's an array, iterate through its contents
            for (let i = 0; i < element.length; i++) {
                extract(element[i]); // Recursion: Evaluate the inner elements
            }
        } else {
            // If it's a standard literal value, push it to the result array
            result[result.length] = element;
        }
    }

    extract(arr); // Initiate the extraction process with the main array
    return result;
}

console.log(flattenArray([1, [2, 3], [4, [5]]])); 
// Output: [1, 2, 3, 4, 5]


// =========================================================================
// Pattern 14: String to Number Conversion (Without parseInt() or Number())
// =========================================================================
// Problem Statement: Given a numerical string like "4321", convert it into a 
// pure mathematical number 4321 without using parseInt(), parseFloat(), 
// Number(), or the unary plus (+) operator.
//
// Approach (Mathematical & Mapping Logic):
// We map each character digit to its actual numerical equivalent using a lookup table.
// As we traverse the string from left to right, we multiply the existing total by 10 
// to shift the place value, and then add the current digit.
// For example: "4" -> 4, next is "3" -> (4 * 10) + 3 = 43, next is "2" -> (43 * 10) + 2 = 432, etc.
function stringToNumber(str) {
    const digitMap = { 
        '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, 
        '5': 5, '6': 6, '7': 7, '8': 8, '9': 9 
    };
    
    let num = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let digit = digitMap[char]; // Map character to digit
        
        num = (num * 10) + digit; // Shift place value and append the current digit
    }

    return num;
}

let result = stringToNumber("4321");
console.log(result);         // Output: 4321
console.log(typeof result);  // Output: "number"