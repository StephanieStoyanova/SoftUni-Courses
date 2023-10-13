function cake(input) {
    let index = 0;

    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let cakeTotal = width * length;
    let holeCake = cakeTotal;

    let command = input[index];
    index++;

    let sumPeacesTaken = 0;

    while (command !== "STOP") {
        let peacesTaken = Number(command);
        if (peacesTaken >= cakeTotal){
            console.log(`No more cake left! You need ${peacesTaken - cakeTotal} pieces more.`);
            break;
        }

        cakeTotal -= peacesTaken;
        sumPeacesTaken += peacesTaken;

        command = input[index];
        index++;
    }

    if (command === "STOP") {
        console.log(`${holeCake - sumPeacesTaken} pieces are left.`);
    }
}

cake(["10", "2", "2", "4", "6", "STOP"]);