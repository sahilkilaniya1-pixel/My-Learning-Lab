// ==========================================================================
// JAVASCRIPT EVENTS & EVENT HANDLING
// ==========================================================================

// --- 1. What is an Event? ---
// The change in the state of an object is known as an Event.
// Events are fired to notify code of "interesting changes" that may affect execution.
// Examples: 
// - Mouse events (click, dblclick, mouseover)
// - Keyboard events (keypress, keyup, keydown)
// - Form events (submit, focus)


// --- 2. Inline Event Handling ---
// Syntax: Node.onevent = () => { // handle here }
// CRITICAL NOTE: Event handler properties are ALWAYS lowercase (onclick, not onClick).

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => { // FIXED: Changed onClick to onclick
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log("Value of a:", a); 
};
// // Instance Result (On Click) -> 
// // btn1 was clicked
// // Value of a: 26


let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("you are inside div");
};
// // Instance Result (On Hover) -> you are inside div


// ==========================================================================
// THE EVENT OBJECT (e / evt)
// ==========================================================================
// It is a special object that contains automated details about the event.
// All event handlers automatically get access to the Event Object.

btn1.onclick = (evt) => {
    console.log("Event Object:", evt);
    console.log("Event Type:", evt.type);     // Returns the event type (e.g., "click")
    console.log("Target Node:", evt.target);   // Returns the element that triggered it
    console.log("Cursor X location:", evt.clientX); // FIXED: Changed clickX to clientX
    console.log("Cursor Y location:", evt.clientY); // FIXED: Changed clickY to clientY
};
// // Instance Result (On Click) -> 
// // Event Object: PointerEvent { ... }
// // Event Type: click
// // Target Node: <button id="btn1">...</button>
// // Cursor X location: 142
// // Cursor Y location: 55


// ==========================================================================
// EVENT LISTENERS (MODERN & BEST PRACTICE)
// ==========================================================================
// Syntax: 
// Node.addEventListener(event, callback)
// Node.removeEventListener(event, callback)

// --- Adding Listeners ---
// Event listeners allow adding MULTIPLE functions to a single event without overwriting.
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - Handler 1");
});

// Defining a named function reference so we can safely remove it later
const handler2 = () => {
    console.log("button1 was clicked - Handler 2");
};

btn1.addEventListener("click", handler2);

// --- Removing Listeners ---
// ⚠️ WARNING: To remove a listener, the callback reference/memory location must be exactly the SAME.
btn1.removeEventListener("click", handler2); // FIXED: Successfully removes Handler 2


// ==========================================================================
// PRACTICAL QUESTION: DARK/LIGHT MODE TOGGLE BUTTON
// ==========================================================================
// Question: Create a toggle button that changes the screen to dark-mode when 
// clicked & light-mode when clicked again.
// (Assuming HTML has: <button id="mode">Toggle Mode</button>)

let modeBtn = document.querySelector("#mode");
let currentMode = "light"; // Starting state tracker

modeBtn.addEventListener("click", () => {
    if (currentMode === "light") {
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white"; // Make text readable
    } else {
        currentMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }
    
    console.log("Current Mode Active:", currentMode);
});
// // Instance Result:
// // First Click  -> Current Mode Active: dark  (Screen turns Black)
// // Second Click -> Current Mode Active: light (Screen turns White)