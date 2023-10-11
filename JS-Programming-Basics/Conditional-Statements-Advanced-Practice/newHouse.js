function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    let flowerPrice = 0;

    switch (flowerType) {
        case "Roses":
            flowerPrice = flowerCount * 5.00;

            if (flowerCount > 80) {
                flowerPrice *= 0.90;
            }
            break;
        
        case "Dahlias":
            flowerPrice = flowerCount * 3.80;

            if (flowerCount > 90) {
                flowerPrice *= 0.85;
            }
            break;

        case "Tulips":
            flowerPrice = flowerCount * 2.80;

            if (flowerCount > 80) {
                flowerPrice *= 0.85;
            }
            break;

        case "Narcissus":
            flowerPrice = flowerCount * 3.00;

            if (flowerCount < 120) {
                flowerPrice *= 1.15;
            }
            break;

        case "Gladiolus":
            flowerPrice = flowerCount * 2.50;

            if (flowerCount < 80) {
                flowerPrice *= 1.20;
            }
            break;
    }

    let moneyLeft = budget - flowerPrice;
    let moneyNeeded = flowerPrice - budget;

    if (budget >= flowerPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else if (budget < flowerPrice) {
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }
}

newHouse(["Roses", "55", "250"]);