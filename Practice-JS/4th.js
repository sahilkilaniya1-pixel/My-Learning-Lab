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

    // Hum string ke har ek character par loop chalayenge
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            // Agar space nahi hai, toh letter ko currentWord ke SHURUAT mein jodo
            // Isse word apne aap ulta (reverse) hota chala jayega
            currentWord = str[i] + currentWord;
        } else {
            // Agar space mil gaya, toh jo word abhi tak ulta hua hai use result mein dalo
            result += currentWord + " ";
            currentWord = ""; // Agle word ke liye khali kar do
        }
    }

    // Aakhri word ke baad koi space nahi hota, isliye loop khatam hone ke baad 
    // bacha hua aakhri reversed word bhi result mein jodna zaroori hai
    result += currentWord;

    return result;
}

// Testing
const originalStr = "I am human";
const output = reverseWordsKeepSpaces(originalStr);

console.log("Original: " + originalStr);
console.log("Output:   " + output);
// Output: "I ma namuh"