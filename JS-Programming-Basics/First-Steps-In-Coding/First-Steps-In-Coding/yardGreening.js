function yardGreening(input){
    let metersForGreening = input[0];
    let greeningPrice = metersForGreening * 7.61;
    let discount = greeningPrice * 0.18;
    let finalPrice = greeningPrice - discount;
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening([550]);