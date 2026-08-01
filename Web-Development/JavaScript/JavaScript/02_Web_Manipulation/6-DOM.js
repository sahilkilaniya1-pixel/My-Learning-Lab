// ==========================================================================
// WINDOW OBJECT & DOM (DOCUMENT OBJECT MODEL)
// ==========================================================================

// --- 1. Window Object ---
console.log(window);

// --- 2. What is DOM? ---
console.dir(window.document);

// --- 3. DOM Tree Hierarchy Visualized ---
// window -> document -> html
//                         |---> head -> meta, title, link
//                         |---> body -> h1, h1, h4, p, div, p, button, script


// ==========================================================================
// DOM MANIPULATION: SELECTING ELEMENTS
// ==========================================================================
let buttonEl = document.getElementById("myId");
let elementsWithClass = document.getElementsByClassName("myClass");
let paragraphs = document.getElementsByTagName("p");


// ==========================================================================
// MODERN SELECTORS: QUERY SELECTORS
// ==========================================================================
let firstIdMatch = document.querySelector("#myId");
let firstClassMatch = document.querySelector(".myClass");
let firstTagMatch = document.querySelector("p");

let allClassMatches = document.querySelectorAll(".myClass");
let allParagraphs = document.querySelectorAll("p");


// ==========================================================================
// DOM NAVIGATION PROPERTIES
// ==========================================================================
let divContainer = document.querySelector("div");

console.log("All Children nodes of Div:", divContainer.children); // HTMLCollection
console.log("First Child Element:", divContainer.firstElementChild); // <h3>fruits</h3>
console.log("Last Child Element:", divContainer.lastElementChild); // <ul>...</ul>

let internalHeading = document.querySelector("h3");
console.log("Parent of h3 tag:", internalHeading.parentElement); // <div>


// ==========================================================================
// DOM PROPERTIES (READ & WRITE ELEMENTS)
// ==========================================================================
let element = document.querySelector(".myClass");

console.log("Tag Name:", element.tagName); // "H1"
element.innerText = "DOM Basics Updated!"; // Overwrites visible text
element.innerHTML = "<i>DOM Topic with Apna College (Italicized)</i>"; // Inserts HTML tags
console.log("Read textContent:", element.textContent); // Reads raw text layout


// ==========================================================================
// REVISION PRACTICE QUESTIONS
// ==========================================================================

// --- Question 1: Append text to H2 ---
let h2 = document.querySelector("h2");
// FIXED: Used '+=' to successfully append/store the text update
h2.innerText += " from apna college students";
console.log("Updated h2 text:", h2.innerText);

// --- Question 2: Add unique value to 3 boxes ---
let divs = document.querySelectorAll(".box");
let idx = 1;

for (let div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++; // FIXED: standard increment
}


// ==========================================================================
// DOM ATTRIBUTES (GET & SET)
// ==========================================================================
// Assume HTML: <div id="fruitsBox" name="freshFruits" class="oldClass">...</div>

let testDiv = document.querySelector("div");

// --- 1. getAttribute(attr) ---
// Used to fetch the current value of an attribute on an element
let idVal = testDiv.getAttribute("id");
console.log("ID Attribute Value:", idVal); // // Instance Result -> fruitsBox

let nameVal = testDiv.getAttribute("name");
console.log("Name Attribute Value:", nameVal); // // Instance Result -> freshFruits

// --- 2. setAttribute(attr, value) ---
// FIXED: Corrected syntax to successfully change or add attribute values
let para = document.querySelector("p");
para.setAttribute("class", "newClass"); // Changes old class or adds 'newClass'
console.log("Paragraph updated class:", para.getAttribute("class")); // // Instance Result -> newClass


// ==========================================================================
// DOM STYLES (INLINE STYLE MANIPULATION)
// ==========================================================================
// Syntax: element.style.propertyName (Property names follow camelCase in JS)

let styleDiv = document.querySelector("div");

styleDiv.style.backgroundColor = "purple"; // FIXED: Changed comma to dot operator
styleDiv.style.fontSize = "26px";
styleDiv.innerText = "Hello!";
// styleDiv.style.visibility = "hidden"; // Optional: Hides the element from viewport


// ==========================================================================
// INSERT & DELETE ELEMENTS DYNAMICALLY
// ==========================================================================

// Step 1: Create the element
let newBtn = document.createElement("button");
newBtn.innerText = "Dynamic Button";

// Step 2: Insert the element into DOM
// Let's assume we insert it relative to an existing target node (e.g., divContainer)
// divContainer.append(newBtn);   // Adds at the absolute end (inside the div)
// divContainer.prepend(newBtn);  // Adds at the absolute start (inside the div)
// divContainer.before(newBtn);   // Adds right before the target div (outside the div)
// divContainer.after(newBtn);    // Adds right after the target div (outside the div)

// --- Deleting Elements ---
// newBtn.remove(); // Removes the node completely from the DOM tree


// ==========================================================================
// FINAL TASK: CREATE AND INSERT BUTTON AT START OF BODY
// ==========================================================================
// Task: Create a button with text "click me", bg color red, text color white,
// and insert it as the very first element inside the body tag.

// 1. Creation
let alertBtn = document.createElement("button");

// 2. Styling & Text content
alertBtn.innerText = "click me";
alertBtn.style.backgroundColor = "red";
alertBtn.style.color = "white";

// 3. Selection of Body and Prepend Insertion
let bodyTag = document.querySelector("body");
bodyTag.prepend(alertBtn); // Inserts as the absolute first child inside <body>

// --- INSTANCE RESULT (DOM Layout Output Verification): ---
// Browser inspect page will render this at top:
// <body>
//    <button style="background-color: red; color: white;">click me</button>
//    ... (rest of your HTML tags)
// </body>