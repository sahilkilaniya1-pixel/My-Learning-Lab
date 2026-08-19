//Function definition
function sayMyName() {
    console.log("Sahil")
}
//Function use - function call
sayMyName(); //Sahil


// function printCounting(){
//     for(let i=1; i<=10; i++){
//         console.log(i);
//     }
// }
// printCounting();


//parameter:
function printNumber(num) { //num- parameter
    console.log("printing Number:", num);
}
printNumber(5); // argument call
// printing Number: 5




//Multiparameter
function getAverage(num1, num2) {
    let avg = (num1 + num2) / 2;
    console.log("Average:", avg);
}
getAverage(3, 70); //Average: 36.5



function getSum(a, b, c) {
    let sum = a + b + c;
    return sum;
}
let ans = getSum(1, 2, 3);
console.log("Printing Sum:", ans); //Printing Sum: 6




function getMyname(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
    //Unreachable statements
    // let a = 10;
    // let b = 15;
    // let sum = a+b;
    // console.log(sum,);
}
let fullname = getMyname("Sahil", "Kilaniya");
console.log("Full name", fullname);  //Full name Sahil Kilaniya




const getMultiplication = function (a, b) {
    return a * b;
}
let output =(getMultiplication(2, 10));
console.log(output);




let squareNumber = function(num){
    let solve = num**2;
    return ans;
}
