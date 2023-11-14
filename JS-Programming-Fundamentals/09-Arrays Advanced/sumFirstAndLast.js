function sumFirstAndLast(arr) {
    let arrAsNums = arr.map(Number);
    let firstNum = arrAsNums.shift();
    let lastNum = arrAsNums.pop();

    let sum = firstNum + lastNum;
    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);