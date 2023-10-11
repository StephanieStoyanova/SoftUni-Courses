function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);

    let boatPrice = 0;

    switch (season) {
        case "Spring":
            boatPrice = 3000;
            break;

        case "Summer":
        case "Autumn":
            boatPrice = 4200;
            break;

        case "Winter":
            boatPrice = 2600;
            break;
    }

    if (fisherCount <= 6) {
        boatPrice *= 0.90;
    } else if (fisherCount <= 11) {
        boatPrice *= 0.85;
    } else {
        boatPrice *= 0.75;
    }

    if (fisherCount % 2 === 0 && season !== "Autumn") {
        boatPrice *= 0.95;
    }

    if (budget >= boatPrice) {
        let moneyLeft = budget - boatPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else if (budget < boatPrice) {
        let moneyNeeded = boatPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}

fishingBoat(["2000", "Winter", "6"]);