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



console.log(splitEquation("2/1"))