function stringLength(arr1, arr2, arr3) {
    let sumLength = arr1.length + arr2.length + arr3.length;
    let avrgLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(avrgLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');