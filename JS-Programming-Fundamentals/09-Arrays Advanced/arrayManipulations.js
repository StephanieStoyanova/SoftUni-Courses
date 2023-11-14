function arrayManipulations(commands) {
    let arrNums = commands.shift().split(" ").map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(" ");

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                arrNums.push(firstNum);
                break;

            case "Remove":
                arrNums = arrNums.filter(el => el != firstNum);
                break;

            case "RemoveAt":
                arrNums.splice(firstNum, 1);
                break;

            case "Insert":
                arrNums.splice(secondNum, 0, firstNum);
                break;
        }
    }

    console.log(arrNums.join(" "));
}

arrayManipulations([
'4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);
arrayManipulations([
'6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']);