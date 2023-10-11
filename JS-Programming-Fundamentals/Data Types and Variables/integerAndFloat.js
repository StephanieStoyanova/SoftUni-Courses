function integerAndFloat(one, two, three) {
    let sum = one + two + three;
    sum % 1 === 0? sum += " - Integer": sum += " - Float";
    console.log(sum);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);