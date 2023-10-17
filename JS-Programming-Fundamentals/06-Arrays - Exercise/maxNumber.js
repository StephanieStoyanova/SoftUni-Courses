function maxNumber(arr) {
    let topNums = [];
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];

            if (currNum <= rightNum) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            topNums.push(currNum);
        }
    }

    console.log(topNums.join(" "));

}

maxNumber([1, 4, 3, 2]);