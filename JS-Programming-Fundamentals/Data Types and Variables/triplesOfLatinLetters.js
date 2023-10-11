function triplesOfLatinLetters(num) {
    for (let first = 0; first < num; first++) {
        for (let second = 0; second < num; second++) {
            for (let third = 0; third < num; third++){
                console.log(`${String.fromCharCode(97+first)}${String.fromCharCode(97+second)}${String.fromCharCode(97+third)}`);
            }
        }
    }
}

triplesOfLatinLetters("3");
triplesOfLatinLetters("2");