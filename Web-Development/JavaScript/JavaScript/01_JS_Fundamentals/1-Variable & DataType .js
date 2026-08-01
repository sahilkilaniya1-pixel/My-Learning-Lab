// console.log("Welcome to the first day!");
// console.log("I love JS");

// -------------------------------------------------------------------
// = Assignment Operator

// Note: It is best practice to declare variables using let, const, or var
let fullNameOriginal = "sahil"; 
let ageOriginal = 24;
let radius = 25;
let x = null;
let y = undefined;
console.log(ageOriginal);


// Variable Rules:

//* Variable names are case-sensitive; "a" and "A" are completely different.
//* Only letters, digits, underscores (_), and dollar signs ($) are allowed (spaces are not allowed).
//* Only a letter, underscore (_), or dollar sign ($) can be used as the 1st character.
//* Reserved keywords (like if, for, let, class) cannot be used as variable names.
// --------------------------------------------------------------

// Valid Variable Declarations:
let fullname = "sahil";
let _fullname = "sahil";
let $fullname = "sahil";
console.log(fullname);

// Case sensitivity demonstration:
// 'Console' with a capital 'C' is a valid custom variable name and does not overwrite the built-in 'console' object.
let Console = "Sahil";
console.log(Console);

// ----------------------------------------------------------------------
// Variable Naming Naming Conventions

// fullName   -> Camel Case (Most common in JavaScript)
// fullname   -> Lowercase
// full_name  -> Snake Case
// full-name  -> Kebab Case (Invalid for JS variables, used in HTML/CSS properties)
// FullName   -> Pascal Case (Used for Classes and Component names)

// -------------------------------------------------------------------------
// let, const, and var (Introduced in ES6 - ECMAScript 2015)

// var:   Variables can be re-declared and updated. They have global or function scope.
// let:   Variables cannot be re-declared but can be updated. They have block scope.
// const: Variables cannot be re-declared or updated. They have block scope and must be initialized immediately.


let standardFullName = "sahil";
let standardAge = 24;
let totalPrice = 100;

console.log(standardFullName);

// --------------------------------------------------------------------
// Example of 'var' (Allows re-declaration):
var testAge = 24;
var testAge = 59;
var testAge = 86;

console.log(testAge);

// Example of 'let' initialization:
let a;
a = "10";
console.log(a);

// Example of Block Scope:
{
    let blockA = "10";
    console.log(blockA); // This variable only exists inside this block {}
}

// let age = 24;
// let price = 100.5;

// Objects declared with 'const'
// Note: While you cannot reassign the object itself, you can still update or