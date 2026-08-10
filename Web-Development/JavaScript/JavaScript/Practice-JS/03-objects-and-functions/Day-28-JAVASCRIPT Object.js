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