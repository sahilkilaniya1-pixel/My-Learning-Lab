// =========================================================================
// JAVASCRIPT CORE ALGORITHMS (SUPER EASY HINGLISH GUIDE)
// =========================================================================

// -------------------------------------------------------------------------
// Q1. String ko bina reverse() ya split() use kiye ulta (reverse) kaise karein?
// -------------------------------------------------------------------------
function reverseString(str) {
    let reversed = "";
    // Loop ko peeche se shuru karenge (str.length - 1) aur index 0 tak le jayenge
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Ek-ek akshar peeche se uthakar jodte gaye
    }
    return reversed;
}
console.log("Q1. Reversed String:", reverseString("sahil")); // Output: lihas


// -------------------------------------------------------------------------
// Q2. Array mein se sabse Bada Number dhoondna (Bina Math.max() ke)
// -------------------------------------------------------------------------
function findLargestNum(arr) {
    if (arr.length === 0) return null; // Agar array khaali hai toh seedhe null bhej do
    
    let max = arr[0]; // Maan lete hain ki pehla number hi sabse bada hai
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Agar koi naya number max se bada mila, toh use max bana do
        }
    }
    return max;
}
console.log("Q2. Largest Number:", findLargestNum([1, 2, 3, 4, 5])); // Output: 5


// -------------------------------------------------------------------------
// Q3. Check karna ki String "Palindrome" hai ya nahi (Racecar ko ulta likho toh bhi racecar hi banta hai)
// -------------------------------------------------------------------------

// --- Tarika 1: Two-Pointer Approach (Bina array methods ke, super fast!) ---
function isPalindrome(test) {
    // Pehle saare faltu spaces hatayenge aur sabko uppercase (bade letters) mein kar denge
    let cleanedText = test.toUpperCase().replace(/\s+/g, '');
    
    let left = 0;                     // Ek pointer bilkul shuruat mein
    let right = cleanedText.length - 1; // Ek pointer bilkul aakhiri mein

    while (left < right) {
        // Agar dono pointers ke letters match nahi huye, toh palindrome nahi hai!
        if (cleanedText[left] !== cleanedText[right]) {
            return false;
        }
        left++;  // Shuruat wala pointer aage badhayenge
        right--; // Aakhiri wala pointer peeche layenge
    }
    return true; // Agar saare letters match ho gaye toh true
}
console.log("Q3 (Manual). Is 'sah il' a Palindrome?:", isPalindrome("sah il")); // Output: false
console.log("Q3 (Manual). Is 'racecar' a Palindrome?:", isPalindrome("racecar")); // Output: true

// --- Tarika 2: Built-in Methods (Split, Reverse, Join ka use karke) ---
function isPalindromeBuiltIn(text) {
    // Note: replace(/\s+/g, '') lagaya taaki beech ke saare spaces saaf ho jayein
    let cleanedtext = text.toUpperCase().replace(/\s+/g, '');
    let reversetext = cleanedtext.split('').reverse().join(''); // split se array banaya, reverse se ulta kiya, join se wapas string banaya
    return cleanedtext === reversetext;
} 
console.log("Q3 (Built-in). Is 'sahi il' a Palindrome?:", isPalindromeBuiltIn("sahi il")); // Output: false


// -------------------------------------------------------------------------
// Q4. Array se Duplicates (Ek jaise elements) hatana (Bina Set ya indexOf ke)
// -------------------------------------------------------------------------

// --- Tarika 1: Pure Manual Loop (Interviews ke liye best) ---
function removeDuplicatesManual(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        
        // Naye array 'uniqueArr' mein check karenge ki yeh element pehle se hai ya nahi
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true; // Mil gaya duplicate!
                break;
            }
        }
        // Agar unique hai, toh naye array ke aakhir mein index assignment se insert kar do
        if (!isDuplicate) {
            uniqueArr[uniqueArr.length] = arr[i];
        }
    }
    return uniqueArr;
}
console.log("Q4 (Manual). Unique Array:", removeDuplicatesManual([1, 2, 2, 3, 4, 4, 5, 5, 6, 3, 4, 1, 4]));
// Output: [1, 2, 3, 4, 5, 6]

