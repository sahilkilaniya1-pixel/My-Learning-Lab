car = {
    "Brand": "toyota",
    "model" : "brezza",
    "year" : 2020
};
car.year = 2026;
console.log(car);


let a = 5;
let b = "5";
console.log(a == b);  // double equal only check data not data type
console.log(a === b);   // triple equal always check data and data type
// output  1st true and second false


console.log(typeof null);


function greet(){
    console.log("hello, kaise ho aap")
}
greet()
greet()

function greet(){
    console.log("Hello kaise ho aap?")
}
greet()

function add(x, y){
    let result = x+y;
    return result;
}
let total = add(5,10);
console.log(total);


function add(x, y){
    let result = x+y;
    return result;
}
let total1 = add(5,10);
console.log(total1);

const multiply = function(a, b){
    return a* b
};
console.log(multiply(5,9));

const multiply1 = function(x, y){
    return x* y
};
console.log(multiply1(10,100));

const square = (n) => n*n;
console.log(square(8));

const sq = (n) =>n*n;
console.log(sq(7));


function findEvenNumber (...arr){
    return arr.filter(num => num %2===0);
}
console.log(findEvenNumber(2,3,4,5,5,6,67,11,8,9,1011));


function findEvenNum(...arr){
    let evenList = [];
    for(let i =0; i< arr.length; i++){
        if(arr[i]% 2 === 0){
            evenList.push(arr[i]);
        }
    }
    return evenList;
}console.log(findEvenNum(2,3,4,5,56,88,7,8,8,9,10,99));


function sayHi(){
    return
    {
        name: "Rahul"
    };
};
console.log(sayHi());