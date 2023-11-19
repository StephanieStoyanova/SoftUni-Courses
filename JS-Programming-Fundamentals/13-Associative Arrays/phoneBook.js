function phoneBook(input) {
    let phBook = {};

    for (let item of input) {
        let [name, phone] = item.split(" ");

        phBook[name] = phone;
    }

    for (let entry of Object.entries(phBook)) {
    console.log(entry.join(" -> "));
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']);