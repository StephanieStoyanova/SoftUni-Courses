function roadRadar(currSpeed, area) {
    let areaLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }
    
    let speedDifference = currSpeed - areaLimits[area];
    let overSpeedStatus = speedStatus(speedDifference);
    
    if (currSpeed <= areaLimits[area]) {
        console.log(`Driving ${currSpeed} km/h in a ${areaLimits[area]} zone`);
    } else {
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${areaLimits[area]} - ${overSpeedStatus}`);
    }
      
    function speedStatus(speedDiff) {
        let status = '';
        if (speedDiff <= 20) {
            status = 'speeding';
        } else if (speedDiff <= 40) {
            status = 'excessive speeding';
        } else if (speedDiff > 40) {
            status = 'reckless driving';
        }
        return status;
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');