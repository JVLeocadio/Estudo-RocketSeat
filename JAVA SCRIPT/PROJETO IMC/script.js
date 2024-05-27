 const form = document.querySelector('form')
 const inputPeso = document.querySelector ('#peso')
 const inputAltura = document.querySelector ('#altura')

 

 
 const Modal = {
    
    Wrapper : document.querySelector('.modal-wrapper'),
    message : document.querySelector ('.modal-wrapper .title span'),
    btnClose : document.querySelector ('.modal-wrapper button.close'),
    
    open () {
        Modal.Wrapper.classList.add('open')
    },

    close() {
        Modal.Wrapper.classList.remove('open')
    }

 }


form.onsubmit = function (event) {
    event.preventDefault ()

    const peso = inputPeso.value
    const altura = inputAltura.value 

    const result = IMC (peso, altura)
    const message = `Seu IMC é igual a ${result}`
    
    Modal.message.innerText = message
    Modal.open()

}

Modal.btnClose.onclick = () => {
    Modal.close()
}

function IMC (peso, altura) {
    return (peso / ((altura / 100) **2)).toFixed(2)
}