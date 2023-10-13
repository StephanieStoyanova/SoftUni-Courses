function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let restPlace = "";
    let destination = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            budget *= 0.30;
        } else if (season === "winter") {
            budget *= 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            budget *= 0.40;
        } else if ( season === "winter") {
            budget *= 0.80;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        budget *= 0.90;
    }

    if (season === "summer") {
        restPlace = "Camp";
    } else if (season === "winter") {
        restPlace = "Hotel";
    }
    
    if (destination === "Europe") {
        restPlace = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${restPlace} - ${budget.toFixed(2)}`);
}

journey(["1500", "summer"]);