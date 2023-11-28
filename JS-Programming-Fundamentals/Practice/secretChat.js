function secretChat(arr) {
    let message = arr.shift();
    let command = arr.shift();

    while (command != "Reveal") {
        let tokens = command.split(":|:");

        if (tokens[0] == "InsertSpace") {
            let index = Number(tokens[1]);
            message = message.slice(0, index) + ' ' + message.slice(index);

        } else if (tokens[0] == "Reverse") {
            let substring = tokens[1];
            let firstIndex = message.indexOf(substring);
            if (firstIndex == -1) {
                console.log("error");
                command = arr.shift();
                continue;
            }

            let firstHalf = message.slice(0, firstIndex);
            let secondHalf = message.slice(firstIndex + substring.length);
            message = firstHalf + secondHalf + substring.split("").reverse().join("");

            } else if (tokens[0] == "ChangeAll") {
            let match = tokens[1];
            let replacement = tokens[2];
            let parts = message.split(match);
            message = parts.join(replacement);
        }

        console.log(message);
        command = arr.shift();
    } 

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);