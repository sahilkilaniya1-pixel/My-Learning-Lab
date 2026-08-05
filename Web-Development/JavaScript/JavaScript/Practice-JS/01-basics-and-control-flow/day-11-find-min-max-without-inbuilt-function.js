// =========================================================================
// JAVASCRIPT FOUNDATION: ADVANCED ALGORITHMS & CORE CODING PATTERNS
// =========================================================================

// =========================================================================
// PATTERN 1: ARRAY EXTRACTORS (Find Max & Min)
// =========================================================================

/**
 * 🎯 QUESTION 1: Find Maximum and Minimum Elements
 * * Task: Array mein se sabse bada (Max) aur sabse chota (Min) number dhoondna hai.
 * Built-in helpers jaise Math.max() ya array.sort() use nahi karna hai.
 * 
 * * Logic: Pehle element (index 0) ko hi temporarily Max aur Min dono maan lo.
 * Fir index 1 se loop chalakar baaki saare elements se compare karo.
 * Agar koi naya number milta hai jo current 'max' se bada hai, toh use naya 'max' bana do.
 * Agar koi number current 'min' se chota hai, toh use naya 'min' bana do.
 */

function findMaxMin(arr) {
    // Edge Case: Agar array khali hai, toh pehle hi rok do
    if (arr.length === 0) return "Array is empty";

    let max = arr[0]; // Shuruat mein isi ko sabse bada maan liya
    let min = arr[0]; // Aur isi ko sabse chota bhi maan liya

    // Loop index 1 se shuru hoga kyunki index 0 ko hum already assume kar chuke hain
    for (let i = 1; i < arr.length; i++) {
        // Agar current number humare 'max' se bada nikal gaya...
        if (arr[i] > max) {
            max = arr[i]; // ...toh 'max' ko update kar do
        }
        // Agar current number humare 'min' se bhi chota nikal gaya...
        if (arr[i] < min) {
            min = arr[i]; // ...toh 'min' ko update kar do
        }
    }

    return { maximum: max, minimum: min };
}

console.log("--- Pattern 1: Find Max and Min Demo ---");
console.log("Result:", findMaxMin([7, 2, 15, 1, 9])); 
// Expected Output: { maximum: 15, minimum: 1 }
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 2: CYCLIC SHIFTING (Array Rotation)
// =========================================================================

/**
 * 🎯 QUESTION 2: Rotate Array Right by 'K' Positions
 * * Task: Array ko right side mein 'k' steps aage khiskana hai, 
 * par push(), pop(), ya shift() jaise methods ke bina.
 * 
 * * Logic: Ek mathematical modulo `%` formula ka use karenge.
 * Kisi bhi element ka naya index hamesha yeh hoga: (current_index + k) % array_length
 * Modulo (%) humari madad karta hai taaki jab index array ke baahar (boundary par) jaye, 
 * toh wo wapas ghantaghar ki tarah ghum kar shuruat (index 0) par aa jaye.
 */

function rotateArray(arr, k) {
    let n = arr.length;
    if (n <= 1) return arr; // Agar array mein 0 ya 1 element hai, toh rotate karne ki koi tension hi nahi hai
    
    let rotated = []; 
    
    // Agar k array ki length se bada hai (jaise length 4 hai aur k = 5), 
    // toh rotation ko safe limit mein rakhne ke liye length se modulo kar do. 
    // (5 % 4 = 1 step rotation)
    k = k % n; 

    for (let i = 0; i < n; i++) {
        let newIndex = (i + k) % n; // Cyclic shifting formula
        rotated[newIndex] = arr[i]; // Naye array mein element ko uske sahi naye pate (index) par bhej diya
    }

    return rotated;
}

console.log("--- Pattern 2: Array Rotation Demo ---");
console.log("Original Array: [10, 20, 30, 40], K = 1");
console.log("Rotated Array: ", rotateArray([10, 20, 30, 40], 1)); 
// Expected Output: [40, 10, 20, 30]
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 3: STATE TRACKING & TEXT PROCESSING (Word Count)
// =========================================================================

