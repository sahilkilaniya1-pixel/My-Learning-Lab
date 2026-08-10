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