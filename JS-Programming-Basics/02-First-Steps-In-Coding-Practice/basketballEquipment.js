function basketballequipment(input) {
    let annualFeeForBasketballTraining = Number (input[0]);

    let basketballShoes = annualFeeForBasketballTraining - (annualFeeForBasketballTraining * 0.40);
    let basketballClothes = basketballShoes - (basketballShoes * 0.20);
    let basketballBall = basketballClothes * 1 / 4;
    let basketballAccessories = basketballBall * 1 / 5;

    let sumEquipment = annualFeeForBasketballTraining + basketballShoes + basketballClothes + basketballBall + basketballAccessories;

    console.log(sumEquipment);
}
basketballequipment(["365"]);