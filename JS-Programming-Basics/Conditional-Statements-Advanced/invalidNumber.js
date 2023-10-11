function nvalidNumber(input) {
    let num = Number(input[0]);

    if (num >= 100 && num <= 200) {
        console.log("")
    }
    else if (num === 0) {
            console.log("");
    } 
    else {
        console.log("invalid");
    }
}

nvalidNumber(["201"]);