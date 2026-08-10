// 1. Basics (Foundations)
// Object Creation & Access Syntax
const user = {
    name: "Sahil",
    age: 23,
    "Current City":"Rohtak",
};
// Dot Notation vs Bracket Notation
console.log(user.name);
console.log(user["Current City"]);

// Dynamic Key Access
console.log(user.age);


// Adding, Modifying & Deleting Properties
const car = {brand:"Tata"};
car.model = "Nexon"; //Add new car
car.brand = "Mahindra"; //update existing key
delete car.model; //Delete 


// Checking Existence & Iteration
const person = {name: "sahil", role:"security"};