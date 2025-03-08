const form = document.getElementById("form");
const numberA = document.getElementById("input-a");
const numberB = document.getElementById("input-b");
let mensage = document.querySelector("#mensage");

function visible (a){
    return a.classList.toggle("mensageVisible")
}


function aMaiorQueB(numeroA, NumeroB, mensagemValidAqui  , mensageErrorAqui) 
{
    let mensagem = ["", ""]
    mensagem[0] = mensagemValidAqui;
    mensagem[1] = mensageErrorAqui;

    if (numeroA.value > NumeroB.value)
    {   
        mensage.textContent = mensagem[0];
        mensage.style.color = 'green';

        if (visible(mensage) === false) 
        {
            visible(mensage)
        }
    }

    else 
    {
        mensage.textContent = mensagem[1];
        mensage.style.color = 'red';

        if (visible(mensage) === false) 
        {
            visible(mensage)
        }
        
    }
    
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    aMaiorQueB (numberB, numberA, "Verdaderiro: B é maior que A", "Falso: B é menor que A")
})
form.addEventListener("reset", (event) => {
    if (visible(mensage) === true) {
        visible(mensage);
    }
})
