// Пакет химикали - 5.80 лв.
// Пакет маркери - 7.20 лв.
// Препарат - 1.20 лв (за литър)

function suppliesForSchool(input) {
    let packsOfPens = Number (input[0]);
    let packsOfMarkers = Number (input[1]);
    let cleaningSupplieForBoardInLiters = Number (input[2]);
    let percentDiscount = Number (input[3]) / 100;

    let moneyForPens = packsOfPens * 5.80;
    let moneyForMarkers = packsOfMarkers * 7.20;
    let moneyForCleningSupplie = cleaningSupplieForBoardInLiters * 1.20;

    let sumMoneyForSupplies = moneyForPens + moneyForMarkers + moneyForCleningSupplie;

    let finalSum = sumMoneyForSupplies - (sumMoneyForSupplies * percentDiscount);

    console.log(finalSum);
}
suppliesForSchool(["2", "3", "4", "25"]);