/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, target) {
  const candidates = [1,2,3,4,5,6,7,8,9];
  const res = [];
  function backTrace(i, sum, path) {
      if (!sum) {
          if(path.length === k) res.push(path);
          return;
      }
      for (let j = i; j < candidates.length; j++) {
          if (candidates[j] > sum) return;
          if (j > i && candidates[j] == candidates[j - 1]) continue;
          backTrace(j + 1, sum - candidates[j], path.concat(candidates[j]));
      }
  } 
  backTrace(0, target, []);
  return res;
};