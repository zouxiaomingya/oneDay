/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 过程没有问题， 还是会超时，TODO: 去重这块可以优化，不是选出来的了再去筛选， 应该再选的时候就直接 pass。还没实践出来
var combinationSum2 = function (candidates, target) {
  candidates = candidates.filter((item) => item <= target);
  if (candidates.reduce((a, b) => a + b, 0) < target) {
    return [];
  }

  candidates = candidates.sort((a, b) => a - b);
  // 不能重复选择, 那么数组的每个元素要不就选择,要么就不选择. 可以想到二进制的思想, 1 或者 0  1-代表选择该元素,0代表不选择
  const len = candidates.length;
  const times = Math.pow(2, candidates.length) - 1; // 一共又多少排列组合 2 的 n 次方, n是元素的个数
  const arr = [];
  for (let i = 1; i <= times; i++) {
    let binaryStr = i.toString(2);
    let fullStr =
      new Array(len - binaryStr.length).fill(0).join("") + binaryStr;
    let tempArr = [];
    for (let j = 0; j < fullStr.length; j++) {
      if (+fullStr[j] === 1) {
        tempArr.push(candidates[j]);
      }
    }
    if (tempArr.reduce((a, b) => a + b, 0) === target) {
      if (
        !arr.some((item) => {
          return item.toString() === tempArr.toString();
        })
      ) {
        arr.push(tempArr);
      }
    }
  }
  return arr;
};
