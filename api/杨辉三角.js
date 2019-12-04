/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let arr = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    const currentChildArr = arr[i - 1] || [];
    let lastChildArr = [];
    for (let j = 0; j < currentChildArr.length - 1; j++) {
      lastChildArr[j] = currentChildArr[j] + currentChildArr[j + 1];
    }
    lastChildArr = [1, ...lastChildArr, 1];
    arr.push(lastChildArr);
  }
  return arr;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let arr = [];
  for (let i = 1; i <= numRows; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
      if (j == 0 || j == i - 1) {
        row.push(1);
      } else {
        row.push(arr[i - 2][j - 1] + arr[i - 2][j]);
      }
    }
    arr.push(row);
  }

  return arr;
};
