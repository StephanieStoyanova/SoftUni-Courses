function oddOccurrances(input) {
    let elements = input.toLowerCase().split(" ");

    let result = {};

    elements.forEach(el => {
        result[el] = (result[el] || 0) + 1;
    });

    let oddOcrncs = [];
    for (let [key, value] of Object.entries(result)) {
        if (value % 2 !== 0) {
            oddOcrncs.push(key);
        }
    }

    console.log(oddOcrncs.join(" "));
}

oddOccurrances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrances('Cake IS SWEET is Soft CAKE sweet Food' );