function traveling(input) {
    let index = 0;

    let destination = input[index];
    index++;

    

    while (destination !== "End") {
        let neededMoney = Number(input[index]);
        index++;
        let moneySum = 0;

        while (moneySum < neededMoney) {
            let currentMoney = Number(input[index]);
            index++;

            moneySum += currentMoney;
            
        }

        console.log(`Going to ${destination}!`);
        destination = input[index];
        index++;
        
    }

}

traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);