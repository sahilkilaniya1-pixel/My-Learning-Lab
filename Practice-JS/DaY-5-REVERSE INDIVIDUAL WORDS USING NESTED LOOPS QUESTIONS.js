// =========================================================================
// REVERSE INDIVIDUAL WORDS USING NESTED LOOPS (FIXED & OPTIMIZED)
// =========================================================================

function reverseWordsNested(str) {
    let word = "";      //Temporary Container
    let result = "";    //Final Result Container

    // Loop runs from 0 up to str.length (inclusive) to catch the last word
    for (let i = 0; i <= str.length; i++) {
        
        // Check if we hit a space OR if we reached the absolute end of the string
        if (str[i] === " " || i === str.length) {
            
            // Inner Loop: Reverse the accumulated 'word' manually
            for (let j = word.length - 1; j >= 0; j--) {
                result = result + word[j];
            }

            // Add a space after the reversed word, but ONLY if it's not the last word
            if (i < str.length) {
                result = result + " ";
            }

            word = ""; // Reset the word container for the next word
        } else {
            // Build the word character by character
            word = word + str[i];
        }
    }
    return result;
}

// Testing the function
let text = "i am sahil";
console.log("Original String:", text);   // Output: i am sahil
console.log("Reversed Words:  ", reverseWordsNested(text)); // Output: i ma lihas