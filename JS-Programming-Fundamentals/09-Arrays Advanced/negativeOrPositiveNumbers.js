function negativeOrPositiveNumbers(arr) {
    let arrAsNums = arr.map(Number);
    let result = [];

    for (let num of arrAsNums) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(result.join("\n"));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);