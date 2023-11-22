function revealWords(words, text) {
    words = words.split(", ");
    text = text.split(" ");

    for (let i = 0; i < text.length; i++) {
        if (text[i].includes("*")) {
            let wordFromTextLength = text[i].length;

            for (let j = 0; j < words.length; j++) {
                if (words[j].length === wordFromTextLength) {
                    text[i] = words[j];
                }
            }
        }
    }

    console.log(text.join(" "));
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');