function wordsTracker(arr) {
    let searchedWords = arr.shift().split(" ");
    let occurrences = {};

    for (let word of searchedWords) {
        occurrences[word] = 0;
    }

    for (let word of arr) {
        if (word in occurrences) {
            occurrences[word]++;
        }
    }

    for (let entry of Object.entries(occurrences).sort((a, b) => b[1] - a[1])) {
        console.log(entry.join(" - "));
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'
]);