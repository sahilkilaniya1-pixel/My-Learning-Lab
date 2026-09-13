// ==========================================
// 1. SINGLE ELEMENT EVENTS (Click, Hover, DBClick)
// ==========================================
const element = document.getElementById("first");

if (element) {
  // Click Event: Content + Background Style Update
  element.addEventListener("click", () => {
    element.textContent = "Strike is Coming";
    element.style.backgroundColor = "SkyBlue";
  });

  // Double Click Event
  element.addEventListener("dblclick", () => {
    element.textContent = "Double Clicked!";
    element.style.backgroundColor = "DeepSkyBlue";
  });

  // Mouse Enter (Hover In)
  element.addEventListener("mouseenter", () => {
    element.style.backgroundColor = "LightCyan";
  });

  // Mouse Leave (Hover Out)
  element.addEventListener("mouseleave", () => {
    element.style.backgroundColor = "White";
  });
}

// ==========================================
// 2. PARENT-CHILD EVENT ITERATION (Looping)
// ==========================================
const parentContainer = document.getElementById("parent");

if (parentContainer) {
  // Option A: Loop over children
  for (let child of parentContainer.children) {
    child.addEventListener("click", () => {
      child.textContent = "I am clicked";
      child.style.backgroundColor = "black";
      child.style.color = "white";
    });
  }
}

// ==========================================
// 3. EVENT PROPAGATION (Bubbling Controlled)
// ==========================================
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

if (grandparent && parent && child) {
  grandparent.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Grandparent is clicked");
  });

  parent.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Parent is clicked");
  });

  child.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Child is clicked");
  });
}