function wildZoo(input) {
    let command = input.shift();
    let animalsRecord = {};
    let areasRecord = {};

    while (command != "EndDay") {
        let tokens = command.split(": ");
        let action = tokens.shift();

        if (action == "Add") {
            let [animalName, neededFoodQty, area] = tokens.join(": ").split("-");
            neededFoodQty = Number(neededFoodQty);
            
            if (!(animalName in animalsRecord)) {
                animalsRecord[animalName] = { neededFoodQty, area };
                if (area in areasRecord) {
                    areasRecord[area]++;
                } else {
                    areasRecord[area] = 1;
                }
            } else {
                animalsRecord[animalName].neededFoodQty += neededFoodQty;
            }
        } else if (action == "Feed") {
            let [animalName, food] = tokens.join(": ").split("-");
            food = Number(food);

            if (animalName in animalsRecord) {
                animalsRecord[animalName].neededFoodQty -= food;

                if (animalsRecord[animalName].neededFoodQty <= 0) {
                    if (animalsRecord[animalName].area in areasRecord) {
                        areasRecord[animalsRecord[animalName].area]--;
                    }
                    delete animalsRecord[animalName];
                    console.log(`${animalName} was successfully fed`);
                }
            }
        }

        command = input.shift();
    }

    console.log("Animals:");
    for (let animal in animalsRecord) {
        console.log(` ${animal} -> ${animalsRecord[animal].neededFoodQty}g`);
    }

    console.log("Areas with hungry animals:");
    for (let area in areasRecord) {
        if (areasRecord[area] > 0) {
        console.log(` ${area}: ${areasRecord[area]}`);
        }
    }
}

wildZoo([
    "Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"]);

wildZoo([
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"
]);

wildZoo([
    "Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"
]);