// 3. Advanced (Descriptors & Prototype Chain)
/*
Property Descriptors (defineProperty)
Har property ke peeche 3 hidden flags hote hain:

writable: Value change ho sakti hai ya nahi.
enumerable: Loops (for...in) me show hoga ya nahi.
configurable: Delete ya settings change ho sakti hain ya nahi.
*/

const person = {};
Object.defineProperties(person,"id",{
    valee: 101,
    writeable: false,
    enumerable:false,
    
})