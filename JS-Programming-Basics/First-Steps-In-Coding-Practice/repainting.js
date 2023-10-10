function repainting(input) {
    let amountOfNailon = Number (input[0]);
    let amountOfPaint = Number (input[1]);
    let amountOfPaintThinner = Number (input[2]);
    let hours = Number (input[3]);

    let additionalAmountOfPaint = amountOfPaint + (amountOfPaint * 0.10);

    let nailonSum = (amountOfNailon * 1.50) + (2 * 1.50);
    let paintSum = additionalAmountOfPaint * 14.50;
    let paintThinnerSum = amountOfPaintThinner * 5.00;

    let sumMaterials = nailonSum + paintSum + paintThinnerSum + 0.40;

    let priceWorkPerHour = sumMaterials * 0.30;
    let workSum = hours * priceWorkPerHour;

    let finalSum = sumMaterials + workSum;

    console.log(finalSum);
}
repainting(["10", "11", "4", "8"]);