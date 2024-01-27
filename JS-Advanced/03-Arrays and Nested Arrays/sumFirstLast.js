function sumFirstLast(arr) {
    return Number(arr.shift()) + Number(arr.pop());
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);