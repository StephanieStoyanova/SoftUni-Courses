function aggregateElements(arrOfNums) {
    let sum = arrOfNums.reduce((acc, current) => acc + current, 0);
    console.log(sum);

    let sumInverse = arrOfNums.reduce((acc, current) => acc + 1 / current, 0);
    console.log(sumInverse);

    let concatenated = arrOfNums.map(String).join("");
    console.log(concatenated);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);