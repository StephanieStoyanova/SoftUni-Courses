function daysInMonth(month, year) {
    let result = new Date(year, month, 0).getDate();
    console.log(result);
}

daysInMonth(1, 2012);
daysInMonth(2, 2021);