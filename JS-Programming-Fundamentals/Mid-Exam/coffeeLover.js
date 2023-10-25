function coffeeLover(input) {
    let coffeList = input.shift().split(" ");
    let numberCommands = Number(input.shift());

    for (let i = 0; i < numberCommands; i++) {
        let tokens = input[i].split(" ");
        let command = tokens.shift();

        if (command == "Include") {
            coffeList.push(tokens[0]);
        } else if (command == "Remove") {
            let numElToRemove = Number(tokens[1]);
            
            if (numElToRemove < 0 || numElToRemove > coffeList.length) {
                    continue;
                } else {
                    if (tokens[0] == "first") {
                        coffeList.splice(0, numElToRemove);
                    } else if (tokens[0] == "last") {
                        coffeList.splice(-numElToRemove);
                    }
            }

        } else if (command == "Prefer") {
            let index1 = Number(tokens[0]);
            let index2 = Number(tokens[1]);

            if (index1 < 0 || index1 >= coffeList.length || index2 < 0 || index2 >= coffeList.length) {
                continue;
            } else {
                [coffeList[index1], coffeList[index2]] = [coffeList[index2], coffeList[index1]];
            }
            
        } else if (command == "Reverse") {
            coffeList.reverse(); 
        }
    }

    console.log("Coffees:");
    console.log(coffeList.join(" "));
    
} 

coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
"5",
"Include TurkishCoffee",
"Remove first 2", 
"Remove last 1",
"Prefer 3 1",
"Reverse"]);