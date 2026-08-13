// 1. Basics (Foundations)
// Object Creation & Access Syntax
const user = {
  name: "Sahil",
  age: 23,
  Current_City: "Rohtak",
};
// Dot Notation vs Bracket Notation
console.log(user.name);
console.log(user.Current_City);

// Dynamic Key Access
console.log(user.age);

// Adding, Modifying & Deleting Properties
const car = { brand: "Tata" };
car.model = "Nexon"; //Add new car
car.brand = "Mahindra"; //update existing key
delete car.model; //Delete

// Checking Existence & Iteration
const person = { name: "sahil", role: "security" };

//Check if key exists
console.log("role" in person); //true
console.log(person.hasOwnProperty("name")); //true

//loop through keys
for (let key in person) {
  console.log(key, person[key]);
}

// Built-in Utility Methods
console.log(Object.keys(person)); //["name","role"]
console.log(Object.values(person)); //["Aman",Security]
console.log(Object.entries(person)); //["name","Sahil"],["role","Security"]


