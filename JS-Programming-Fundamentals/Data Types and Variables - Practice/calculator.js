function calculator(n, op, m) {
    switch(op) {
        case "+":
            console.log((n + m).toFixed(2));
            break;
        
        case "-":
            console.log((n - m).toFixed(2));
            break;

        case "*":
            console.log((n * m).toFixed(2));
            break;

        case "/":
            if (m !== 0) {
            console.log((n / m).toFixed(2));
            }
            break;

    }
}

calculator(5, '+', 10);
calculator(15, '-', 10);
calculator(5, '*', 10);
calculator(5, '/', 0);