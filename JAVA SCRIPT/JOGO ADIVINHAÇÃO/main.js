const btnTry =  document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain"); 
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

let xAttempts = 1;

let randomNumber = Math.round(Math.random() * 10);


btnTry.addEventListener('click', handClick)
btnAgain.addEventListener('click', handResete)
document.addEventListener("keydown", function (e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handClick ()
    }
}
)

function handClick(event) {
    event.preventDefault();
    let inputNumber = Number(document.querySelector("#inputNumber").value);
    
    try {
        differet(inputNumber);
        if (inputNumber === randomNumber) {
            screen1.classList.add("hide");
            screen2.classList.remove("hide");
            document.querySelector(".screen2 h2").innerText =  `Você acertou em ${xAttempts} tentativas `;
        }
        xAttempts++;
    } catch (error) {
        alert(error);
    }
}

function handResete () {  
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10);
}


function differet(inputNumber) {
    if (inputNumber < 0 || inputNumber > 10) {
        throw 'Número fora do intervalo permitido (0 a 10)';
    }     
}    




