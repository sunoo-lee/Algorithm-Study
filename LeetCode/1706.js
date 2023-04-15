/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    let ballArray = Array.from({length: grid[0].length}, (v, i) => i);

    for (let i=0; i<ballArray.length; ++i) {
        ballArray[i] = findRoute(ballArray[i], grid);
    }
    
   return ballArray;
};

const findRoute = (num, grid) => {
    let rowIndex = 0;
    let colIndex = num;
    let count = num;
    let current = 0;
    let pre = 0;
    let next = 0;

     while(rowIndex < grid.length) {
        if(rowIndex < 0 || colIndex < 0) break;
        current = grid[rowIndex][colIndex];
        pre = grid[rowIndex][colIndex-1];
        next = grid[rowIndex][colIndex+1];

        if(current === 1 && next === 1) {
            count += current;
            colIndex++;
        } else if (current === -1 && pre === -1) {
            count += current;
            colIndex--;
        } else return -1;
        rowIndex++;
    }
    return count;
}
