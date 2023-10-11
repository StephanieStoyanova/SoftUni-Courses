function coins(input) {
    let change = Number(input[0]);

    let coins = Math.trunc(change * 100);
    let coinsUsed = 0;

    while (coins > 0) {
        if (coins >= 200) {
            coins -= 200;
        } else if (coins >= 100) {
            coins -= 100;
        } else if (coins >= 50) {
            coins -= 50;
        } else if (coins >= 20) {
            coins -= 20;
        } else if (coins >= 10) {
            coins -= 10;
        } else if (coins >= 5) {
            coins -= 5;
        } else if (coins >= 2) {
            coins -= 2;
        } else if (coins >= 1) {
            coins -= 1;
        }

        coinsUsed++;
    }

    console.log(coinsUsed);

}

coins(["0.56"]);