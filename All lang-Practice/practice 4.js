function reverseWord(str){
    let reversed = "";
    for(let i = str.length-1; i>=0; i--){
        reversed = reversed+str[i];
    }
    return reversed;
}
console.log(reverseWord("sahil"));

function reversedWordBuiltin(str){
    return str.split("").reverse().join("");
}
console.log(reversedWordBuiltin("sahil"));

function wordCount(str, char){
    let count =0;
    for(let i =0; i<str.length; i++){
        if(str[i]===char){
            count ++;
        }
    }
    return count;
}
console.log(wordCount("sahil", "a"));
console.log(wordCount("sahil", "l"));



function countWord(str,char){
    return str.split("").reverse().join("");
}
console.log(countWord("sahil","a"));



function countCharManual(str, char){
    let count =0;
    for(let i=0; i<str.length; i++){
        if(str[i] === char){
            count ++;
        }
    }
    return count;
}
console.log(countCharManual("sahil","a"));









