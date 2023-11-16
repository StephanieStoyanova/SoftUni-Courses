function employees(arr) {
    for (let employeeName of arr) {
        let employee = { name: employeeName, personalNum: employeeName.length };
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);