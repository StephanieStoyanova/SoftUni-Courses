function sumDigits(num) {
    num = String(num);
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);