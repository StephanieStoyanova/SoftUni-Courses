function processOddNumbers(arr) {
    let result = [];
    
    for (let i = 1; i < arr.length; i += 2) {
        let currNum = arr[i];
        let multiplied = currNum * 2;

        result.unshift(multiplied);
    }

    console.log(result.join(" "));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);