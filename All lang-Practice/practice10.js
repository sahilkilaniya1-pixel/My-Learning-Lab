console.log(typeof null); //Object  due to old version
console.log(typeof undefined); //undefined

console.log("5"+3);   //55
console.log("5"-3);     //2

let a =10;
b=a;
b=20;
console.log(a); //10


let d = 10;
let e = a

const obj1 = {name: "Sahil"};
const obj2 =  obj1;
obj2.name = "golu";
console.log(obj2.name); //golu




/**
number
string
boolean
null
undefinded
bigint
symbol



array
funcition
object



let  -> redeclare  but not re assign
var  -> redeclare and resign
but const -> cant be resign or redeclare
**/