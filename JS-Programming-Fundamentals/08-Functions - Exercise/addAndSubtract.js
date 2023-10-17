function addAndSubtract(a, b, c) {
    let result1 = sum(a, b);
    let result2 = subtract(result1, c);
    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    console.log(result2);
}

addAndSubtract(23, 6, 10);