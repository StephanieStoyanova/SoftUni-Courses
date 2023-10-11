function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let allToysCount = puzzleCount + talkingDollsCount + bearsCount + minionsCount + trucksCount;
    let allToysCost = (puzzleCount * 2.60) + (talkingDollsCount * 3) + (bearsCount * 4.10) + (minionsCount * 8.20) + (trucksCount * 2);

    if (allToysCount >= 50) {
        allToysCost = allToysCost - (allToysCost * 0.25);
    }

    let profit = allToysCost - (allToysCost * 0.1);
    let moneyLeft = profit - vacationPrice;
    let moneyNeeded = vacationPrice - profit;
    if (profit >= vacationPrice) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }
}

toyShop(["320", "8", "2", "5", "5", "1"]);