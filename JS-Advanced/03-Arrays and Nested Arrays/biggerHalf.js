function biggerHalf(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);
    const secondHalf = sortedArr.slice(mid);
    return secondHalf;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);