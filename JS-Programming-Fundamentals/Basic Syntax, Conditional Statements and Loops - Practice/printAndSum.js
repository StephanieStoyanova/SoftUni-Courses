function printAndSum(start, end) {
    let numGroup = "";
    let sum = 0;
    for (let num = start; num <= end; num++) {
        numGroup += `${num} `;
        sum += num;
    }
    console.log(numGroup);
    console.log(`Sum: ${sum}`);
}

printAndSum (5, 10);
printAndSum (0, 26);
printAndSum (50, 60);