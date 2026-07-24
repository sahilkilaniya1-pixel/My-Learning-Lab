// Question 1: loop scoping (var vs let inside asynchronous code):
for (var i=0; i<3; i++){
    setTimeout(()=> console.log("var:",i),100);
}
for(let j=0; j<3; j++){
    setTimeout(()=> console.log("let:",j),100)
}

// // Question 2: Shallow copy vs deep mutation (Spread Operator..)
let original = {
    name: "Laptop",
    details: {brand:"Dell", price: 50000}
};
let copy = {...original};
copy.name = "Phone",
copy.details.price = 60000;
console.log("Original name:", original.name);
console.log("Original.details.price:",original.details.price);

// 🎯 Question 4: Closures & Lexical Scope
function createCounter(){
    let count =0;
    return function(){
        count++;
    };
}
const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());

// 🎯 Question 5: Object Immutability (Object.freeze)
const person = Object.freeze({
    name: "sahil",
    address: {city: "Rohtak"}
});
person.name="kilaniya";
person.address.city = "Mumbai";
console.log(person.name);
console.log(person.address.city);
