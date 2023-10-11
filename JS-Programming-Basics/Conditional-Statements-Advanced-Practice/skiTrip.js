function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rate = input[2];

    let nights = days - 1;
    let stayPrice = 0;
    let finalPrice = 0;

    switch (roomType) {
        case "room for one person":
            finalPrice = nights * 18.00;
             break;

        case "apartment":    
            stayPrice = nights * 25.00;
            if (nights < 10) {
                finalPrice = stayPrice * 0.70;
            } else if (nights >= 10 && nights <= 15) {
                finalPrice = stayPrice * 0.65;
            } else {
                finalPrice = stayPrice * 0.50;
            }
            break;

        case "president apartment":
            stayPrice = nights * 35.00;
            if (nights < 10) {
                finalPrice = stayPrice * 0.90;
            } else if (nights >= 10 && nights <= 15) {
                finalPrice = stayPrice * 0.85;
            } else {
                finalPrice = stayPrice * 0.80;
            }
            break;
    } 
    
    if (rate === "positive") {
        finalPrice = finalPrice + (finalPrice * 0.25);
    } else if (rate === "negative") {
        finalPrice = finalPrice - (finalPrice * 0.10);
    }

    console.log(finalPrice.toFixed(2));
}

skiTrip(["2", "apartment", "positive"]);