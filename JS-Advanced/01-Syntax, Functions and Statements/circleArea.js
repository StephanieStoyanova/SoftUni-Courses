function circleArea(input) {
    let inputType = typeof(input);
    let result;
    if (inputType == "number") {
        result = Math.PI * Math.pow(input, 2);
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

circleArea(5);
circleArea('name');