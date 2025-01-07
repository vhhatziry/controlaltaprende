const menu = document.querySelector("#menu");
const abrir = document.querySelector("#hamburguesa");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", ()=>{
    menu.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    menu.classList.remove("visible");
})


function toggleAccordion(element) {
    const accordion = element.parentElement;
    accordion.classList.toggle('open');
}