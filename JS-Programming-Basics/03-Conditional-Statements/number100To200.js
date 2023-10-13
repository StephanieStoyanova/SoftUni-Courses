function number100To200(input) {
    let numb = Number(input[0]);

    if (numb < 100) {
        console.log("Less than 100");
    } else if (numb <= 200) {
        console.log("Between 100 and 200");
    } else if ( numb > 200) {
        console.log("Greater than 200");
    }
}

number100To200(["154"]);