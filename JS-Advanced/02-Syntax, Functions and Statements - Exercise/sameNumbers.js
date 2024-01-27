function sameNumbers(num) {
    let numAsStr = num.toString();
    let allSame = true;
    let sum = Number(numAsStr[0]);

    for (let i = 1; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i]);

        if (numAsStr[i] !== numAsStr[i - 1]) {
            allSame = false;
        }
    }

    console.log(allSame);;
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
