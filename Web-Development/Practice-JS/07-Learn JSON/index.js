// let signup= document.querySelector('.sign')
// let login = document.querySelector('.login')
// let slider = document.querySelector('.slider')
// let formsection = document.querySelector(".form-section")
// slider.addEventListener("click",  () => {
    slider.classList.add("mouseslider");
    formsection.classList.add("form-section-move");
});
login.addEventListener("clicl", ()=> {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});