// --- Tarika 2: Modern JS Shortcut (Using Set and Spread Operator) ---
function removeDuplicate(arr) {
    // Set ek aisi cheez hai jo sirf unique items hi apne paas rakhti hai
    // [...new Set(arr)] se saare duplicates automatic gayab ho jate hain
    return [...new Set(arr)];
} 
console.log("Q4 (Set). Unique Array:", removeDuplicate([1, 1, 2, 2, 3, 4, 3, 5, 4]));
// Output: [1, 2, 3, 4, 5]


// -------------------------------------------------------------------------
// Q5. Array ko Sort (Chhote se bada) karna (Bubble Sort Technique - Bina sort() ke)
// -------------------------------------------------------------------------
let arrayToSort = [1, 2, 3, 4, 9, 8, 6];
let len = arrayToSort.length;

// Bubble sort mein hum aaju-baju ke numbers ko compare karke swap (adal-badal) karte hain
for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
        // Agar left wala number right wale se bada hai, toh dono ko aapas mein badal do
        if (arrayToSort[j] > arrayToSort[j + 1]) {
            let temp = arrayToSort[j];
            arrayToSort[j] = arrayToSort[j + 1];
            arrayToSort[j + 1] = temp;
        }
    }
}
console.log("Q5. Sorted Array (Bubble Sort):", arrayToSort); // Output: [1, 2, 3, 4, 6, 8, 9]


// -------------------------------------------------------------------------
// Q6. String mein kaun sa akshar (character) kitni baar aaya? (Frequency Count)
// -------------------------------------------------------------------------
function countCharacterFrequencyShort(str) {
    let frequency = {};
    for (let char of str) {
        // Agar letter pehle se object mein hai toh count badhao (+1), nahi toh 0 mein 1 add karo
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}
console.log("Q6. Character Frequency:", countCharacterFrequencyShort("sahil"));
// Output: { s: 1, a: 1, h: 1, i: 1, l: 1 }


// -------------------------------------------------------------------------
// Q7. Array ko Left side mein 'k' times aage khiskana (Rotate Left)
// -------------------------------------------------------------------------
const rotateArrayLeft = (arr, k) => {
    let n = arr.length;
    k = k % n; // Agar k ki value array ki length se badi ho, toh safely handling ke liye
    let rotated = [];

    for (let i = 0; i < n; i++) {
        // Ek simple formula use karke har item ka naya seat number (index) calculate kiya
        let newIndex = (i + k) % n; 
        rotated[i] = arr[newIndex];
    }
    return rotated;
};
console.log("Q7. Rotated Array:", rotateArrayLeft([1, 2, 3, 4, 5], 2));
// Output: [3, 4, 5, 1, 2] (Pehle do items '1, 2' peeche chale gaye!)


// -------------------------------------------------------------------------
// Q8. Check karna ki ek string ke andar doosra word maujood hai ya nahi (Bina includes() ke)
// -------------------------------------------------------------------------
function manualInclude(str1, str2) {
    let len1 = str1.length; 
    let len2 = str2.length; 

    // Agar dhoondhne wala word main word se bada hai, toh mil hi nahi sakta!
    if (len2 > len1) return false;

    // Loop wahan tak chalayenge jahan tak str2 poora fit aa sake
    for (let i = 0; i <= len1 - len2; i++) {
        let match = true;

        // Ek-ek character matching check karenge
        for (let j = 0; j < len2; j++) {
            if (str1[i + j] !== str2[j]) {
                match = false; // Mismatch hote hi chhod do
                break;
            }
        }
        if (match) return true; // Agar saare characters match ho gaye toh true return karo
    }
    return false;
}
console.log("Q8. Substring check ('programming', 'gram'):", manualInclude("programming", "gram")); // Output: true
console.log("Q8. Substring check ('programming', 'gold'):", manualInclude("programming", "gold")); // Output: false