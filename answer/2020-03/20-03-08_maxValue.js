/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0
  let row = grid.length
  let col = grid[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let left = 0
      let up = 0
      if (j !== 0) left = grid[i][j - 1]
      if (i !== 0) up = grid[i - 1][j]
      grid[i][j] += Math.max(left, up);
    }
  }
  return grid[row - 1][col - 1]
};