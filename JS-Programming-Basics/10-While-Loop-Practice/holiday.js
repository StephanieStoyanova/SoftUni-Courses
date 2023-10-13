function holiday(input) {
    let index = 0;

    let holidayMoneyNeeded = Number(input[index]);
    index++;

    let moneyOwned = Number(input[index]);
    index++;

    let daysSpendMoney = 0;
    let totalDays = 0;

    while (moneyOwned < holidayMoneyNeeded) {
        let savedOrSpend = input[index];
        index++;

        let moneySpendOrSave = Number(input[index]);
        index++;

        if (savedOrSpend === "spend") {
            if (moneySpendOrSave > moneyOwned) {
                moneyOwned = 0;
            } else {
                moneyOwned -= moneySpendOrSave;
            }

            daysSpendMoney++;
            
        } else if (savedOrSpend === "save") {
            moneyOwned += moneySpendOrSave;
            daysSpendMoney = 0;
        }

        totalDays++;
        
        if (daysSpendMoney === 5) {
            console.log("You can't save the money.");
            console.log(`${totalDays}`);
            break;
        }
        
    }

    if (moneyOwned >= holidayMoneyNeeded) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}

holiday(["2000", "1000", "spend", "1200", "save", "2000"]);