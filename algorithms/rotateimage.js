const rotate = (matrix) => {
    let matrixLen = matrix.length; //5
    let total = matrixLen * matrixLen;
    let boundarySize = matrix.length;
    let offset = 0;
    //do outer rotations
    //calculate inner cells
    //do inner rotations
    while (total > 1) {
        innerSwap(matrixLen, matrix, offset, boundarySize);
        total = total - (matrixLen * 4 - 4);
        matrixLen -= 2;
        offset++;
        boundarySize--;
    }
};

function innerSwap(n, matrix, offset, boundarySize) {
    //rotations = n-1
    //(1,1), (1,2), (1,3)
    //(2,1), (2,2), (2,3)
    //(3,1), (3,2), (3,3)
    for (let i = 0; i < n - 1; i++) {
        let pointer1 = matrix[offset][i + offset]; //(1,1)
        let pointer2 = matrix[i + offset][boundarySize - 1]; //(1,3)
        let pointer3 = matrix[boundarySize - 1][boundarySize - 1 - i]; //(3,3)
        let pointer4 = matrix[boundarySize - 1 - i][offset]; //(3,1)

        matrix[offset][i + offset] = pointer4;
        matrix[i + offset][boundarySize - 1] = pointer1;
        matrix[boundarySize - 1][boundarySize - 1 - i] = pointer2;
        matrix[boundarySize - 1 - i][offset] = pointer3;
    }

    // function fourSwap(n, matrix) {
    //     for (let i = 0; i < n - 1; i++) {
    //         let pointer1 = matrix[0][i];
    //         let pointer2 = matrix[0 + i][n - 1];
    //         let pointer3 = matrix[n - 1][n - 1 - i];
    //         let pointer4 = matrix[n - 1 - i][0];

    //         matrix[0][i] = pointer4;
    //         matrix[0 + i][n - 1] = pointer1;
    //         matrix[n - 1][n - 1 - i] = pointer2;
    //         matrix[n - 1 - i][0] = pointer3;
    //     }
    // }
}

//matrix has to be n x n
//n size has n-1 rotations for outer cells

// 3 --> 2 outer rotations
// 4 --> 3 rotations
// 5 --> 4 rotations
// 6 --> 5 rotations

// 5x5 matrix
const x = [
    [1, 2, 3, 4, 5],
    [16, 1, 2, 3, 6], //1,1 1,2, 1,3
    [15, 8, 2, 4, 7], //2,1,2,2, 2,3
    [14, 7, 6, 5, 8], //3,1,3,2,3,3
    [13, 12, 11, 10, 9],
];

const y = [
    [1, 2, 3, 4, 5, 6, 7],
    [24, 1, 2, 3, 4, 5, 8], // 1,1 -1,5, 1,5 -> 5,5, 5,5 -> 5,1, 5,1 -> 1,1
    [23, 16, 1, 2, 3, 6, 9], //2,2 2,3 2,4
    [22, 15, 8, 1, 4, 7, 10], //3,2 3,3 3,4
    [21, 14, 7, 6, 5, 8, 11], //4,2 4,3 4,4
    [20, 13, 12, 11, 10, 9, 12],
    [19, 18, 17, 16, 15, 14, 13],
];

rotate(x);