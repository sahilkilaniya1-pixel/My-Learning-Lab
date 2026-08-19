//Function definition
function sayMyName(){
    console.log("Sahil")
}
//Function use - function call
sayMyName();


// function printCounting(){
//     for(let i=1; i<=10; i++){
//         console.log(i);
//     }
// }
// printCounting();


//parameter:
function printNumber(num){ //num- parameter
    console.log("printing Number:",num);
}
printNumber(5); // argument call


//Multiparameter
function getAverage(num1, num2){
    let avg = (num1+num2)/2;
    