function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let evenBirthdayMoneyWon = 10;
    let totalMoneyWon = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            totalMoneyWon += evenBirthdayMoneyWon;
            totalMoneyWon -= 1;
            evenBirthdayMoneyWon += 10;
        } else {
            totalMoneyWon += toyPrice;
        }
    }

    if (totalMoneyWon >= washingMachinePrice) {
        let moneyLeft = totalMoneyWon - washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washingMachinePrice - totalMoneyWon;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

cleverLily(["10", "170.00", "6"]);