/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  // 公约数的方法
  let getResult = (a, b) => {
    if (b === 0) return a;
    return getResult(b, a % b);
  };
  const hash = deck.reduce((pre, num) => {
    if (!pre[num]) {
      pre[num] = 1;
    } else {
      pre[num]++;
    }
    return pre;
  }, {});
  const numCount = Object.values(hash);
  // 获取最小值
  const min = numCount.sort((a, b) => a - b)[0];
  // 根据题意，如果最分组最小数量小于2，直接返回false
  if (min < 2) return false;
  return !numCount.some((item, index) => {
    if (index > 0) return getResult(item, min) === 1;
  });
};
