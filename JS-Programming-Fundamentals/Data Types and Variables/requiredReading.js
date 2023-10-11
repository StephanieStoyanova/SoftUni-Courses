function requiredReading(bookPages, pagesPerHour, daysToRead) {
    let totalTimeToReadTheBook = bookPages / pagesPerHour;
    let requiredHoursPerDay = totalTimeToReadTheBook / daysToRead;

    console.log(requiredHoursPerDay);
}

requiredReading(212, 20, 2);