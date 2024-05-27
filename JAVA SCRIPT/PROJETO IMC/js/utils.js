export function notANumber(value) {
    return isNaN(value) || value == ""
}

export function CalculateIMC (peso, altura) {
    return (peso / ((altura / 100) **2)).toFixed(2)
}
