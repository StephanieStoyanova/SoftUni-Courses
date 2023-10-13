function trainTheTrainers(input) {
    let index = 0;

    let jurryMembersCount = Number(input[index]);
    index++;

    let presentationName = input[index];
    index++;

    let allGrades = 0;
    let allGradesCount = 0;

    while (presentationName !== "Finish") {
        let grade = Number(input[index]);
        index++;
        let gradeAverSum = 0;
        
        for (let gradeCount = 1; gradeCount <= jurryMembersCount; gradeCount++) {
            gradeAverSum += grade;
            allGrades += grade;
            allGradesCount++;
            if (gradeCount < jurryMembersCount) {
                grade = Number(input[index]);
                index++;
            }
        }

        console.log(`${presentationName} - ${(gradeAverSum / jurryMembersCount).toFixed(2)}.`);

        presentationName = input[index];
        index++;
    }

    if (presentationName === "Finish") {
        console.log(`Student's final assessment is ${(allGrades / allGradesCount).toFixed(2)}.`);
    }

}

trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);