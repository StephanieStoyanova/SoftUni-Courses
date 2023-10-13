function triangleOfNumbers(maxRow) {
    for (let num = 1; num <= maxRow; num++) {    
        console.log(`${num} `.repeat(num));
    }
}

triangleOfNumbers (3);
triangleOfNumbers (5);
triangleOfNumbers (6);