// let var const
//  mostly use let
let age = 20;
age = 21;
age= 25;
console.log(age);


const pi = 3.14;
// pi = 3.15;   show error becuase const value cant update
console.log(pi);


let score = 20;
let price = 20.22;
console.log(score,price); // both result show


let name = "sahil";
console.log(name); // output = sahil


letisLoggedIn = true;
console.log(letisLoggedIn); // output true


let x;
console.log(x); // undefined

let data = null;
console.log(data);  // null


let score1 = 100;  // number
let name1 = "amit";  //string
console.log(typeof score);
console.log(typeof name);


let result = 10 + "20";  //1020  concatenate
console.log(result);
let dynamic = "5" -2;   // output 3
console.log(dynamic);


let fruits = ["apple","mango","orange"];
console.log(fruits);

let mixedData = ["sahil",25, true];
console.log(mixedData);

let cars = ["verna","brezza","amaze","vitara"];
console.log(cars[0]);  // verna
console.log(cars[1]);  //brezaa
console.log(cars[2]); // amaze



let StudentsData ={
    firstName : "Sahil",
    lastName : "kilaniya",
    age : 24,
    State : "Haryana",
    City : "rohtak",
    pincode : 124001
};
// console.log(StudentsData);
console.log(StudentsData.firstName); //output: sahil
console.log(StudentsData.age);      //age : 24

let products = [
    {id: 1, name: "Laptop", price:50000},
    {id: 2, name: "Mobile", price:10000},
    {id: 3, name: "Headphones", price:2000}
];
// console.log(products);
console.log(products[0].name);