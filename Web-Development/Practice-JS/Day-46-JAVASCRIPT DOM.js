/* 
document (Root)
 └── html
      ├── head (title, meta)
      └── body
           ├── h1
           ├── p
           └── div (container) */
/*
1.Elements Ko Select Karna (Finding Elements)
Javascript mein HTML elements ko Pakadne ko do mein tarike hain:

A:Modern Methods (Best Practice - CSS Selectors)

document.querySelector('selectore'):Phela Matching element deta hai.
docuemnt.querySelector('selectore'):Saare matching element ek NodeList (array-like ) mein deta hai.

*/
//ID se select karna
const header = document.querySelector('#main-header');
//Class se select karna (phela match)
const card = document.querySelector('.card');
//Saare p tags ko select karna
const allParagraphs = document.querySelectorAll('p'); //NodeList

// B.Traditional Methods (purane Tarike)
const header = document.getElementById('main-header');
const cards = document.getElementsByClassName('card');
const tags = document.getElementsByTagName('div');