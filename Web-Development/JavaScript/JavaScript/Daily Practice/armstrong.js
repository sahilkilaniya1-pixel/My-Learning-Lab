function isArmstrong(num){
    if(num<0) return false;
    let original = num;
    let digitCount = num.toString().length;
    let sum = 0;
    while(original>0){
        let lastDigit = original %10;
        sum+=Math.pow(lastDigit,digitCount);
        original = Math.floor(original/10);
    }
    return sum===num;
}
console.log(isArmstrong(153));
console.log(isArmstrong(1634));
console.log(isArmstrong(123));
console.log(isArmstrong(9));