/**
 * 🎯 QUESTION 3: Count Words in a Sentence
 * * Task: Ek poore sentence mein kitne words hain, unhe count karna hai.
 * Lekin dhyan rahe—na toh .split(" ") use karna hai aur na hi koi regular expression!
 * 
 * * Logic: Hum ek boolean flag `inWord` ka use karke state ko track karenge.
 * Jab hume koi non-space character dikhega aur hum pehle se word ke andar nahi the (`inWord === false`),
 * iska matlab ek naya word shuru ho gaya hai! Hum count ko +1 badha denge aur `inWord` ko true kar denge.
 * Jaise hi koi space (" ") aayegi, hum `inWord` ko wapas false kar denge.
 * Is se beech ke f फालतू spaces (extra spaces) ignore ho jayenge.
 */

function countWords(str) {
    let wordCount = 0;
    let inWord = false; // Yeh track rakhega ki hum abhi kisi word ke boundary ke andar hain ya nahi

    for (let i = 0; i < str.length; i++) {
        // Agar current character space nahi hai
        if (str[i] !== " ") { 
            // Aur agar hum abhi tak word ke andar nahi chal rahe the...
            if (inWord === false) {
                wordCount++; // ...toh naya word mil gaya! Count badhao!
                inWord = true; // State badal do ki "haan, hum abhi word read kar rahe hain"
            }
        } else {
            // Jaise hi koi space (" ") milegi, hum word se baahar nikal gaye hain
            inWord = false; // State reset taaki agla character aate hi naya word detect ho sake
        }
    }

    return wordCount;
}

console.log("--- Pattern 3: Word Count Demo ---");
console.log("Word Count:", countWords("   Hello   bhai kaise   ho   ")); 
// Expected Output: 4 (Extra spaces skip ho gaye!)
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 4: TWO-POINTERS ALGORITHM (Palindrome Verification)
// =========================================================================

/**
 * 🎯 QUESTION 4: String Palindrome Verification
 * * Task: Check karo ki string palindrome (ulta-seedha ek barabar) hai ya nahi,
 * bina string ko reverse kiye.
 * 
 * * Logic: Hum use karenge Two-Pointer Technique!
 * Ek pointer `left` ko bilkul shuruat (0) par set karenge, aur dusre `right` pointer ko aakhir (length - 1) par.
 * Dono pointers ko ek-ek step beech ki taraf badhayenge aur har step par characters ko compare karenge.
 * Agar kahin par bhi mismatch hua, toh turant false bol kar nikal jayenge!
 */

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    // Jab tak left pointer right wale se peeche hai...
    while (left < right) {
        // Agar dono pointers par alag-alag characters mile...
        if (str[left] !== str[right]) {
            return false; // ...toh yeh pakka palindrome nahi hai!
        }
        left++;  // Left pointer ko ek step aage badhao
        right--; // Right pointer ko ek step peeche khiskao
    }

    return true; // Agar bina kisi rukaawat ke pointers aapas mein cross ho gaye, toh string solid palindrome hai!
}

console.log("--- Pattern 4: Palindrome Check Demo ---");
console.log("Is 'radar' a Palindrome?:", isPalindrome("radar")); // Expected Output: true
console.log("Is 'hello' a Palindrome?:", isPalindrome("hello")); // Expected Output: false
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 5: MULTI-POINTER MERGING (Merge Sorted Arrays)
// =========================================================================

/**
 * 🎯 QUESTION 5: Merge Two Sorted Arrays
 * * Task: Do sorted arrays ko merge karke ek single sorted array banana hai,
 * bina .concat() ya .sort() use kiye.
 * 
 * * Logic: Ek dam dhasu method! Dono arrays ke liye ek-ek pointer (`i` aur `j`) set karo 0 index par.
 * Dono arrays ke current elements ko compare karo. Jo element chota hoga, use hum naye `merged` array mein daal denge,
 * aur sirf usi array ke pointer ko ek step aage badhayenge.
 * Jab dono mein se koi ek array khatam ho jayega, toh dusre array mein bache huye saare elements ko as-it-is naye array ke peeche add kar denge.
 */

