function theatrePromotions(day, age) {
    if (age < 0 || age > 122) {
        console.log("Error!")
    } else if (age >= 0 && age <= 18) {
        if (day == "Weekday") {
            console.log("12$");
        } else if (day == "Weekend") {
            console.log("15$");
        } else if (day == "Holiday") {
            console.log("5$");
        }
    } else if (age <= 64) {
        if (day == "Weekday") {
            console.log("18$");
        } else if (day == "Weekend") {
            console.log("20$");
        } else if (day == "Holiday") {
            console.log("12$");
        }
    } else if (age <= 122) {
        if (day == "Weekday") {
            console.log("12$");
        } else if (day == "Weekend") {
            console.log("15$");
        } else if (day == "Holiday") {
            console.log("10$");
        }
    }
}

theatrePromotions ('Weekday', 42);
theatrePromotions ('Holiday', -12);
theatrePromotions ('Holiday', 15);