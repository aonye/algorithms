const setZeroes = function (matrix) {
    const len = matrix.length;
    const arrLen = matrix[0].length;
    const map1 = new Map();
    let count = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < arrLen; j++) {
            if (matrix[i][j] === 0) {
                // Zero at (1,1) -> (0,1) up, (2,1) down, (1,2) right, (1,0) left
                map1.set(count, [i, j]);
                count++;
            }
        }
    }
    for (let [, v] of map1) {
        matrix = setZero(matrix, v, 'up', len, arrLen);
        matrix = setZero(matrix, v, 'down', len, arrLen);
        matrix = setZero(matrix, v, 'left', len, arrLen);
        matrix = setZero(matrix, v, 'right', len, arrLen);
    }
    return matrix;
};

function setZero(matrix, coord, dir, len, arrLen) {
    // Zero at (1,1) -> (0,1) up, (2,1) down, (1,2) right, (1,0) left
    let [i, j] = coord;
    while (true) {
        if (dir === 'up') {
            i--;
            if (0 > i) {
                break;
            }
        }
        else if (dir === 'down') {
            i++;
            if (i > len - 1) {
                break;
            }
        }
        else if (dir === 'right') {
            j++;
            if (j > arrLen - 1) {
                break;
            }
        }
        else if (dir === 'left') {
            j--;
            if (0 > j) {
                break;
            }
        }
        matrix[i][j] = 0;
        continue;
    }
    return matrix;
}

let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
console.log(setZeroes(matrix));