function tennisRanklist(input) {
    let competedTournirsCount = Number(input[0]);
    let starterPoints = Number(input[1]);

    let pointsWon = 0;
    let wonTournamentsCount = 0;

    for (let i = 2; i <= input.length; i++) {
        let status = input[i];

        switch (status) {
            case "W":
                pointsWon += 2000;
                wonTournamentsCount++;
                break;
            case "F":
                pointsWon += 1200;
                break;
            case "SF":
                pointsWon += 720;
                break;
        }
    } 
    let totalPoints = starterPoints + pointsWon;
    let averagePointsWining = pointsWon / competedTournirsCount;
    let wonTournamentsPercent = (wonTournamentsCount / competedTournirsCount) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePointsWining)}`);
    console.log(`${wonTournamentsPercent.toFixed(2)}%`);
}
 
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);