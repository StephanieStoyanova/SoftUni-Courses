function tradeCommissions(input) {
    let city = input[0];
    let sells = Number(input[1]);
    let commission = 0;

    switch(city){
        case "Sofia":
            if (0 <= sells && sells <= 500){
                commission = sells * 0.05;
            } else if (500 < sells && sells <= 1000) {
                commission = sells * 0.07;
            } else if (1000 < sells && sells <= 10000) {
                commission = sells * 0.08;
            } else if (sells > 10000) {
                commission = sells * 0.12;
            } else {
                console.log("error"); break;
            }
            console.log(commission.toFixed(2));
            break;
        case "Varna":
            if (0 <= sells && sells <= 500){
                commission = sells * 0.045;
            } else if (500 < sells && sells <= 1000) {
                commission = sells * 0.075;
            } else if (1000 < sells && sells <= 10000){
                commission = sells * 0.1;
            } else if (sells > 10000) {
                commission = sells * 0.13;
            } else {
                console.log("error"); break;
            }
            console.log(commission.toFixed(2));
            break;
        case "Plovdiv":
            if (0 <= sells && sells <= 500) {
                commission = sells * 0.055;
            } else if (500 < sells && sells <= 1000) {
                commission = sells * 0.08;
            } else if (1000 < sells && sells <= 10000) {
                commission = sells * 0.12;
            } else if (sells > 10000) {
                commission = sells * 0.145;
            } else {
                console.log("error"); break;
            }
            console.log(commission.toFixed(2));
            break;
        default: console.log("error");  
    } 
}

tradeCommissions(["Plovdiv", "-20"]);