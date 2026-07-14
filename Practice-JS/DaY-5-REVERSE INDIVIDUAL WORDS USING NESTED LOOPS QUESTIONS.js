// =========================================================================
// REVERSE INDIVIDUAL WORDS USING NESTED LOOPS (SUPER EASY HINGLISH GUIDE)
// =========================================================================

function reverseWordsNested(str) {
    let word = "";      // Ek-ek karke jo word milega, use is temporary box mein rakhenge
    let result = "";    // Final ulta kiya hua sentence isme store hoga

    // Loop ko hum str.length tak chalayenge (isliye '<=' lagaya hai)
    // Taaki jab string khatam ho jaye, tab bhi loop chale aur aakhiri word process ho sake
    for (let i = 0; i <= str.length; i++) {
        
        // Check karo: Kya hume space mila hai? OR Kya hum bilkul string ke aakhir (end) mein pahunch gaye hain?
        if (str[i] === " " || i === str.length) {
            
            // --- Inner Loop (Andar wala loop) ---
            // Jaise hi space ya string ka end mila, hum is temporary 'word' ko ulta (reverse) karenge
            // Isme loop peeche se shuru hoga aur pehle character tak chalega
            for (let j = word.length - 1; j >= 0; j--) {
                result = result + word[j]; // Ulte aksharo ko ek-ek karke final result mein jodte gaye
            }

            // Agar yeh aakhiri word nahi hai (yaani string ke beech mein hai),
            // toh word reverse karne ke baad ek space " " jodd do
            if (i < str.length) {
                result = result + " ";
            }

            word = ""; // Naye word ko shuru se banane ke liye is temporary box ko khali (reset) kar do
        } else {
            // Agar space nahi mila, toh matlab abhi word chal raha hai!
            // Ek-ek character ko uthakar 'word' wale box mein jodte jao
            word = word + str[i];
        }
    }
    return result;
}

// Testing the function
let text = "i am sahil";
console.log("Original String:", text);   // Output: i am sahil
console.log("Reversed Words:  ", reverseWordsNested(text)); // Output: i ma lihas