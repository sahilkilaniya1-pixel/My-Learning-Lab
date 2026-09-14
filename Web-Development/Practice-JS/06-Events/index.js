// ==========================================
// 1. SINGLE ELEMENT EVENTS (Heading First)
// ==========================================
const element = document.getElementById("first");

if (element) {
  // Click Event
  element.addEventListener("click", () => {
    element.textContent = "Strike is Coming";
    element.style.backgroundColor = "SkyBlue";
    element.style.color = "black";
  });

  // Double Click Event
  element.addEventListener("dblclick", () => {
    element.textContent = "Double Clicked!";
    element.style.backgroundColor = "DeepSkyBlue";
    element.style.color = "black";
  });

  // Mouse Enter (Hover In)
  element.addEventListener("mouseenter", () => {
    element.style.backgroundColor = "LightCyan";
    element.style.color = "black";
  });

  // Mouse Leave (Hover Out)
  element.addEventListener("mouseleave", () => {
    element.textContent = "Hello Coder (First)";
    element.style.backgroundColor = "transparent";
    element.style.color = "aliceblue";
  });
}

// ==========================================
// 2. PARENT-CHILD LIST (Individual Box Events)
// ==========================================
// Section 2 ke sabhi 5 boxes ko get kar rahe hain
const child1 = document.getElementById("child1");
// const child2 = document.getElementById("child2");
const child3 = document.getElementById("child3");
const child4 = document.getElementById("child4");
const child5 = document.getElementById("child5");

if (child1) {
  child1.addEventListener("click", (e) => {
    e.stopPropagation();
    child1.textContent = "I am clicked";
    child1.style.backgroundColor = "black";
    child1.style.color = "white";
  });
}

if (child2) {
  child2.addEventListener("dblclick", (e) => {
    e.stopPropagation();
    child2.textContent = "I am clicked";
    child2.style.backgroundColor = "black";
    child2.style.color = "white";
  });
}

if (child3) {
  child3.addEventListener("mouseup", (e) => {
    e.stopPropagation();
    child3.textContent = "I am clicked";
    child3.style.backgroundColor = "black";
    child3.style.color = "white";
  });
}

if (child4) {
  child4.addEventListener("mouseenter", (e) => {
    e.stopPropagation();
    child4.textContent = "I am clicked";
    child4.style.backgroundColor = "black";
    child4.style.color = "white";
  });
}

if (child5) {
  child5.addEventListener("mouseleave", (e) => {
    e.stopPropagation();
    child5.textContent = "I am clicked";
    child5.style.backgroundColor = "black";
    child5.style.color = "white";
  });
}

// ==========================================
// 3. EVENT BUBBLING & PROPAGATION (Nested Boxes)
// ==========================================
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

if (grandparent) {
  grandparent.addEventListener("click", (e) => {
    console.log(e);
    e.stopPropagation();
    console.log("Grandparent is clicked");
  });
}

if (parent) {
  parent.addEventListener("click", (e) => {
    // console.log(e);
    e.stopPropagation();
    console.log("parent is clicked");
  });
}

if (child) {
  child.addEventListener("click", (e) => {
    // console.log(e);
    e.stopPropagation();
    console.log("child is clicked");
  });
}
