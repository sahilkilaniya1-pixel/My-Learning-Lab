function inArmstrong(num){
    if(num<0) return false;
    let temp = num;
    let digitCount = num.toString().length;
    let sum = 0;
    while(temp>0){
        let lastDigit = temp %10;
        sum+=Math.pow(lastDigit,digitCount);
        temp = Math.floor(temp/10);
    }
    return sum===num;
}