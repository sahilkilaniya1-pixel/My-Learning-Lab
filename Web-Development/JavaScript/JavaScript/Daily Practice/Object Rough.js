// 1. Object Creation & Accessing
// A. Creation (Object Literal)
// const person = {
    // name: "Sahil",
    // age: 22,
    // isCoder: true
// };
// console.log(person);
// console.log(person.name);
// console.log(person["age"]);
// Dynamic key Access Example

// 2. Objects WITH Built-in Methods
// const user = {name: "Rahul", city:"Rohtak", role:"Developer"};
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// B. Object.assign() aur Spread Operator (...)
// const obj1 = {a:1};
// const obj2 = {b:2};
// Spread Operator (Modern Way)
// const merged = {...obj1, ...obj2};
// console.log(merged);
// Object .assign
// const copied = Object.assign({}. obj1);
// console.log(copied);

// C. Immutability Methods (freeze vs seal)
const settings = {theme: "dark"};
Object.freeze(settings);
settings.theme ="light";
console.log(settings);