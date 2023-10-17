function charactersInRange(char1, char2) {
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    firstChar = Math.min(code1, code2);
    secondChar = Math.max(code1, code2);

    let result = '';
    for (let i = firstChar + 1; i < secondChar; i++) {
    let currChar = String.fromCharCode(i);
    
    result += currChar + " ";
    }

    console.log(result);
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');