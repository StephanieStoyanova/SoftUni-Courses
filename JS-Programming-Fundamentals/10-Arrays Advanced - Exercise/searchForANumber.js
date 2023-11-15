function searchForANumber(arr1, arr2) {
    let [elsToTake, elsToDelete, searchedNum] = arr2;

    let newArr = arr1.slice(0, elsToTake).slice(elsToDelete);

    let count = newArr.filter(num => num === searchedNum).length;

    console.log(`Number ${searchedNum} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
