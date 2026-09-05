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
const cards = document.getElementsByClassName('card'); // HTMLCollection
const tags = document.getElementsByTagName('div');

/*
2.Elements Ko Modity Karna (Changing Content, Style & Attributes)
*/
const title = document.querySelector('h1');
//Sirf text Changes karega (safe)
title.innerText = "Welcome to my Website";
//HTML tags ke sath content change karega
title.innerHTML = "Welcome <span style='color:red;'>User</span>";

// Style Change Karna
const box = document.querySelector('.box');
//Direct inline CSS apply karna.
box.style.backgroundColor = 'blue';
box.style.fontSize = '20px'; // camelCase naming use hoti hai (font-size -> fontSize)

// Classses & Attributes Manages Karna
const btn = document.querySelector('button');
//classes add/remove/toggle karna (best for style)
btn.classList.add('active');
btn.classList.remove('hidden');
btn.classList.toggle('highlight'); // Agar class hai toh hata dega, nahi hai toh add kar dega

//Attributes set/get/remove
btn.setAttribute('disabled', 'true');
console.log(btn.getAttribute('type')); // e.g., 'submit'
btn.removeAttribute('disabled');

// 3.Naye Elements Create Aur Insert Karna
// 