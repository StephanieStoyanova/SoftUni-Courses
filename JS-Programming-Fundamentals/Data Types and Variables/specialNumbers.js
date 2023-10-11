function specialNumbers (n) {
    for (let i = 1; i <= n; i++) {
        let num = String(i);
        let sum = 0;

        for (let q = 0; q < num.length; q++) {
            let digit = num[q];
            sum += Number(digit);
        }

        switch (sum) {
            case 5:
            case 7:
            case 11: console.log(`${num} -> True`); break;
            default: console.log(`${num} -> False`); break;
        }
    }
}

specialNumbers(15);
specialNumbers(20);