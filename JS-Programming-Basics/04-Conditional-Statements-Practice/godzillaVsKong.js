function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let clothesForOneStatistPrice = Number(input[2]);

    let decorationPrice = movieBudget * 0.1;

    if (statistsCount > 150) {
        clothesForOneStatistPrice = clothesForOneStatistPrice - (clothesForOneStatistPrice * 0.1);
    }

    let finalPriceForClothes = statistsCount * clothesForOneStatistPrice;

    let finalPrice = finalPriceForClothes + decorationPrice;

    let moneyNeeded = finalPrice - movieBudget;
    let moneyLeft = movieBudget - finalPrice;
    if (finalPrice > movieBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    } else if ( finalPrice <= movieBudget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }
}

godzillaVsKong(["20000", "120", "55.5"]);