function countStringOccurrences(text, word) {
    let words = text.split(" ");

    let count = 0;

    for (let w of words) {
        if (w === word) {
            count++;
        }
    }

    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');