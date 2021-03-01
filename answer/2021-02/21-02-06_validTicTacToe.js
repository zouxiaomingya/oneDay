/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
  let oCount=0,xCount=0;
  for(let i=0;i<board.length;i++){
      for(let j=0;j<board[i].length;j++){
          board[i][j]==="X"&&xCount++
          board[i][j]==="O"&&oCount++
      }
  }
  // X 不和 O 相等，并且也不是多一个，直接错
  if(xCount!==oCount&&xCount!==oCount+1) return false;
  // X 胜
  if(win(board,"X")&&xCount !== oCount+1) return false;
  // O获胜
  if(win(board,"O")&&xCount !==oCount) return false;
  return true;
};
function win(board,P){
  for(let i=0;i<board.length;i++){
      //同一行字符一样
      if(board[i][0]===P&&board[i][1]===P&&board[i][2]===P){
          return true
      }
      //同一列字符一样
      if(board[0][i]===P&&board[1][i]===P&&board[2][i]===P){
          return true
      }
    
  }
  //对角线的字符是否一样
    if(board[0][0]===P&&board[1][1]===P&&board[2][2]===P){
          return true
      }
      if(board[0][2]===P&&board[1][1]===P&&board[2][0]===P){
          return true
      }
  return false

}