function palindrome() {
    let cleanStr = str.toLowerCase();
    let left = 0;
    let right = cleanStr.length - 1;
    while(left<right){
        if(cleanStr[left]!==cleanStr[right]){
            return false;
        }
    }
}