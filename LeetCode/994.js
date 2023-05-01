/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const rowLength = grid[0].length;
  const colLength = grid.length;

  let startQueue = [];
  let fresh = 0;
  let count = 0;

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  for (let i = 0; i < colLength; ++i) {
    for (let j = 0; j < rowLength; ++j) {
      if (grid[i][j] === 2) startQueue.push([i, j]);
      else if (grid[i][j] === 1) fresh++;
    }
  }

  while (fresh && startQueue.length) {
    const len = startQueue.length;

    for (let i = 0; i < len; i++) {
      const [row, col] = startQueue.shift();

      for (const [dx, dy] of directions) {
        const x = row + dx;
        const y = col + dy;

        if (x < 0 || x >= colLength) continue;
        if (y < 0 || y >= rowLength) continue;
        if (grid[x][y] === 0 || grid[x][y] === 2) continue;

        startQueue.push([x, y]);
        grid[x][y] = 2;
        fresh--;
      }
    }

    count++;
  }

  return fresh === 0 ? count : -1;
};

// 1 -> 5 -> 13 -> 25 -> 41
//   +4   +8    +12   +16
