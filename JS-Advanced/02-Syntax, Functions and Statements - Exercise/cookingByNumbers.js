function cookingByNumbers(numAsStr, ...op) {
    let num = Number(numAsStr);
    let operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.80,
    }

    op.forEach(el => {
        num = operations[el](num);
        console.log(num);
    })
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
