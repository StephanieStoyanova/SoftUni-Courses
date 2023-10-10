function fishTank(input) {
    let lenghtCm = Number (input[0]);
    let widthCm = Number (input[1]);
    let heightCm = Number (input[2]);
    let percent = Number (input[3]) / 100;

    let volumeAquarium = lenghtCm * widthCm * heightCm;
    let volumeLetres = volumeAquarium * 0.001;

    let water = volumeLetres * (1 - percent);
    console.log(water);

}
fishTank(["85", "75", "47", "17"]);