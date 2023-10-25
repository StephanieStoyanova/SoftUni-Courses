function cookingMasterclass(input) {
    let budget  = Number(input[0]);
    let students = Number(input[1]);
    let priceForPackFlour = Number(input[2]);
    let pricePerEgg = Number(input[3]);
    let pricePerApron = Number(input[4]);

    let priceApronWithPercent = Math.ceil(students * 0.20);
    let freeFlourCount = 0;

    for (let i = 1; i <= students; i++) {
        if (i % 5 == 0) {
            freeFlourCount++;
        }
    }

    let sumAll = pricePerApron * (students + priceApronWithPercent) + pricePerEgg * 10 * (students) + priceForPackFlour * (students - freeFlourCount);
    
    if (sumAll <= budget) {
        console.log(`Items purchased for ${sumAll.toFixed(2)}$.`);
    } else {
        let moneyNeeded = sumAll - budget;
        console.log(`${moneyNeeded.toFixed(2)}$ more needed.`);
    }
}

cookingMasterclass([946,
    20,
    12.05,
    0.42,
    27.89]);