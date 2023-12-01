function piccolo(cars) {
    let parking = {};

    for (let car of cars) {
        let [direction, carNum] = car.split(", ");;

        if (direction == "IN") {
            parking[carNum] = true;
        } else if (direction == "OUT") {
            delete parking[carNum];
        }
    }

    let sortedCars = Object.keys(parking).sort((a, b) => a.localeCompare(b));

    if (sortedCars.length == 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(sortedCars.join("\n"));
    }
}

piccolo([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'
]);

piccolo([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'
]);