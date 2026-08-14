function palindrome(str) {
    let cleanStr = str.toLowerCase();
    let left = 0;
    let right = cleanStr.length - 1;
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(palindrome("madam"));
console.log(palindrome("RaEcar"));
console.log(palindrome("coding"));