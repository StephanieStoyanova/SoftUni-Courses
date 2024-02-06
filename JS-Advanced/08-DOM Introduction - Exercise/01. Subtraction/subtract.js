function subtract() {
    const firstNumRef = document.getElementById('firstNumber').value;
    const secondNumRef = document.getElementById('secondNumber').value;
    
    let result = Number(firstNumRef) - Number(secondNumRef);
    document.getElementById('result').textContent = result;
}