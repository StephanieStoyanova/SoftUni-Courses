function arrayManipulator(nums, commands) {
    for (let command of commands) {
        let tokens = command.split(" ");
        let action = tokens[0];

        if (action == "add") {
            let idx = Number(tokens[1]);
            let num = Number(tokens[2]);

            nums.splice(idx, 0, num);
        } else if (action == "addMany") {
            let idx = Number(tokens[1]);
            let numsToAdd = tokens.splice(2,).map(Number);

            for (let num of numsToAdd) {
                nums.splice(idx, 0, num);
                idx++;
            }
        } else if (action == "contains") {
            let num = Number(tokens[1]);
            let idx = nums.indexOf(num);
            console.log(idx);
        } else if (action == "remove") {
            let idx = Number(tokens[1]);
            nums.splice(idx, 1);
        } else if (action == "shift") {
            let rotations = Number(tokens[1]);

            for (let rotation = 1; rotation <= rotations; rotation++) {
                let firstNum = nums.shift();
                nums.push(firstNum);
            }
        } else if (action == "sumPairs") {
            let pairsArr = [];
            for (let i = 0; i < nums.length; i += 2) {

                if (i + 1 < nums.length) {
                pairsArr.push(nums[i] + nums[i+1]);
                } else {
                    pairsArr.push(nums[i]);
                }
            }

            nums = pairsArr;
        } else if (action == "print") {
            console.log(`[ ${nums.join(", ")} ]`);
        }
    }
}

arrayManipulator(
    [1, 2, 3, 4, 5], 
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);

arrayManipulator(
    [1, 2, 4, 5, 6, 7], 
    ['add 1 8', 'contains 1', 'contains 3', 'print']);