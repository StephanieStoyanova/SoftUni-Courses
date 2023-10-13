function depositeCalculator(input) {
    let depositePrice = Number (input[0]);
    let months = Number (input[1]);
    let annualPercent = Number (input[2]) / 100;

    let sum = depositePrice + months * ((depositePrice * annualPercent) / 12);
    console.log(sum);
}
depositeCalculator(["200", "3", "5.7"]);