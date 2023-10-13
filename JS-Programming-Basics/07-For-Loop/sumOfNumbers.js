function sumOfNumbers(input) {
    let numAsText = input[0];

    let sum = 0;

    for (i = 0; i < numAsText.length; i++) {
        let currentNumber = Number(numAsText[i]);
        sum += currentNumber;
    } console.log(`The sum of the digits is:${sum}`)
}

sumOfNumbers(["1234"]);