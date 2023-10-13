function areaOfFigures(input) {
    let figureType = input[0];
    let result = 0;

    if (figureType === "square") {
        let a = Number(input[1]);
        result = a * a;
        console.log(result.toFixed(3));
    } else if (figureType === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = a * b;
        console.log(result.toFixed(3));
    } else if (figureType === "circle") {
        let r = Number(input[1]);
        result = Math.PI * r * r;
        console.log(result.toFixed(3));
    } else if (figureType === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        result = a * h / 2;
        console.log(result.toFixed(3));
    }
}
 
areaOfFigures(["square", "5"]);