function orders(product, quantity) {
//coffee - 1.50
//water - 1.00
//coke - 1.40
//snacks - 2.00
let totalPrice = 0;
switch (product) {
    case "coffee":
        totalPrice = quantity * 1.50;
        break;

    case "water":
        totalPrice = quantity * 1.00;
        break;

    case "coke":
        totalPrice = quantity * 1.40;
        break;

    case "snacks":
        totalPrice = quantity * 2;
        break;
}

console.log(totalPrice.toFixed(2));
}

orders("water", 5);