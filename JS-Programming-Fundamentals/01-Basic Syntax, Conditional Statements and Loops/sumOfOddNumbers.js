function sumOfOddNumbers(num) {
    let numCount = 1;
    let i = 1;
    let sum = 0;
    while (numCount <= num) {
        if (i % 2 != 0) {
            console.log(i);
            numCount++;
            sum += i;
        }
        i++;
    } 

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers (5);
sumOfOddNumbers (3);