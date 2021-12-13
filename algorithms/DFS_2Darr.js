let ROW = 3;
let COL = 3;

let dRow = [0, 1, 0, -1] // up, right, down, left
let dCol = [-1, 0, 1, 0] // y is reversed from cartesian plane

function isValid(vis, row, col) {
    // If cell is out of bounds
    if (row < 0 || col < 0
        || row >= ROW || col >= COL)
        return false;

    // If the cell is already visited
    if (vis[row][col])
        return false;

    // Otherwise, it can be visited
    return true;
}

function DFS(row, col, grid, vis) {
    // Initialize a stack of pairs and
    // push the starting cell into it
    var stack = [];
    stack.push([row, col]);

    // // Iterate until the
    // // stack is not empty
    const result = [];
    while (stack.length != 0) {
        // Pop the top pair
        var curr = stack[stack.length - 1];
        stack.pop();
        var row = curr[0];
        var col = curr[1];

        // Check if the current popped
        // cell is a valid cell or not
        if (!isValid(vis, row, col))
            continue;

        // Mark the current
        // cell as visited
        vis[row][col] = true;

        // Print the element value at
        // the current top cell
        console.log(grid[row][col] + " ");
        result.push(grid[row][col]);

        // Push all the adjacent cells
        for (var i = 0; i < 4; i++) {
            var adjx = row + dRow[i];
            var adjy = col + dCol[i];
            stack.push([adjx, adjy]);
        }
    }
    console.log(result);
}



let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let visited = Array.from(Array(ROW), () => Array(COL).fill(false));

DFS(1, 1, grid, visited);