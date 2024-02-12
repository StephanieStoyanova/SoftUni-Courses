function calculator() {
    let num1Ref, num2Ref, resultRef;

    function init(selector1, selector2, resultSelector) {
        num1Ref = document.getElementById(selector1.substring(1)); 
        num2Ref = document.getElementById(selector2.substring(1)); 
        resultRef = document.getElementById(resultSelector.substring(1)); 
    }

    function add() {
        const num1 = parseFloat(num1Ref.value);
        const num2 = parseFloat(num2Ref.value);
        const result = num1 + num2;
        resultRef.value = result;
    }

    function subtract() {
        const num1 = parseFloat(num1Ref.value);
        const num2 = parseFloat(num2Ref.value);
        const result = num1 - num2;
        resultRef.value = result;
    }

    return {
        init,
        add,
        subtract
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');

document.getElementById("sumButton").addEventListener('click', calculate.add);
document.getElementById("subtractButton").addEventListener('click', calculate.subtract);




