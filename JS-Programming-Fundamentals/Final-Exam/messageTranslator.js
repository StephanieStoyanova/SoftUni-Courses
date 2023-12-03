function messageTranslator(input) {
    let inputCounts = Number(input.shift());
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[A-Za-z]{8,})\]/;

    for (let i = 0; i < inputCounts; i++) {
        let currStr = input[i];
        if (!(pattern.test(currStr))) {
            console.log("The message is invalid");
        } else {
            let matches = currStr.match(pattern);
            let command = matches.groups.command;
            let stringContent = matches.groups.string;

            let asciiValues = [];
            for (let i = 0; i < stringContent.length; i++) {
                let charCode = stringContent.charCodeAt(i);
                asciiValues.push(charCode);
            }
            console.log(`${command}: ${asciiValues.join(" ")}`);
        }
    }
}

messageTranslator([
    "2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"
]);

messageTranslator([
    "3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"
]);