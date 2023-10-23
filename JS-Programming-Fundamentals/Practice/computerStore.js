function computerStore(input) {
    let command = input.shift();
    let totalPrice = 0;
    

    while (command != "special" && command != "regular") {
    let price = Number(command);

    if (price < 0) {
    console.log("Invalid price!");
    } else {
        totalPrice += price;
    }

    command = input.shift();
    }

    if (totalPrice == 0) {
        console.log("Invalid order!");
        return;
    }

    let taxes = totalPrice * 0.20;
    let finalPrice = totalPrice + taxes;

    if (command == "special") {
        let discount = finalPrice * 0.1;
        finalPrice -= discount;
    }
    
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${finalPrice.toFixed(2)}$`);
}

computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);