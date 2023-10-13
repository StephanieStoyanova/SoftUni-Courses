function foodDelivery(input) {
    let chickenMenu = Number (input[0]);
    let fishMenu = Number (input[1]);
    let vegetarianMenu = Number (input[2]);

    let sumChickenMenu = chickenMenu * 10.35;
    let sumFishMenu = fishMenu * 12.40;
    let sumVegetarianMenu = vegetarianMenu * 8.15;

    let sumAllMenus = sumChickenMenu + sumFishMenu + sumVegetarianMenu;

    let sumDessert = sumAllMenus * 0.20;

    let sumOrder = sumAllMenus + sumDessert + 2.50;
    console.log(sumOrder);
}
 foodDelivery(["2", "4", "3"]);