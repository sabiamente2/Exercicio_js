const form = document.getElementById("form");
const numberA = document.getElementById("inputA");
const numberB = document.getElementById("inputB");
let mensage = document.querySelector("#mensage");

let mensageValid = "Verdadeiro: B é maior que A."
let mensageFalse = "Falso: B NÃO é maior que A"

function visible (param){
    return param.classList.toggle("mensageVisible")
}
function writeValid(param) {
    mensage.textContent = param;
    mensage.style.color = 'green';
}
function writeFalse(param) {
    mensage.textContent = param; 
    mensage.style.color = 'red';
}


form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    numberB.value > numberA.value ? writeValid(mensageValid) : writeFalse(mensageFalse);
    if (!visible(mensage)) visible(mensage);
})

form.addEventListener("reset", ()=> {

    if (visible(mensage)) visible(mensage);
})
