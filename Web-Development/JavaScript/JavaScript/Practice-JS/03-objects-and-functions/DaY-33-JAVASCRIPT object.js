// Level 1 (Basic): Character Frequency Counter
/*
Problem: Ek string given hain. har character kitni baar repeat hua hain, uska object bana kar return karo.

Approch: Loop chalao, agar key pehle se object mein hai toh +1 karo, nahi 1 assign karo.
*/
function getCharacterFrequency(str) {
    const count = {};
    for (let char of str) {
        if (char === ' ')
            continue;

        count[char] = (count[char] || 0) + 1;
    }
    return count;
}
console.log(getCharacterFrequency("Javascript"));

// Level 2(intermediate): grouping Array of Objects
/*

*/