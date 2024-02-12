function add(num) {
    let sum = num;

    function innerAdd(newNum) {
        sum += newNum;
        return innerAdd
    }

    innerAdd.toString = function () {
        return sum;
    }

    return innerAdd;
}
