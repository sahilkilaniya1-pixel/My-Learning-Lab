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
const countword =(word) =>{
    let count =1;
    for(let i = 0; i<=word.length-1; i++){
        if(word[i]==" "){
            count ++
        }
    }
    return count;
};
console.log(countword("We are indians"))