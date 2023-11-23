function modernTimesOfHashTag(text) {
    let words = text.split(" ");

    for (let word of words) {
        if (word.startsWith("#")) {
            let specialWord = word.slice(1);
            if (/^[A-Za-z]+$/.test(specialWord)) {
            console.log(specialWord);
            }
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');