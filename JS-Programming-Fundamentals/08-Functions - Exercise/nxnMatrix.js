function nxnMatrix(num) {
    for (let row = 1; row <= num; row++) {
        let currRow = `${num} `.repeat(num);
        console.log(currRow);
    }
}

nxnMatrix(3);