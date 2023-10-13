function rightPlace(str, chr, result) {
    let res = str.replace('_', chr);
    let output = res === result? "Matched": "Not Matched";
    console.log(output);
}

rightPlace('Str_ng', 'I', 'Strong');