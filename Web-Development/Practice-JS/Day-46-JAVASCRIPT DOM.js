/* 
===================================================================
DOM (Document Object Model) Tree Structure Overview
===================================================================
document (Root Node)
 └── html
      ├── head (title, meta)
      └── body
           ├── h1
           ├── p
           └── div (container)
*/

/*
===================================================================
TOPIC 1: SELECTING ELEMENTS (Finding Elements in the DOM)
===================================================================
There are two primary approaches to select HTML elements in JavaScript:

A. Modern Methods (Best Practice - Using CSS Selectors):
   - document.querySelector('selector'): Returns the FIRST matching element.
   - document.querySelectorAll('selector'): Returns ALL matching elements 
     as a static NodeList (an array-like structure).
*/

// Select by ID
const header = document.querySelector('#main-header');

// Select by Class (First match)
const card = document.querySelector('.card');

// Select all paragraph tags
const allParagraphs = document.querySelectorAll('p'); // NodeList

/*
B. Traditional Methods (Legacy/Older Approaches):
   - getElementById: Fast lookup by ID.
   - getElementsByClassName / getElementsByTagName: Return a live HTMLCollection.
*/

const headerLegacy = document.getElementById('main-header');
const cardsLegacy = document.getElementsByClassName('card'); // HTMLCollection
const tagsLegacy = document.getElementsByTagName('div');     // HTMLCollection


/*
===================================================================
TOPIC 2: MODIFYING ELEMENTS (Content, Styles & Attributes)
===================================================================
*/

const title = document.querySelector('h1');

// Modifying Content:
// 1. innerText / textContent: Updates plain text safely (prevents XSS attacks)
title.innerText = "Welcome to my Website";

// 2. innerHTML: Parses and updates content along with HTML tags
title.innerHTML = "Welcome <span style='color: red;'>User</span>";


// Modifying Styles:
const box = document.querySelector('.box');

// Direct inline CSS assignment (property names use camelCase: font-size -> fontSize)
box.style.backgroundColor = 'blue';
box.style.fontSize = '20px';


// Managing Classes & Attributes:
const btn = document.querySelector('button');

// ClassList API (Best practice for applying pre-defined CSS rules)
btn.classList.add('active');        // Adds class
btn.classList.remove('hidden');     // Removes class
btn.classList.toggle('highlight');  // Toggles class: adds if absent, removes if present

// Attributes API (Get, Set, and Remove standard or custom HTML attributes)
btn.setAttribute('disabled', 'true');
console.log(btn.getAttribute('type')); // Outputs: e.g., 'submit'
btn.removeAttribute('disabled');


/*
===================================================================
TOPIC 3: CREATING AND INSERTING NEW ELEMENTS
===================================================================
To dynamically generate UI components, elements are created in memory 
and then appended to the active DOM tree.
*/

// Step 1: Create a new DOM element node
const newCard = document.createElement('div');

// Step 2: Decorate the element with content and classes
newCard.classList.add('card');
newCard.innerText = "This is a new dynamic card";

// Step 3: Insert the element into the DOM (Inside a parent container)
const container = document.querySelector('#container');

// Append to the end of the parent container:
container.appendChild(newCard);

// Prepend to the beginning of the parent container:
container.prepend(newCard);


/*
===================================================================
TOPIC 4: REMOVING ELEMENTS FROM THE DOM
===================================================================
*/

const item = document.querySelector('.remove-me');

// Modern Method: Direct removal on the target element itself
item.remove();

// Legacy Method: Removing a target element via its parent node
if (item && item.parentElement) {
  item.parentElement.removeChild(item);
}