function calculate (number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2

            break

         case '-':
            result = number1 - number2

            break
        case '*':
            result = number1 * number2
                    
          break          

        case '/':
            result = number1 / number2

        break

        default:
            consolu.log("operador digitado incorreto, refaça a operação")

    }

    return result

}

console.log(calculate(4, '*' , 2))