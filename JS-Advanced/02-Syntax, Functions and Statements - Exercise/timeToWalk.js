function timeToWalk(steps, footprintLengthInMeters, speedInKmH) {
    //Every 500 meters the student rests and takes a 1-minute break.
    let speedInMetersPerSecond = (speedInKmH * 1000) / 3600;

    let totalDistance = steps * footprintLengthInMeters;
    let breaks = Math.floor(totalDistance / 500);
    let totalTimeInSeconds = (totalDistance / speedInMetersPerSecond) + (breaks * 60);

    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    let seconds = Math.ceil(totalTimeInSeconds % 60);

    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;
    let minutesToPrint = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let secondsToPrint = seconds < 10 ? `0${seconds}` : `${seconds}`;

    console.log(`${hoursToPrint}:${minutesToPrint}:${secondsToPrint}`);
}


timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);