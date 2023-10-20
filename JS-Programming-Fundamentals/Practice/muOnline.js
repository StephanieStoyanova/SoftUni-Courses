function muOnline(input) { 
    let rooms = input.split("|");

    let health = 100;
    let bitcoins = 0;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(" ");
        let command = room[0];
        let num = Number(room[1]);
        
        if (command == "potion") {
            if (health + num > 100) {
                num = 100 - health;
            }
            health += num;
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == "chest") {
            console.log(`You found ${num} bitcoins.`);
            bitcoins += num;
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${i + 1}`);
            return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");