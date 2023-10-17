function signCheck(numOne, numTwo, numThree) {
    let arrNums = [numOne, numTwo, numThree];
    let negativeNumsCount = 0;
    
    for (let i = 0; i < arrNums.length; i++) {
        if (arrNums[i] < 0) {
            negativeNumsCount++;
        }
    }

    if (negativeNumsCount % 2 !== 0) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }
}

signCheck(5, -12, -15);