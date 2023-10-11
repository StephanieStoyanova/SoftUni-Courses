function oldLibrary(input) {
    let index = 0;

    let searchedBook = input[index];
    index++;

    let currentBook = input[index];
    index++;

    let booksChecked = 0;

    while (currentBook !== "No More Books") {
        if (searchedBook === currentBook) {
            console.log(`You checked ${booksChecked} books and found it.`);
            break;
        }
        
        if (searchedBook !== currentBook) {
            booksChecked++;
        }

        currentBook = input[index];
        index++;
    }

    if (currentBook === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`);
    }
}

oldLibrary(["Troy", "Stronger", "Life Style", "Troy"]);