function equalNeighbors(matrix) {
    let sumEqualPairs = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j <= matrix[i].length - 1; j++) {
            if (matrix[i][j] === matrix[i][j + 1]) {
                sumEqualPairs++;
            }
            if (i < matrix.length - 1 && matrix[i][j] === matrix[i + 1][j]) {
                sumEqualPairs++;
            }
        }
    }

    return sumEqualPairs;

}

equalNeighbors([
['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]);

equalNeighbors([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']
]);

equalNeighbors([
['test', 'yes', 'yo', 'ho'], 
['well', 'done', 'yo', '6'], 
['not', 'done', 'yet', '5']
]);