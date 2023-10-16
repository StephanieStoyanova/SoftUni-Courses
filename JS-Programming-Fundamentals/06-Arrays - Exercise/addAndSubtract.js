function addAndSubtract(arr) {
    let newArr = [];
    let sumOriginalArr = 0;
    let sumNewArr = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i] + i);
        } else {
            newArr.push(arr[i] - i);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        sumOriginalArr += arr[i];
    }

    for (let i = 0; i < newArr.length; i++) {
        sumNewArr += newArr[i];
    }

    console.log(newArr);
    console.log(sumOriginalArr);
    console.log(sumNewArr);
}

addAndSubtract([5, 15, 23, 56, 35]);