function worldSwimmingRecord(input) {
    let recordInSecs = Number(input[0]);
    let distanceInMetres = Number(input[1]);
    let timeInSecsForOneMeter = Number(input[2]);

    let slowingTime = Math.floor(distanceInMetres / 15) * 12.5;
    let ivansRecord = (distanceInMetres * timeInSecsForOneMeter) + slowingTime;

    let timeNeeded = ivansRecord - recordInSecs;
    
    if (ivansRecord < recordInSecs) {
        console.log(`Yes, he succeeded! The new world record is ${ivansRecord.toFixed(2)} seconds.`)
    } else if (ivansRecord >= recordInSecs) {
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"]);