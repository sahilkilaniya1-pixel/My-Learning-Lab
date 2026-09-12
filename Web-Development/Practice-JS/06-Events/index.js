// Event: Mouse move, click, Double Click
// Events Listener: Listening the events (click)
// Events Action: Strike is coming

// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent="Strike is Coming"
// }

const element = document.getElementById("first");
// element.onclick = function handleClick() {
//   element.textContent = "Strike is coming";
// };

// element.onclick = function handleClick() {
//   element.textContent = "Iam the Best";
// };

// element.addEventListener("dblclick", () => {
//   element.textContent = "Stirke is Coming";
// });
// element.addEventListener("dblclick", () => {
//   element.style.backgroundColor = "SkyBlue";
// });

// element.addEventListener("click", () => {
//   element.textContent = "Stirke is Coming";
// });
// element.addEventListener("click", () => {
//   element.style.backgroundColor = "SkyBlue";
// });

// element.addEventListener("mouseenter", () => {
//   element.textContent = "Stirke is Coming";
// });
// element.addEventListener("mouseenter", () => {
//   element.style.backgroundColor = "SkyBlue";
// });

// element.addEventListener("mouseleave", () => {
//   element.textContent = "Strike is Coming";
// });
// element.addEventListener("mouseleave", () => {
//   element.style.backgroundColor = "Blue";
// });

const child1 = document.getElementById("child1");
child1.addEventListener("click", () => {
  child1.textContent = "I am clicked";
});
child1.addEventListener("click", () => {
  child1.style.backgroundColor = "black";
});

const child2 = document.getElementById("child2");
child2.addEventListener("dblclick", () => {
  child2.textContent = "I am clicked";
});
child2.addEventListener("dblclick", () => {
  child2.style.backgroundColor = "black";
});

const child3 = document.getElementById("child3");
child3.addEventListener("mouseleave", () => {
  child3.textContent = "I am clicked";
});
child3.addEventListener("mouseleave", () => {
  child3.style.backgroundColor = "black";
});