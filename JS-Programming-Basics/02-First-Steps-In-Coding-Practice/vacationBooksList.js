function vacationBooksList(input) {
    let pages = Number (input[0]);
    let pagesPerHour = Number (input[1]);
    let days = Number (input[2]);

    let pagesPerDay = pages / pagesPerHour;
    let hoursPerDay = pagesPerDay / days;
    console.log(hoursPerDay);
}
vacationBooksList(["212", "20", "2"]);