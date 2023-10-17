function factorialDivision(num1, num2) {
    let factorial1 = calcTheFactorial(num1);
    let factorial2 = calcTheFactorial(num2);

    let result = factorial1 / factorial2;
    console.log(result.toFixed(2));
    
    function calcTheFactorial(num) {
        
        let factorial = 1;
        
        while (num > 1) {
        factorial *= num;
        num--;
        }

        return factorial;
    }
}

factorialDivision(5, 2);