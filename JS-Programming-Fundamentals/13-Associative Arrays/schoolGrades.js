function schoolGrades(arr) {
    let result = {};

    for (let student of arr) {
        let tokens = student.split(" ");
        let studentName = tokens.shift();
        let studentGrades = tokens.map(Number);

        if (!result.hasOwnProperty(studentName)) {
            result[studentName] = studentGrades;
        } else {
            for (let grade of studentGrades) {
            result[studentName].push(grade);
            }
        }
    }

    for (let student of Object.keys(result).sort()) {
        let grades = result[student];
        let avgGrade = (grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(2);
        console.log(`${student}: ${avgGrade}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);