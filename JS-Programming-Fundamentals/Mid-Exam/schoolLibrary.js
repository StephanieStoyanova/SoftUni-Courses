function schoolLibrary(input) {
    let shelfWithBooks = input.shift().split("&");
    let command = input.shift().split(" | ");
    
    while (command != "Done") {
        
        if (command[0] == "Add Book") {
            if (!(shelfWithBooks.includes(command[1]))) {
                shelfWithBooks.unshift(command[1]);
            }
        } else if (command[0] == "Take Book") {
            if (shelfWithBooks.includes(command[1])) {
                let indexBookToRemove = shelfWithBooks.indexOf(command[1]);
                shelfWithBooks.splice(indexBookToRemove, 1);
            }
        } else if (command[0] == "Swap Books") {
            if (shelfWithBooks.includes(command[1]) && shelfWithBooks.includes(command[2])) {
                let indexBook1 = shelfWithBooks.indexOf(command[1]);
                let indexBook2 = shelfWithBooks.indexOf(command[2]);
                [shelfWithBooks[indexBook1], shelfWithBooks[indexBook2]] = [shelfWithBooks[indexBook2], shelfWithBooks[indexBook1]];
            }
        } else if (command[0] == "Insert Book") {
            if (!(shelfWithBooks.includes(command[1]))) {
                shelfWithBooks.push(command[1]);
            }
        } else if (command[0] == "Check Book") {
            let index = Number(command[1]);
            if (index >= 0 && index < shelfWithBooks.length) {
                console.log(shelfWithBooks[command[1]]);
            }
        }

        command = input.shift().split(" | ");

    }

   console.log(shelfWithBooks.join(", "))
}

schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",

"Add Book | Catch-22",

"Swap Books | Anna Karenina | Catch-22",

"Take Book | David Copperfield",

"Done"]);

//Catch-22, Heart of Darkness, Anna Karenina, The Stranger

schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",

"Add Book | Ulysses",

"Take Book | Don Quixote",

"Insert Book | Alice's Adventures in Wonderland", "Done"]);

//Ulysses, The Great Gatsby, Moby Dick, Alice's Adventures in Wonderland

schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",

"Check Book | 2",

"Swap Books | Don Quixote | Ulysses", "Done"]);

//Ulysses 
//War and Peace, Hamlet, Ulysses, Madame Bovary