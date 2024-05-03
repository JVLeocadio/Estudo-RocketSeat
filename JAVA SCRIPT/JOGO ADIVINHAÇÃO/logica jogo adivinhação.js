const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handClick(event) {
    event.preventDefault();
    const inputNumber = Number(document.querySelector("#inputNumber").value);
    
        if (inputNumber === randomNumber) {
            screen1.classList.add("hide");
            screen2.classList.remove("hide");
            document.querySelector(".screen2 h2").innerText =  `Você acertou em ${xAttempts} tentativas `;
        }
        xAttempts++;

}

function differet(inputNumber) {
    try {
        if (inputNumber < 0 || inputNumber > 10) {
            throw 'Número fora do intervalo permitido (0 a 10)';
        }
    } catch (e) {
        
        alert(e)
    }
}

// Chamada da função com um número válido
differet(11); // Isso vai lançar a exceção 'Número fora do intervalo permitido (0 a 10)'

const btnTry =  document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain"); 

btnTry.addEventListener('click', handClick);
btnAgain.addEventListener('click', function () {
    screen1.classList.remove("hide");
    screen2.classList.add("hide");
    xAttempts = 1;
});
