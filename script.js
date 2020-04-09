// =============================================
//  Sudoku Solver
//  2020
// =============================================

// define the sudoku to be solved
// 0 ... field not occupied
let grid = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

// function to solve the problem
function solve() {
    // while the sudoku is not solved
    while(!solved()) {
        // go trough all fields
        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                // if field is not occupied:
                if(grid[i][j] == 0) {
                    // get an array containing all numbers that do not match with the number we want to insert 
                    let row = grid[i];
                    let col = column(j);
                    let ar = area(i, j);
                    row = row.concat(col, ar);
                    // get the complement set
                    let free = [1,2,3,4,5,6,7,8,9].filter(n => row.indexOf(n) === -1)
                    // insert number if there is an unique solution 
                    grid[i][j] = (free.length == 1 ? free[0] : 0);
                }
            }
        }
    }
    // if the problem is solved, print the grid
    return grid;
}

// area returns an array containing all numbers in the 3x3 box around (i,j)
function area(i, j) {
    let res = [];
    for(let y = 0; y < 3; y++) {
        for(let x = 0; x < 3; x++) {
            res.push(grid[y + (Math.floor(i/3)*3)][x + (Math.floor(j/3)*3)]);
        }
    }
    return res;
}

// columns returns an array of all numbers on the given column j
function column(j) {
    let res = [];
    for(let i = 0; i < 9; i++) {
        res.push(grid[i][j]);
    }
    return res;
}

// function that checks if the problem is solved (all fields occupied)
function solved() {
    for(let i of grid) {
        for(let j of i) {
            if(j == 0) return false;
        }
    }
    return true;
}
