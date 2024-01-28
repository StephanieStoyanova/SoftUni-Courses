function biggestElement(matrix) {
    let maxElement = matrix[0][0];

    for (let row of matrix) {
        for (let element of row) {
            if (element > maxElement) {
                maxElement = element;
            }
        }
    }

    return maxElement;

}

biggestElement([[20, 50, 10], [8, 33, 145]]);
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);