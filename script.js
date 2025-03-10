const form = document.getElementById("form");
const numberA = document.getElementById("inputA");
const numberB = document.getElementById("inputB");
const mensageArea = document.querySelector("#mensage");

let mensageValid = "Verdadeiro: B é maior que A."
let mensageFalse = "Falso: B NÃO é maior que A"

function visible(param){
    return param.classList.toggle("mensageVisible")
}
function write(param) {
    mensageArea.textContent = param;
    param == mensageValid ? mensageArea.style.color = 'green' : mensageArea.style.color = 'red';
}


form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    numberB.value > numberA.value ? write(mensageValid) : write(mensageFalse);
    if (!visible(mensageArea)) visible(mensageArea);
})

form.addEventListener("reset", ()=> {

    if (visible(mensageArea)) visible(mensageArea);
})
