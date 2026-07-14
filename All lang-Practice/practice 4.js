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




function findmanual(...arr){
    let max =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]> max){
            max =arr[i];
        }
    }
    return max;
}
console.log(findmanual(10,20,30,40,50,60));



function findMaxbuiltin(...arr){
    return Math.max(...arr);
}
console.log(findMaxbuiltin(10,20,30,40,50,60));



function hasKeyManual(obj,searchKey){
    for(let key in obj){
        if(key ===searchKey){
            return true;
        }
    }
    return false;
}
console.log(hasKeyManual({name:"sahil",age: 20},"age"));


function hasKeybuitlin(obj, searchKey){
    return searchKey in obj;
}
console.log(hasKeyManual({name:"sahil",age: 20},"age"));

function doubleNummanual(...arr){
    let result = [];
    for(let i =0; i< arr.length; i++){
        if(arr[i] % 2 ===0){
            result.push(arr[i]* 2);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(doubleNummanual(1,2,3,4,5)); 

function doubleNummanualBuilt(...arr){
    return arr.map(num => num% 2===0 ? num* 2: num);
}
console.log(doubleNummanualBuilt(1,2,3,4,5)); 



