function reverseString(str){
    let reversed = "";
    for(let i = str.length-1; i>=0; i--){
        reversed +=str[i];
    }
    return reversed;
}
console.log(reverseString("sahil"));



function findLargestnum (arr){
    if(arr.length===0) return null;
    let max = arr[0];
    for(let i =1; i< arr.length; i++){
        if(arr[i] >max){
            max=arr[i];
        }
    }
    return max;
}
console.log(findLargestnum([1,2,3,4,5]));

function isPalindrome(test) {
    let cleanedtext = test.toUpperCase().replace(/\s+/g, '');
    let reversetext = cleanedtext.split('').reverse().join('');
    return cleanedtext === reversetext;
} console.log(isPalindrome("sah il"));


function removeDuplicate(arr){
    return[...new Set(arr)];
}
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5, 5, 6, 3, 4, 1, 4]));





