const numbersArray = [2, 4, 6, 2, 0, 56, 32, 65, 78, 65, 78, 95];
const mixedArray = [2, 4, 5, 3, 5, 3, 2, 5, "a", "b"];
const namesList = ["Aayush", "Sahil", "Akshya"];
const usersDataset = [
  { name: "John", age: 17, isActive: true },
  { name: "Jane", age: 22, isActive: false },
  { name: "Bob", age: 19, isActive: true },
  { name: "Alice", age: 25, isActive: true }
];


function cloneArray (source){
    let clone = [];
    for(let i =0; i< source.length; i++){
        clone[clone.length] =source[i];
    }
    return clone;
}


const ascendingResult = cloneArray(numbersArray);
for(let i  =0; i < ascendingResult.length; i++){
    for(let j =0; j < ascendingResult.length -1 -i; j++){
        if(ascendingResult[j] > ascendingResult [j+1]) {
            let temp = ascendingResult[j];
            ascendingResult[j] = ascendingResult [j+1];
            ascendingResult[j+1] = temp;
        }
    }
}
console.log(ascendingResult);



const descendingResult = cloneArray(numbersArray);
for(let i =0; i< descendingResult.length; i++){
    for(let j =0; j< descendingResult.length -1-i; j++){
        if(descendingResult[j]< descendingResult[j+1]){
            let temp = descendingResult[j];
            descendingResult[j] = descendingResult[j+1];
            descendingResult[j+1]= temp;
        }
    }
}
console.log(descendingResult);



let max1= Infinity;
let max2 =  Infinity;
for(let i =0; i< numbersArray.length; i++){
    if(numbersArray[i] > max1){
        max2 = max1;
        max1 = numbersArray[i];
    } else if (numbersArray[i]> max2){
        max2 = numbersArray[i];
    }
}
const productOfTwoLargest = max1 * max2;
console.log(productOfTwoLargest);