/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // 去重，在顺排序
  const newCandidates = [...new Set(candidates)].sort((a, b) => a - b)
  return fn(newCandidates, target)
}
var fn = function (candidates, target, start = 0) {
  const result = []
  for (let i = start; i < candidates.length; i++) {
    // 由于是顺序 如果当前的值都大雨目标值，那么直接 跳出循环；
    if (target < candidates[i]) break;
    if (target === candidates[i]) result.push([target]);
    // 返回值是二维数组
    // 给出 i 是为了防止 回溯 会有重复的
    const arr = fn(candidates, target - candidates[i], i)
    // 把当前 index === i 的元素放每个数组前面
    arr.forEach(item => {
        item.unshift(candidates[i])
        result.push(item)
    })
  }
  return result
};