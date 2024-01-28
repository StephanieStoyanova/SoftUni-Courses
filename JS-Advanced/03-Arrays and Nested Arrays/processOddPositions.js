function processOddPositions(arr) {
    let oddNums = [];

    for (let i = 1; i < arr.length; i += 2) {
        oddNums.push(arr[i]);
    }

    let result = oddNums.map(x => x * 2).reverse();
    return result.join(' ');
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);