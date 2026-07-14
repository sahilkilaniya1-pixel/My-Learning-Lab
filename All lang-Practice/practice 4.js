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

function countword(str, char){
    let count =0;
    for(let i = 0; i<str.length; i++){
        if(str [i]=== char){
            count ++;
        }
    }
    return count;
}
console.log(countword("sahil", "a"));
console.log(countword("sahil", "l"));

function countchar(str, char){
    return str.split(char).length -1;
}
console.log(countword("sahil", "a"));



