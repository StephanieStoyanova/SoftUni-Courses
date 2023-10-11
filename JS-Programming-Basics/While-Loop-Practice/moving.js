function moving(input) {
    let index = 0;

    let width = Number(input[index]);
    index++;
    
    let length = Number(input[index]);
    index++;

    let height = Number(input[index]);
    index++;

    let totalFreeSpace = width * length * height;
    let freeSpace = totalFreeSpace;

    let command = input[index];
    index++;

    let boxesCount = 0;
    
    while (command !== "Done") {
        let boxes = Number(command);
        boxesCount += boxes;
        totalFreeSpace -= boxes;
        
        if (boxes >= totalFreeSpace) {
            if (totalFreeSpace < 0) {
                totalFreeSpace = Math.abs(totalFreeSpace);
                console.log(`No more free space! You need ${boxesCount - freeSpace} Cubic meters more.`);
            }
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Done") {
        console.log(`${freeSpace - boxesCount} Cubic meters left.`);
    }
}

moving(["10", "1", "2", "4", "6", "Done"]);