let resultDiv = document.querySelector('#result')
let calc = ""

document.querySelectorAll('.key').forEach((key) => {
    key.addEventListener("click", () => {
        if (calc.length >= 10) {
            calc = calc
            resultDiv.innerHTML = calc
        } else {
            calc += key.value
            resultDiv.innerHTML = calc
        }

        if (key.getAttribute('id') === "clearKey") {
            calc = ""
            resultDiv.innerHTML = "0"

        } else if (key.getAttribute('id') === "equalKey") {
            if (calc !== "") {
                finalResult = eval(calc)
                resultDiv.innerHTML = finalResult
                calc = finalResult
            } else {
                calc = ""
                resultDiv.innerHTML = "0" 
            }

        } else if (key.getAttribute('id') === "clearEntryKey") {
            calc = calc.slice(0, -1)
            if (calc.length == 0) {
                calc = ""
                resultDiv.innerHTML = "0"
            } else {
                resultDiv.innerHTML = calc
            }
            
        } else if (key.getAttribute('id') === "posNegKey") {
            sign = Math.sign(calc)
            if (sign === 1) {
                calc = calc * (-1)
                resultDiv.innerHTML = calc
            } else if (sign === -1) {
                calc = Math.abs(calc)
                resultDiv.innerHTML = calc
            } else  if (sign === 0) {
                calc = ""
                resultDiv.innerHTML = 0
            }
        }    
    })
})



