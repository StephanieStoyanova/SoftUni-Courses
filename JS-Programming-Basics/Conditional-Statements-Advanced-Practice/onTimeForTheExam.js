function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let totalExamTime = examHour * 60 + examMinute;
    let totalArrivalTime = arrivalHour * 60 + arrivalMinute;

    let totalTimeDiff = Math.abs(totalExamTime - totalArrivalTime);
    let diffHour = Math.floor(totalTimeDiff / 60);
    let diffMin = totalTimeDiff % 60;

    if (diffHour > 0 && diffMin < 10) {
        diffMin = `0${diffMin}`;
    }

    if (totalArrivalTime === totalExamTime) {
        console.log("On time");
    } else if (totalArrivalTime > totalExamTime) {
        console.log("Late");
        if (totalTimeDiff < 60) {
            console.log(`${totalTimeDiff} minutes after the start`);
        } else {
            console.log(`${diffHour}:${diffMin} hours after the start`);
        }
    } else {
        if (totalTimeDiff <= 30){
        console.log("On time");
        console.log(`${totalTimeDiff} minutes before the start`);
        } else {
            console.log("Early");
            if (totalTimeDiff < 60) {
                console.log(`${totalTimeDiff} minutes before the start`);
            } else {
                console.log(`${diffHour}:${diffMin} hours before the start`);
            }
        }
    }
}

onTimeForTheExam(["14", "00", "13", "55"]);