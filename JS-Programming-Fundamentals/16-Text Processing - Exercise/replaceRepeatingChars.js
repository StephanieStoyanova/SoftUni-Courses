function replaceRepeatingChars(string) {
    let characters = string.split('');

    let result = '';

    for (let i = 0; i < characters.length; i++) {
        if (characters[i] !== characters[i + 1]) {
            result += characters[i];
        }
    }

    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');