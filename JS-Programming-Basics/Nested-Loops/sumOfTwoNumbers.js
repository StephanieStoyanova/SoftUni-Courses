function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combCount = 0;
    let isFound = false;

    for (let x = startNumber; x <= endNumber; x++) {
        for (let y = startNumber; y <= endNumber; y++) {
            combCount++;
            if (x + y === magicNumber) {
                isFound = true;
                console.log(`Combination N:${combCount} (${x} + ${y} = ${magicNumber})`);
                break;
            }      
        } 
        if (isFound) {
            break;
        }
    } 
    if (!isFound) {
    console.log(`${combCount} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["23", "24", "20"]);