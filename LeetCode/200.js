/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const xLength = grid[0].length;
    const yLength = grid.length;
    const visited = Array.from(Array(yLength), () => Array(xLength).fill(false))
    let islands = 0;
    
    const dfs = (grid, x, y) => {
        if(x >= xLength || y >= yLength || x < 0 || y < 0 || visited[y][x] === true || grid[y][x] === '0') return;
        if(grid[y][x] === '1' && visited[y][x] === false) visited[y][x] = true;
        dfs(grid, x, y+1);
        dfs(grid, x, y-1);
        dfs(grid, x+1, y);
        dfs(grid, x-1, y);
    }

    for (let i = 0; i < yLength; ++i) {
        for (let j = 0; j < xLength; ++j) {
            if(visited[i][j] === false && grid[i][j] !== '0') {
                dfs(grid, j, i);
                islands++;
            }
        }
    }
    
    return islands;
};
