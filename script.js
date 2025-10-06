function add(num1,num2){
    return(parseInt(num1) + parseInt(num2))
}

function subtract(num1,num2){
    return(parseInt(num1) - parseInt(num2))
}

function divide(num1,num2){
    return(parseInt(num1) / parseInt(num2))
}

function multiply(num1,num2){
    return(parseInt(num1) * parseInt(num2))
}

function splitEquation(inp){
    let operators = ["+", "-", "/", "*"]
    let num1 = ""
    let operator = ""
    let num2 = ""

    for (let index = 0; index < inp.length; index++) {
        if (operators.includes(inp[index])){
            operator = inp[index]
        }
        else if (operator === ""){
            num1 += inp[index]
        }
        else{
            num2 += inp[index]
        }
    }
    return {num1, operator, num2}
}

function operate(num1,operator,num2){
    if (operator === "+"){
        return add(num1,num2)
    }
    else if (operator === "-"){
        return subtract(num1,num2)
    }
    else if (operator === "/"){
        return divide(num1,num2)
    }
    else {
        return multiply(num1,num2)
    }
}


const digitButtons = document.querySelectorAll(".digit")
const display = document.querySelector("#display")

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        const digitContent = button.textContent.trim()
        display.value += digitContent
        const result = display.value
        // console.log(result)
    })
})

