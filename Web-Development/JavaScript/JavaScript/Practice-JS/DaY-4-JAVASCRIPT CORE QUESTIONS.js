// =========================================================================
// JAVASCRIPT CORE - INTERVIEW PRACTICE (SUPER EASY HINGLISH GUIDE)
// =========================================================================

// -------------------------------------------------------------------------
// Q1. Advanced Word Count Algorithm (Faltu ke extra spaces ko handle karne wala)
// -------------------------------------------------------------------------
// Concept: Yeh algorithm sirf spaces nahi ginta, balki yeh check karta hai ki
// hum abhi kisi word ke 'andar' hain ya 'baahar'. Isse agar beech mein 2-3 spaces
// ek sath aa jayein, toh bhi count galat nahi hota.
const wordcount = (word) => {
    let count = 0;      // Total kitne words mile, uska counter
    let inWord = false; // Yeh track karega ki hum kisi word ke andar hain ya nahi

    for (let i = 0; i < word.length; i++) { 
        if (word[i] === " ") { 
            // Agar space mil gaya, matlab hum word ke baahar aa gaye hain
            inWord = false;
        } else { 
            // Agar space nahi mila (koi letter mila), toh check karo:
            // Kya hum naye word par aaye hain? (agar inWord pehle se false tha)
            if (!inWord) { 
                count++;       // Naya word mila toh counter ko +1 badha do
                inWord = true; // State change kar do ki ab hum word ke andar hain
            }
        }
    }
    return count;
};

console.log("Q1. Advanced Count:", wordcount("We are   Indians")); // Outputs: 3 (Double space ko sahi handle kiya!)


// -------------------------------------------------------------------------
// Q2. Simple Word Count (Sirf spaces ko ginne wala aasan tarika)
// -------------------------------------------------------------------------
// Note: Yeh tarika tabhi kaam karega jab words ke beech mein sirf ek hi space ho,
// aur starting count 1 se shuru hoga kyunki aakhiri word ke baad space nahi hota.
const wordCountSimple = (str) => {
    let count = 1; // Maan ke chalte hain ki minimum 1 word toh hoga hi

    for (let i = 0; i < str.length; i++) {
        // Agar loop chalte chalte beech mein space mile, toh count badha do
        if (str[i] === " ") {
            count++;
        }
    }
    return count;
};

// Testing Q2:
console.log("Q2. Simple Count:", wordCountSimple("We are indians")); // Output: 3


// -------------------------------------------------------------------------
// Q3. Sentence ke har word ko ulta karna par spaces ko wahi rakhna
// -------------------------------------------------------------------------
// Example: "I am human" ban jayega "I ma namuh"
function reverseWordsKeepSpaces(str) {
    let result = "";      // Poora aakhiri sentence isme store hoga
    let currentWord = ""; // Ek-ek karke jo word banega, wo isme rahega

    // Loop se hum string ke ek-ek character ke upar jayenge
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            // Agar space nahi hai, toh character ko naye word ke aage lagao (prepend karo)
            // Jaise: agar currentWord "a" hai aur naya letter "m" aaya, toh "m" + "a" = "ma" (ulta ho gaya!)
            currentWord = str[i] + currentWord;
        } else {
            // Jaise hi koi space mile, matlab ek word khatam ho gaya!
            // Pehle se ulta kiya hua word aur ek space 'result' mein jodd do
            result += currentWord + " ";
            currentWord = ""; // Naye word ke liye container ko wapas khali (reset) kar do
        }
    }

    // Loop khatam hone ke baad, aakhiri word ke baad space nahi hota, 
    // isliye aakhiri bacha hua word (currentWord) hum manually end mein jodd denge.
    result += currentWord;

    return result;
}

// Testing Q3:
const originalStr = "I am human";
const output = reverseWordsKeepSpaces(originalStr);

console.log("Q3. Original Sentence: " + originalStr); // "I am human"
console.log("Q3. Reversed Sentence: " + output);      // "I ma namuh"