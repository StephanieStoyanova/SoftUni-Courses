function lastKNumbersSequance(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let currentElement = sequence.slice(-k).reduce((sum, num) => sum + num, 0);
        sequence.push(currentElement);
    }
     
    console.log(sequence.join(" "));
}

lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);