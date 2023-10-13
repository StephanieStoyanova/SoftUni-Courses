function steps(input) {
    let stepsGoal = 10000;

    let index = 0;
    
    let command = input[index];
    index++;

    let stepsSum = 0;

    while (command !== "Going home") {
        let steps = Number(command);
        stepsSum += steps;

        if (stepsSum >= stepsGoal) {
            console.log("Goal reached! Good job!");
            console.log(`${stepsSum - stepsGoal} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;

    }

    if (command === "Going home") {
    command = input[index];
    index++;
    let stepsToHome = Number(command);
    stepsSum += stepsToHome;
        if (stepsSum >= stepsGoal) {
            console.log("Goal reached! Good job!");
            console.log(`${stepsSum - stepsGoal} steps over the goal!`);
        } else if (stepsSum < stepsGoal) {
            console.log(`${stepsGoal - stepsSum} more steps to reach goal.`);
        }
    }

}

steps(["1500", "300", "2500", "3000", "Going home", "200"]);