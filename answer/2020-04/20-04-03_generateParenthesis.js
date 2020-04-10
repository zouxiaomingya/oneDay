/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  const dfs = (left, right, str) => {
    if (left === 0 && right === 0) {
      res.push(str);
      return;
    }
    
    // 只要 ( 还有剩，那么递归 (
    if (left > 0) {
      dfs(left - 1, right, str + "(");
    }
    // 如果 ) 的剩余的数量大于 ( 的剩余的数量，那么递归 )
    if (right > left) {
      dfs(left, right - 1, str + ")");
    }
  };
  dfs(n, n, "");
  return res;
};

generateParenthesis(2);




