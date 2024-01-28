function extractIncreasingSubsequenceFromArray(arr) {
    let result = [arr[0]];
    let biggestNum = arr[0];

    arr.reduce((acc, num) => {
        if (num >= biggestNum) {
            result.push(num);
            biggestNum = num;
        }
        return acc;
    })

    return result;
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);