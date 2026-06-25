// Add item to end
let n = [1, 2, 3, 4, 5, 6];
n.push(5);
console.log(n);  //// Output: [1, 2, 3, 4, 5, 5]


// Remove & return last item
let o = [1, 2, 3, 4, 5];
o.pop()
console.log(o)  // Output:[ 1, 2, 3, 4 ]


//Remove & return first item
let p = [1, 2, 3, 4, 5, 6];
p.shift()
console.log(p);    //Output:[ 2, 3, 4, 5, 6 ]


//Add item to beginning
let q = [1, 2, 3, 4, 5, 6];
q.unshift(1)
console.log(q);     //Output: [1,1,2,3,4,5,6]


//Remove n items starting at index i
let a = [1, 2, 3, 4, 5, 6];
a.splice(1, 3)
console.log(a)      //Output: [ 1, 5, 6 ]


//Copy a portion (end not included)
let b = [1, 2, 3, 4, 5, 6];
b.slice(1, 2);
console.log(b);    //Output :[ 1, 2, 3, 4, 5, 6 ]


//  First index of val, or -1
let c = ["aman", "mohit", "sahil", "kartik", "ashu"];
console.log(c.indexOf("sahil")); //Output: 2


//  True if val exists in arra
console.log(c.includes("sahi"))  //Output :  false


// First element where fn is true
console.log(c.indexOf("sahi"))  //Output: -1


// Index of first match, or -1
console.log(c.findIndex(x => x === "sahil" ? true : false));  //Output: 2


// New array keeping elements where fn is
// true
let d = [3,2,1,4]
o.filter(x=> x=3) //output: 2


// New array with fn applied to each item
d.map(x=> console.log( x*2))
// Output
// 6
// 4
// 2
// 8


// Collapse array to one value
let e = [1, 2, 3, 4, 5];
let totalSum = d.reduce((a, c) => a + c, 0);
console.log(totalSum);  //output:: 10


// Run fn on each item (no return value)
e.forEach(x => console.log(x));
// Output
// 1
// 2
// 3
// 4
// 5


//  True if any item passes fn
let f = [1, 2, 4, 2];
let result = f.some(x => x > 3);
console.log(result)   //output : true


//  True if all items pass fn
let g = [1, 2, -4, 2];
let reslt = g.every(x => x > 0);

console.log(reslt);   //Output : false


// Sort in place — always pass comparator
let h = [1, 2, -4, 2];
h.sort()
console.log(h);  //output :: [ -4, 1, 2, 2 ]


// Reverse array in place
let i = [1, 2, -4, 2];
i.reverse();
console.log(i);  //Output: [ 2, -4, 2, 1 ]


//  Flatten one level of nesting
let j = [1, 2, [3, 4], -4, 2];
let res = j.flat();
console.log(res);  //Output:[ 1, 2, 3, 4, -4, 2 ]


// Make array from string / Set / Map
let str = 'abc';
let arr = Array.from(str);
console.log(arr);  //Output: [ 'a', 'b', 'c' ]


// True if x is an array
console.log(Array.isArray([]));         //Output: true
console.log(Array.isArray([1, 2, 3]));  //Output: true