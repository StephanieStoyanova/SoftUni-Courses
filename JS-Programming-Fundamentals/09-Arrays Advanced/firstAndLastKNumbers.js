function firstAndLastKNumbers(arr) {
    let numEls = arr.shift();
    
    let firstKNums = arr.slice(0, numEls);
    let lastKNums = arr.slice(-numEls);

    console.log(firstKNums.join(" "));
    console.log(lastKNums.join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);