function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0; // arr1 ka track rakhne ke liye pointer
    let j = 0; // arr2 ka track rakhne ke liye pointer

    // Loop tab tak chalega jab tak dono arrays mein elements bache hain
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged[merged.length] = arr1[i]; // arr1 ka element chota tha, toh use pehle naye array mein dala
            i++; // arr1 ke pointer ko aage badha diya
        } else {
            merged[merged.length] = arr2[j]; // arr2 ka element chota ya barabar tha, toh use dala
            j++; // arr2 ke pointer ko aage badha diya
        }
    }

    // Agar arr2 khatam ho gaya par arr1 mein abhi bhi elements bache hain...
    while (i < arr1.length) {
        merged[merged.length] = arr1[i]; // ...toh baaki bache elements ko end mein append kar do
        i++;
    }

    // Agar arr1 khatam ho gaya par arr2 mein abhi bhi elements bache hain...
    while (j < arr2.length) {
        merged[merged.length] = arr2[j]; // ...toh baaki bache elements ko end mein append kar do
        j++;
    }

    return merged;
}

console.log("--- Pattern 5: Merge Sorted Arrays Demo ---");
console.log("Merged Result:", mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Expected Output: [1, 2, 3, 4, 5, 6]
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 6: STRING COMPRESSION / LOOK-AHEAD SEGMENTATION
// =========================================================================

/**
 * 🎯 QUESTION 6: String Compression (Run-Length Encoding)
 * * Task: Characters ki repetition ke hisab se string ko compress karo.
 * Jaise "aabcccccaaa" ko badal kar "a2b1c5a3" banana hai.
 * Agar compressed string ki length original string se badi ya barabar aati hai, toh original string hi return karni hai.
 * 
 * * Logic: "Look-ahead" approach. Loop chalate waqt check karo ki kya current character `str[i]` 
 * agle character `str[i+1]` se milta hai. Agar haan, toh count ko +1 badhate jao.
 * Jaise hi naya character dikhega, hum use aur uske total count ko final string mein jodh (append) denge,
 * aur count ko wapas 1 par reset kar denge.
 */

function compressString(str) {
    if (str.length === 0) return str;

    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        // Look-ahead check: compare current character with the next character
        if (str[i] === str[i + 1]) {
            count++; // Same character milte hi count badhaya
        } else {
            // Sequence break ho gaya! Ab character aur uski frequency ko output mein daal do
            compressed += str[i] + count;
            count = 1; // Count ko wapas reset kiya agle characters ke liye
        }
    }

    // Optimization check: Agar compress karne ke baad string choti nahi hui, toh bina baat compress karne ka kya fayda?
    // "abc" ka compressed "a1b1c1" (6 characters) hoga, jo original "abc" (3 characters) se bada hai!
    if (compressed.length >= str.length) {
        return str; // Toh original hi return kar do
    }

    return compressed;
}

console.log("--- Pattern 6: String Compression Demo ---");
console.log("Compressed 'aabcccccaaa':", compressString("aabcccccaaa")); // Expected Output: "a2b1c5a3"
console.log("Compressed 'abc':        ", compressString("abc"));         // Expected Output: "abc"
console.log("\n-------------------------------------------");


// =========================================================================
// PATTERN 7: MATHEMATICAL INFERENCE (Arithmetic Progression Sum Optimization)
// =========================================================================

/**
 * 🎯 QUESTION 7: Find the Missing Number
 * * Task: Array mein 1 se lekar 'n' tak ke distinct numbers hain, par unme se ek exact number gayab hai.
 * Bina sort kiye aur bina array methods use kiye us gayab number ko dhoondna hai.
 * 
 * * Logic: Yeh maths ka kamaal hai! 1 se lekar 'n' tak ka mathematical sum total ka formula hota hai:
 * TotalSum = (n * (n + 1)) / 2
 * Hum mathematically full sum calculate karenge, fir array ke saare numbers ko manually sum up karenge.
 * Jab hum dono sums ke beech ka difference (minus) nikalenge, toh bacha hua number wahi hoga jo missing tha!
 */

function findMissingNumber(arr, n) {
    // 1. Target theoretical sum nikaal lo jo bina kisi missing number ke hona chahiye tha
    let totalSum = (n * (n + 1)) / 2;

    // 2. Jo numbers array mein sach mein hain, un sab ka real total nikaalo
    let arraySum = 0;
    for (let i = 0; i < arr.length; i++) {
        arraySum += arr[i];
    }

    // 3. Dono ke difference se missing number turant bahar aa jayega!
    return totalSum - arraySum;
}

console.log("--- Pattern 7: Find Missing Number Demo ---");
console.log("Missing Element:", findMissingNumber([1, 2, 4, 5], 5)); 
// Expected Output: 3
console.log("\n-------------------------------------------");