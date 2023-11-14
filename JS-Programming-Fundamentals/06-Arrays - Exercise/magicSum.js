function magicSum(array, targetSum) {
    array.forEach((num, index, arr) => {
        arr.slice(index + 1)
           .filter(otherNum => num + otherNum === targetSum)
           .forEach(otherNum => console.log(`${num} ${otherNum}`));
    });
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
