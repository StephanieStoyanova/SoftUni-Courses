function numbers2k1(input) {
    let num = Number(input[0]);

    let k = 1;

    while (k <= num) {
        console.log(k);
        k = 2 * k + 1;
    }
}

numbers2k1(["31"]);