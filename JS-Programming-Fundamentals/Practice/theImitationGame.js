function theImitationGame(input) {
    let message = input.shift();
    let command = input.shift();

    while (command != "Decode") {
        let tokens = command.split("|");
        let action = tokens.shift();
        if (action == "Move") {
            let moves = Number(tokens);
            message = message.slice(moves) + message.slice(0, moves);
        } else if (action == "Insert") {
            let index = Number(tokens[0]);
            let value = tokens[1];
            message = message.slice(0, index) + value + message.slice(index);
        } else if (action == "ChangeAll") {
            let match = tokens[0];
            let replacement = tokens[1];
            let parts = message.split(match);
            message = parts.join(replacement);
        }

        command = input.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);

theImitationGame([
    'owyouh',    
    'Move|2',    
    'Move|3',     
    'Insert|3|are', 
    'Insert|9|?',
    'Decode' 
]);