function sumOfNumbers(input) {
    let index = 0;
    let mainNum = Number(input[index]);
    index++;

    let currentNum = Number(input[index]);
    index++;

    let sum = 0;

    while (currentNum <= mainNum) {
        sum += currentNum;
        currentNum = Number(input[index]);
        index++;
    } console.log(sum);
}

sumOfNumbers(["20", "1", "2", "3", "4", "5", "6"]);