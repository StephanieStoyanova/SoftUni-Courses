function sortingNumbers(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    const result = [];
    
    for (let i = 0; i < Math.ceil(sortedArray.length / 2); i++) {
        result.push(sortedArray[i]);
    
        if (i !== sortedArray.length - 1 - i) {
            result.push(sortedArray[sortedArray.length - 1 - i]);
        }
    }
    
    return result;

}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);