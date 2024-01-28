function magicMatrices(matrix) {
    const referenceSum = matrix[0].reduce((sum, num) => sum + num, 0);

    for (let row of matrix) {
        if (row.reduce((sum, num) => sum + num, 0) !== referenceSum) {
            return false;
        }
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let columnSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            columnSum += matrix[j][i];
        }
        if (columnSum !== referenceSum) {
            return false;
        }
    }

    return true;
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);