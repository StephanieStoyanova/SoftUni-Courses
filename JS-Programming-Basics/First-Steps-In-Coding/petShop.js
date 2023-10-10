function petShop(input){
    let dogFood = input[0];
    let catFood = input[1];
    let priceDog = Number (2.50);
    let priceCat = Number (4);
    let result = (dogFood) * (priceDog) + (catFood) * (priceCat);
    console.log(`${result} lv.`);
}
petShop([5, 4]);