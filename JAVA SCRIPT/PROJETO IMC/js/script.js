import { Modal } from "./modal.js"
import { alertError } from "./alert-error.js"
import { CalculatorIMC,notANumber } from "./utiils.js"

 const form = document.querySelector('form')
 const inputPeso = document.querySelector ('#peso')
 const inputAltura = document.querySelector ('#altura')

 

inputAltura.oninput = () => alertError.close()
inputPeso.oninput = () => alertError.close ()

form.onsubmit = function (event) {
    event.preventDefault ()

    const peso = inputPeso.value
    const altura = inputAltura.value 

    const showAlertError = notANumber(peso) || notANumber(altura)
    if (showAlertError) {

        alertError.open()
        return;
        
    }

    if (!peso || !altura) {
        alertError.message.innerText = "PREENCHA TODOS OS CAMPOS"; // Altera a mensagem do alerta de erro
        alertError.open(); // Abre o alerta de erro
        return;
    }

    alertError.close()


    const result = CalculatorIMC (peso, altura)
    const message = `Seu IMC é igual a ${result}`
    
    Modal.message.innerText = message
    Modal.open()

    displayMessageImc (result)

}

form.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const inputs = form.querySelectorAll('input');
        const index = Array.from(inputs).indexOf(document.activeElement);
        if (index > -1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
            event.preventDefault();
        }
    }
});


form.addEventListener('keydown', function(event) {
    const inputs = form.querySelectorAll('input');
    const index = Array.from(inputs).indexOf(document.activeElement);

    switch (event.key) {
        case 'ArrowUp':
            if (index > 0) {
                inputs[index - 1].focus();
                event.preventDefault();
            }
            break;
        case 'ArrowDown':
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
                event.preventDefault();
            }
            break;
        default:
            break;
    }
}); 




 function displayMessageImc (result) {

    const message = `Seu IMC é igual a ${result}`
    
    Modal.message.innerText = message
    Modal.open()


}
