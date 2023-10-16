function reverseAnArrayOfNumbers(n, array) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(array[i]);
    }
    console.log(newArr.reverse().join(" "));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
