function timePlus15Mins(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let hoursToMins = hours * 60;
    let totalMins = hoursToMins + minutes + 15;

    let finalHours = Math.floor(totalMins / 60);
    let finalMins = totalMins % 60;

    if (finalHours === 24) {
        finalHours = 0;
    }

    if (finalMins < 10) {
        console.log(`${finalHours}:0${finalMins}`);
    } else {
        console.log(`${finalHours}:${finalMins}`);
    }
    
}

timePlus15Mins(["1", "46"]);