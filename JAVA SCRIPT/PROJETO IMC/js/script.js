import { Modal } from "./modal.js"

const form = document.querySelector('form')
 const inputPeso = document.querySelector ('#peso')
 const inputAltura = document.querySelector ('#altura')

 

form.onsubmit = function (event) {
    event.preventDefault ()

    const peso = inputPeso.value
    const altura = inputAltura.value 

    const showAlertError = notANumber(peso) || notANumber(altura)
    if (showAlertError) {

        console.log ('mostrar o alerta de erro')
        return;
        
    }



    const result = IMC (peso, altura)
    const message = `Seu IMC é igual a ${result}`
    
    Modal.message.innerText = message
    Modal.open()

}

function notANumber(value) {
    return isNaN(value) || value ===""
}

function IMC (peso, altura) {
    return (peso / ((altura / 100) **2)).toFixed(2)
}