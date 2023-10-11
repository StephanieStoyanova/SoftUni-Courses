function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let myMaxNum = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (myMaxNum < num) {
            myMaxNum = num;
        }

        command = input[index];
        index++;
    } 
    console.log(myMaxNum);
}

maxNumber(["100", "99", "80", "70", "Stop"]);