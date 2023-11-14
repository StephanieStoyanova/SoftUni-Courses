function maxSequenceOfEqualElements(array) {
    let longestSequence = [];
    let currentSequence = [array[0]];

    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            currentSequence.push(array[i]);
        } else {
            currentSequence = [array[i]];
        }

        if (currentSequence.length > longestSequence.length) {
            longestSequence = currentSequence.slice();
        }
    }

    console.log(longestSequence.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);