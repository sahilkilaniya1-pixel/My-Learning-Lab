// Module 4: Metaprogramming (Proxies & Reflect)
/*
Metaprogramming ka matlab hota hain "Code write karna jo doosre code ko inspect,modify ya intercept kare." Normal JS me jab aap obj.key likhte ho  toh direct value milti hai, Lekin Proxy lagane ke baad aap is behavior ke beech me apna custom logic fit kar sakte ho.
*/

// 1. Proxy Component Architecture
/* 
Proxy ke 3 main parts hote hain:'
1-Target:Original object jisko aap wrap kar rahe ho.
2-Handle: configuration Object jisme "Traps" (interception methods)hote hain.
3-Traps: Methods jo standard operations (Read, Write,Delte) ko intercept karte hain.
*/

const target = { name: "Sahil", age: 23 };

const handler = {
  // GET Trap: Jab bhi koi property read ki jayegi
  get(targetObject, property, receiver) {
    console.log(`Property '${property}' read ki gayi hai.`);
    return property in targetObject ? targetObject[property] : "Key Not Found";
  },

  // SET Trap: Jab bhi koi property update/add ki jayegi
  set(targetObject, property, value, receiver) {
    if (property === "age" && typeof value !== "number") {
      throw new TypeError("Age humesha number honi chahiye!");
    }
    targetObject[property] = value;
    return true; // Success return karna zaroori hai
  }
};

const userProxy = new Proxy (target, handler);

console.log(userProxy.name); // Logs: "Property 'name' read ki gayi hai." -> "Sahil"
console.log(userProxy.city); // Output: "Key Not Found" (Default undefined ke bajaye)

// Validation Check
userProxy.age = 24; //successfully set
