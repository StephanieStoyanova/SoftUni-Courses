function combination(input) {
    let searchedResult = Number(input[0]);

    let combinationsCount = 0;

    for (let x1 = 0; x1 <= searchedResult; x1++) {
        for (let x2 = 0; x2 <= searchedResult; x2++) {
            for (let x3 = 0; x3 <= searchedResult; x3++) {
                let n = x1 + x2 + x3;
                if (n === searchedResult) {
                    combinationsCount++;
                }
            }
        }
    }

    console.log(combinationsCount);

}

combination(["25"]);