/**
 * @param {character[][]} board
 * @return {number}
 */

// X 表示 战舰，可能存在 XXX  这样算一个战舰 横着，或者 竖着连续的就是一个战舰

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let count = 0;

  const sink = (row, col) => {
    //如果超出范围则终止，遇到'.'也终止
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] == "."
    ) {
      return;
    }
    //下沉
    board[row][col] = ".";
    //向四周扩散
    sink(row + 1, col);
    sink(row - 1, col);
    sink(row, col + 1);
    sink(row, col - 1);
  };

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] == "X") {
        count++;
        sink(row, col);
      }
    }
  }

  return count;
};
