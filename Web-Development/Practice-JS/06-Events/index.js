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

element.addEventListener('click', () =>{
    element.textContent="Strike is Coming"
})