// 2. Intermediate (Methods, Copying & Immutability)
// Methods & this Context
const user1 = {
  firstName: "Sahil",
  lastName: "Kilaniya",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user1.getFullName());

// Destructuring & Spread Operator
const config = {host: "localhost", port:8080};

//Rename variables and add default values
const {host: domain,port,timeout = 5000}= config;
console.log(domain, port, timeout);  //"Localhost", 8080,5000

//Merging Object using Spread Operators
const base = {a:1};
const extra = {b:2};
const combined = {...base, ...extra, c:3};  
console.log(combined);   //{ a: 1, b: 2, c: 3 }



// Shallow Copy vs Deep Copy
const original = {name:"Sahil", address:{city:"Haryana"}};
// 1:Shallow copy (nested object reference copy hota hain)
const shallowCopy = {...original};
shallowCopy.address.city ="Mumbai";
console.log(original.address.city);


// 2. Deep Copy (Independent copy)