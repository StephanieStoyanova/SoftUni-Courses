function sortArray(arr, argument) {
    return argument == "asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);

}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([17, 4, 21, 5, 3], 'desc'));