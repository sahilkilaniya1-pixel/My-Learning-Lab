// Word count without the built-in function
const wordcount = (word) => {
    let count = 0;
    let in_word = false;
    for (let i = 0; i <= word.length - 1; i++) {
        if (word[i] == "") {
            in_word = false;
        } else {
            if (in_word == false) {
                count++;
                in_word = true;
            }
        }
    }
    return count;
};
console.log(wordcount("hey i am sahil"))



// =========== 2nd ===================
const countword = (word) => {
    let count = 1;
    for (let i = 0; i <= word.length - 1; i++) {
        if (word[i] == " ") {
            count++
        }
    }
    return count;
};
console.log(countword("We are indians"))






// ================ 3rd =========================
function reverseWordsKeepSpaces(str) {
    let result = "";
    let currentWord = "";
    // We will loop through every character of the string.
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            // If there is no space, add the letter to the beginning of currentWord
            // This will automatically reverse the word
            currentWord = str[i] + currentWord;
        } else {
            // If a space is found, add the word that has been reversed so far to the result.
            result += currentWord + " ";
            currentWord = "";   // Clear it for the next word
        }
    }
    // There is no space after the last word, so after the loop finishes,
    // it is necessary to add the remaining reversed word to the result as well.
    result += currentWord;

    return result;
}
// Testing
const originalStr = "I am human";
const output = reverseWordsKeepSpaces(originalStr);

console.log("Original: " + originalStr);
console.log("Output:   " + output);
// Output: "I ma namuh"