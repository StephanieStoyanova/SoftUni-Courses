function stringSubstring(searchedWord, text) {
    text = text.toLowerCase().split(" ");
    searchedWord = searchedWord.toLowerCase();

    if (text.includes(searchedWord)) {
        console.log(searchedWord);
    } else {
        console.log(`${searchedWord} not found!`);
    }
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');