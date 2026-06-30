// =========================================================================
// JAVASCRIPT STRING WORD PROBLEMS - INTERVIEW PRACTICE
// =========================================================================

// -------------------------------------------------------------------------
// Q1. Advanced Word Count Algorithm (Handles Multiple Spaces Accurately)
// -------------------------------------------------------------------------
// Description: Counts words by tracking state ('in_word').
// This prevents false counts when multiple spaces are placed consecutively.
const wordCountAdvanced = (str) => {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < str.length; i++) {
        // Fixed: Changed empty string "" to a proper space check " "
        if (str[i] === " ") {
            inWord = false; // We hit a space, so we are no longer inside a word
        } else {
            // If we are transitioning from a space to a fresh word
            if (inWord === false) {
                count++;
                inWord = true; // Mark state as inside a word
            }
        }
    }
    return count;
};

// Testing Q1:
console.log(wordCountAdvanced("hey i am sahil"));
// Output: 4


// -------------------------------------------------------------------------
// Q2. Simple Word Count (Counts spaces between standard sentences)
// -------------------------------------------------------------------------
// Description: Assumes standard single spaces between words and starts count at 1.
const wordCountSimple = (str) => {
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            count++;
        }
    }
    return count;
};

// Testing Q2:
console.log(wordCountSimple("We are indians"));
// Output: 3


// -------------------------------------------------------------------------
// Q3. Reverse Individual Words in a Sentence While Keeping Spaces Intact
// -------------------------------------------------------------------------
// Description: Iterates through characters, building words backwards, 
// and stitches them back together whenever a space delimiter is identified.
function reverseWordsKeepSpaces(str) {
    let result = "";
    let currentWord = "";

    // Loop through every character of the string
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            // If it's not a space, prepend the character to currentWord
            // This operation automatically mirrors/reverses the word
            currentWord = str[i] + currentWord;
        } else {
            // Once a space is met, append the reversed word and space to result
            result += currentWord + " ";
            currentWord = ""; // Flush/Reset container for the next word
        }
    }

    // Cleanup Step: Since the final word does not end with a trailing space, 
    // we manually append the last stored 'currentWord' after the loop finishes.
    result += currentWord;

    return result;
}

// Testing Q3:
const originalStr = "I am human";
const output = reverseWordsKeepSpaces(originalStr);

console.log("Q3. Original Sentence: " + originalStr); // "I am human"
console.log("Q3. Reversed Sentence: " + output);      // "I ma namuh"