function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = "";

    for (let currNum = startNum; currNum <= endNum; currNum++) {
        let oddSum = 0;
        let evenSum = 0;
        let currNumAsString = currNum.toString();
        for (let i = 0; i < currNumAsString.length; i++) {
            let currDigit = Number(currNumAsString[i]);
            let possition = i + 1;
            if (possition % 2 === 0) {
                evenSum += currDigit;
            } else {
                oddSum += currDigit;
            }
        }
        if (evenSum === oddSum) {
            result += currNumAsString + " ";
        }
    }

    console.log(result);
}

equalSumsEvenOddPosition(["100000", "100050"]);