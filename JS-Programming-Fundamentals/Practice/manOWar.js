function manOWar(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warship = input.shift().split(">").map(Number);
    let healthMaxCapacity = Number(input.shift());

    for (let current of input) {
        let tokens = current.split(' ');
        let command = tokens.shift();

        if (current == "Retire") {
            break;
        } else if (command == "Fire") {
            let index = Number(tokens[0]);
            let damage = Number(tokens[1]);

            if (index < 0 || index >= warship.length) {
                continue;
            } else {
                warship[index] -= damage;
                if (warship[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (command == "Defend") {
            let startIndex = Number(tokens[0]);
            let endIndex = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if (startIndex < 0 || startIndex >= pirateShip.length || endIndex < 0 || endIndex >= pirateShip.length) {
                continue;
            } else {
                for (let index = startIndex; index <= endIndex; index++) {
                pirateShip[index] -= damage;
                if (pirateShip[index] <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    return;
                }
                }
            }
        } else if (command == "Repair") {
            let index = Number(tokens[0]);
            let health = Number(tokens[1]);

            if (index < 0 ||  index >= pirateShip.length) {
                continue;
            } else {
                pirateShip[index] += health;
                if (pirateShip[index] > healthMaxCapacity) {
                    pirateShip[index] = healthMaxCapacity;
                    
                }
                
            }
        } else if (command == "Status") {
                let percentFromMaxHealth = healthMaxCapacity * 0.20;
                let damaged = pirateShip.filter(section => section < percentFromMaxHealth);
            
            console.log(`${damaged.length} sections need repair.`);
        } 
    }

    let pirateShipStatusSum = pirateShip.reduce((acc, currStatus) => acc + currStatus, 0);
    let warshipStatusSum = warship.reduce((acc, currStatus) => acc + currStatus, 0);;
    
    console.log(`Pirate ship status: ${pirateShipStatusSum}`);
    console.log(`Warship status: ${warshipStatusSum}`);
}

manOWar(["12>13>11>20>66", 
"12>22>33>44>55>32>18", 
"70", 
"Fire 2 11", 
"Fire 8 100", 
"Defend 3 6 11", 
"Defend 0 3 5", 
"Repair 1 33", 
"Status", 
"Retire"]);