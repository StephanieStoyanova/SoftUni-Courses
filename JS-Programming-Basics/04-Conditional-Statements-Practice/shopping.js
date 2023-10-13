function shopping(input) {
    let petersBudget = Number(input[0]);
    let videocardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videocardsPrice = videocardsCount * 250;
    let processorsPrice = processorsCount * (videocardsPrice * 0.35);
    let ramPrice = ramCount * (videocardsPrice * 0.1);

    let finalSum = videocardsPrice + processorsPrice + ramPrice;

    if (videocardsCount > processorsCount) {
        finalSum = finalSum - (finalSum * 0.15);
    }

    if (finalSum < petersBudget) {
        let moneyLeft = petersBudget - finalSum;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else if (finalSum > petersBudget) {
        let moneyNeeded = finalSum - petersBudget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}

shopping(["900", "2", "1", "3"]);