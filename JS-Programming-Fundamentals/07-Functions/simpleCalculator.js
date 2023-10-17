function simpleCalculator(numOne, numTwo, operator) {
    //Operator can be 'multiply', 'divide', 'add' or 'subtract'.

    let add = (numOne, numTwo) => numOne + numTwo;
    let subtract = (numOne, numTwo) => numOne - numTwo;
    let multiply = (numOne, numTwo) => numOne * numTwo;
    let divide = (numOne, numTwo) => numOne / numTwo;

    let result;
    switch(operator) {
        case "add":
            result = add(numOne, numTwo);
            break;

        case "subtract":
            result = subtract(numOne, numTwo);
            break;

        case "multiply":
            result = multiply(numOne, numTwo);
            break;

        case "divide":
            result = divide(numOne, numTwo);
            break;
    }

    console.log(result);
}

simpleCalculator(5, 5, 'multiply');