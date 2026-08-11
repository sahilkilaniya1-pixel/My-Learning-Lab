// 3. Advanced (Descriptors & Prototype Chain)
/*
Property Descriptors (defineProperty)
Har property ke peeche 3 hidden flags hote hain:

writable: Value change ho sakti hai ya nahi.
enumerable: Loops (for...in) me show hoga ya nahi.
configurable: Delete ya settings change ho sakti hain ya nahi.
*/

const person = {};
Object.defineProperty(person,"id",{
    valee: 101,
    writeable: false, //Read-only
    enumerable:false, //Object.keys() me hide hoga
    configurable:false //Delete nahi ho sakta
});

person.id=200; //Ignore hoga (Strict mode me error dega)
console.log(person.id);


// 1. Writable Test:
User.id = 999;
console.log(User.id);