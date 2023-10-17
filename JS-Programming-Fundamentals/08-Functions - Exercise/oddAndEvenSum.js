function oddAndEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;

    let numAsStr = num.toString();

    for (let digit of numAsStr) {
        if (digit % 2 == 0) {
            evenSum += Number(digit);
        } else {
            oddSum += Number(digit);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);