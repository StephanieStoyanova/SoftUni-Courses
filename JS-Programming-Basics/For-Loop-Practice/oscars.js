function oscars(input) {
    let actorName = input[0];
    let pointsFromTheAcademy = Number(input[1]);
    let judgeCount = Number(input[2]);

    let grade = 0;

    for (let i = 3; i < input.length; i += 2) {
        let judgeName = input[i];
        let judgeNamePoints = judgeName.length;
        let judgePoints = Number(input[i + 1]);

        grade = (judgeNamePoints * judgePoints) / 2;
        pointsFromTheAcademy += grade;

        if (pointsFromTheAcademy > 1250.5) {
            break;
        }
    } if (pointsFromTheAcademy > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsFromTheAcademy.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - pointsFromTheAcademy).toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);