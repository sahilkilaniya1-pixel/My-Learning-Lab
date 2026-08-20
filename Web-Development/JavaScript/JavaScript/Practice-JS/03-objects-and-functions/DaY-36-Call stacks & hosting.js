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


// Example 1: Function Declaration (Sahi Chalega)
function sayHello (){
    console.log("Hello")
}
sayHello(); // Output: Hello

// Example 2: Function Expression (ReferenceError)
sayHello(); // ❌ Error!
let sayHello = function(){
    console.log("Hello");
}



// function call stack -> container -> LIFO last in first one
                // |-> Data Structure 