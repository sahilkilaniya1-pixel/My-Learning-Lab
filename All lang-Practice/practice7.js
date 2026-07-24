// Question 1: loop scoping (var vs let inside asynchronous code):
for (var i=0; i<3; i++){
    setTimeout(()=> console.log("var:",i),100);
}
for(let j=0; j<3; j++){
    setTimeout(()=> console.log("let:",j),100)
}

// Question 2: Shallow copy vs deep mutation (Spread Operator..)
let original = {
    name: "Laptop",
    details: {brand:"Dell", price: 50000}
};
let copy = {...original};
copy.name = "Phone",
copy.details.price = 60000;
console.log("Original name:", original.name);
console.log("Original.details.price:",original.details.price);


