// (0,0) -> (0, n)  Right
// (0, n) -> (m, n) Down
// (m, n) -> (m, 0) Left
// (m, 0) -> (0, 0) Up

var spiralOrder = function (matrix) { //n = len, m = depth
    let m = matrix.length;
    let n = matrix[0].length;
    const map1 = new Map();
    let direction = 'right';
    let i = 0;
    let j = 0;
    while (map1.size !== m * n) {
        const coord = i.toString() + j.toString();
        console.log(i, j);
        if (j === n || i === m || j === -1 || i === -1 || map1.get(coord) !== undefined) {
            //cycle direction
            if (direction == 'right') { // 0, 4 is undefined, go left 1 in x dir, prepare to go down
                j--;
                direction = 'down';
                i++;
                //console.log('we go down')
            }
            else if (direction == 'down') { // (4, 3) is undefined, go up 1 in y dir, prepare to go left
                i--;
                direction = 'left';
                j--;
                //console.log('we go left')
            }
            else if (direction == 'left') { // (3, -1) is undefined, go right 1 in y dir, prepare to go up
                j++;
                direction = 'up';
                i--;
                //console.log('we go up')
            }
            else if (direction == 'up') { // (-1, 0) is undefined, go down 1 in y dir, prepare to go right
                i++;
                direction = 'right';
                j++;
                //console.log('we go right')
            }
        } else {
            map1.set(coord, matrix[i][j]);
            if (direction == 'right') { // go right
                j++;
            }
            else if (direction == 'down') { // go down
                i++;
            }
            else if (direction == 'left') { // go left;
                j--;
            }
            else if (direction == 'up') { // (-1, 0) is undefined, go down 1 in y dir, prepare to go right
                i--;
            }
        }
    }
    let arr = [];
    for (let [k, v] of map1) {
        arr.push(v);
    }
    return arr;
};

let grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(spiralOrder(grid));