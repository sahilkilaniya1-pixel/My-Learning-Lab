// Question 1: loop scoping (var vs let inside asynchronous code):
for (var i=0; i<3; i++){
    setTimeout(()=> console.log("var:",i),100);
}
for(let j=0; j<3; j++){
    setTimeout(()=> console.log("let:",j),100)
}