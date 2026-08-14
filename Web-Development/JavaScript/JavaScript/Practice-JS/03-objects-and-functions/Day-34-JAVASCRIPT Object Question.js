/*
Question 1: Deep Flatten Object
Kya aur Kyun Karna Hai?
Nested object mein keys ke andar keys hoti hain (user.address.city). Flattening ka matlab hai saari internal keys ko ek hi level par laana aur keys ka naam parent path ke sath jodna (jaise address.city).
*/

function flattenObject(obj, parentKey = '',result = {}){
    