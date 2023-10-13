function radiansToDegrees(input) {
    radians = Number (input[0]);
    let degrees = radians * 180 / Math.PI
    console.log(degrees);
}
radiansToDegrees(["3.1416"]);