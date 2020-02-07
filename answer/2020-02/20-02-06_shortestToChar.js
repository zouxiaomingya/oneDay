/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  //当S[i]左右两侧都有C，当只有左侧有C，当只有右侧有C，当本身为C，分四种情况处理即可
  var res = [];
  var left, right, leftIdx, rightIdx;
  for(var i=0;i<S.length;i++){
      if(S[i] === C){
          res.push(0);
      }else{
          left = S.slice(0,i);
          right = S.slice(i);
          leftIdx = left.lastIndexOf(C);
          rightIdx = right.indexOf(C);
          if(leftIdx > -1 && rightIdx > -1){
              res.push(Math.min(Math.abs(i-leftIdx), Math.abs(rightIdx)));
          }else if(leftIdx === -1 && rightIdx > -1){
              res.push(Math.abs(S.indexOf(C)-i))
          }else if(leftIdx > -1 && rightIdx === -1){
              res.push(Math.abs(i-S.lastIndexOf(C)));
          }
      }
  }
  return res;
};
