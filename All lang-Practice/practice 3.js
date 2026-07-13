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