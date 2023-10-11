function examPrep(input) {
    let index = 0;

    let maxBadGrades = Number(input[index]);
    index++

    let exerciseName = input[index];
    index++;

    let exerciseGrade = Number(input[index]);
    index++;

    let badGradesCounter = 0;
    let exerciseCounter = 0;
    let gradeSum = 0;
    let lastExercise = "";

    while (exerciseName !== "Enough") {
        lastExercise = exerciseName;
        if (exerciseGrade <= 4) {
            badGradesCounter++;
        }

        if (badGradesCounter === maxBadGrades) {
            console.log(`You need a break, ${badGradesCounter} poor grades.`);
            break;
        }

        exerciseCounter++;
        gradeSum += exerciseGrade;
        

        exerciseName = input[index];
        index++;
        exerciseGrade = Number(input[index]);
        index++;

    }

    if (exerciseName === "Enough") {
        console.log(`Average score: ${(gradeSum / exerciseCounter).toFixed(2)}`);
        console.log(`Number of problems: ${exerciseCounter}`);
        console.log(`Last problem: ${lastExercise}`);
    }
}
 
examPrep(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);