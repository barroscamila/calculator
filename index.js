let resultDiv = document.querySelector('#result')
let calc = ""

document.querySelectorAll('.key').forEach((key) => {
    key.addEventListener("click", () => {
        calc += key.value
        resultDiv.innerHTML = calc
        // console.log(calc)
        
        if (key.getAttribute('id') === "clearKey") {
            calc = ""
            resultDiv.innerHTML = "0"

        } else if (key.getAttribute('id') === "equalKey") {
            result(calc)

        } else if (key.getAttribute('id') === "porcentKey") {
            // Calcular porcentagem

        } else if (key.getAttribute('id') === "posNegKey") {
            sign = Math.sign(calc)
            console.log(sign)
            if (sign === 1) {
                calc = calc * (-1)
                resultDiv.innerHTML = calc
            } else if (sign === -1) {
                calc = Math.abs(calc)
                resultDiv.innerHTML = calc
            } else  if (sign === 0) {
                calc = ""
                resultDiv.innerHTML = 0
            } else {
                calc = ""
                resultDiv.innerHTML = "error"
            }
        }      
    })
})

function result(c) {
    finalResult = eval(c)
    resultDiv.innerHTML = finalResult
    calc = finalResult
}
