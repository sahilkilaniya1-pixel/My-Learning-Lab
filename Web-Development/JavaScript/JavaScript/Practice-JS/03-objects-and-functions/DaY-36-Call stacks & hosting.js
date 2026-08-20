//Call stack & Hosting

//Hosting -> process  -> var  and func -> shift to the top in their stage

function sayMyName(finalName) {
    console.log(finalName);
}
sayMyName("Sahil");



//Variable hosting
// console.log(age);  //undefined 
var age = 25;
console.log(age); // 25



//Function dec
// sayHello();
// function sayHello () {
//     console.log("Hello");
// }// Hello



//function exp
sayHello();
let sayHello = function(){
    console.log("Hello");
}///reference Error