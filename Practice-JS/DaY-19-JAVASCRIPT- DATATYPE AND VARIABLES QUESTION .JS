// Part 1: Basic to Advanced Variable Concepts
// 1. Variables Kya Hain? (Basic)
// Variable bas ek container ya labeled memory box hai, jisme hum data store karte hain taaki code mein aage use kar sakein.

// 2. Variables Kaise declare hote hain?
// Modern JavaScript/Python contexts mein variables alag tarah se behave karte hain:

// JavaScript: var (Old, function-scoped), let (Re-assignable, block-scoped), const (Constant/Immutable binding, block-scoped).

// Python: Dynamically typed — direct name se assign hota hai (x = 10).

// 3. Data Types: Primitive vs. Non-Primitive (Intermediate)
// Primitive (Value Types): Numbers, Strings, Booleans, Null, Undefined. Ye Value by Value pass hote hain (naya copy banta hai).

// Non-Primitive (Reference Types): Objects, Arrays, Functions. Ye Memory Address (Reference) share karte hain.

// 4. Advanced Concepts: Scope, Hoisting & Mutation
// Scope: Variables kahan tak accessible hain (Global Scope, Function Scope, Block Scope {}).

// Hoisting: Declaration ka memory top par shift hona (JS Specific).

// Pass by Value vs Pass by Reference:

// Jab aap primitive variable dusre ko dete ho, to value copy hoti hai.

// Jab aap array/object dusre ko dete ho, to memory location share hoti hai (ek jagah change karne par dono badalte hain).

// Question 1: Primitive Copy (Basic)
let a = 10;
b= a;
b=20;
console.log("a:",a);
console.log("b:",b);

// Question 2: Pass by reference/Mutation (Intermediate)
let arr1 = [1,2,3];
let arr2 =arr1;
arr2.push(4);
console.log("arr1:",arr1);
console.log("arr2:",arr2);

// Question 3: block Scope vs function Scope (Advanced)
function testScope(){
    if(true){
        var x = "var variable";
        let y = "Let variable";
    }
    console.log(x);
    // console.log(y);
}
testScope();
// var Function-scoped hota haini, isliye if block ke bahar bhi access ho gaya.
// let Block-Scoped {} hota hai, isliye if block khatam hote hi y destory ho jata hai aur if ke bahar error deta hai.

// Question 4: Const Object Mutation (Advanced)
const user = {name:"sahil", age:25};
user.age = 26;
console.log(user);
// Const ka matlab hota hai ki aap varibale ki binding/reference change nahi kar sakte (user ==... nahi kr sakte - Line B error degi).lekin const object ki andar ke properties ko chnage (mutate )kar sakte ho (Line A bilkul valid hai).


// In question ko dhyan se dekho aur inka Output /Reason khud nikalne ki koshish karo:
let num1= 5;
let num2="5"
console.log(num1+num2);
console.log(num1*num2);

// Question 2:
let obj1 ={val:100};
let obj2 ={val:100};
console.log(obj1==obj2);

// Quesiton 3:
let c = [10];
let d = c;
d=[20];
d.push(30);
console.log("a:",a);
console.log("b:",b);

// Question 4:
var e = 1;
function demo() {
  console.log(e);
  var e = 2;
}
demo();


// Question 1: Temporal Dead Zone(TDZ) & Scope
let f =10;
function testTDZ(){
    console.log(f);
    let f = 20;
}
testTDZ();