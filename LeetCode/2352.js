/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  let count = 0;

  let row = grid.map((element) => element.join(","));
  let column = [];

  for (let i = 0; i < grid.length; ++i) {
    let str = [];
    for (let j = 0; j < grid[0].length; ++j) {
      str.push(grid[j][i]);
    }
    str = str.join(",");
    column.push(str);
  }

  for (const row_val of row) {
    for (const col_val of column) {
      if (row_val === col_val) count++;
    }
  }

  return count;
};
