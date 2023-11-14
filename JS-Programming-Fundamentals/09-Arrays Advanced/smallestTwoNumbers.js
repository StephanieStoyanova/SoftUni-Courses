function smallestTwoNumbers(arr) {
    let sortedArrNums = arr.sort((a, b) => {
        return a - b;
    })

    console.log(sortedArrNums.slice(0, 2).join(" "));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);