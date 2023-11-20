function wordOccurrences(arr) {
        let words = {}

        arr.map(word => words[word] = 0);

        for (let word of arr) {
            words[word]++
        }
        let sorted = Object.entries(words).sort((a, b) => b[1] - a[1])
        let sortedWords = Object.fromEntries(sorted)
        console.log(Object.entries(sortedWords).map(entry => entry.join(' -> ') + ' times').join('\n'));
}

wordOccurrences(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence",
"And", "finally", "the", "third", "sentence"]);

wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);