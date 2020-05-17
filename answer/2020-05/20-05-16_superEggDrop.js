/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */

// 没有备忘录的算法。时间复杂度非常高
// const dp = (egg, floor) => {
//   if (floor == 0 || floor == 1 || egg == 1) {
//     return floor;
//   }
//   let minimun = floor;
//   for (let i = 1; i <= floor; i++) {
//     let tMin = Math.max(dp(egg - 1, i - 1), dp(egg, floor - i));
//     minimun = Math.min(minimun, 1 + tMin);
//   }
//   return minimun;
// };
// var superEggDrop2 = (K, N) => {
//   return dp(K, N);
// };



// 备忘录 + 二分法
var superEggDrop = function (K, N) {
  var memo = new Map();
  function dp(egg, floor) {
    if (!memo.has(`${egg}-${floor}`)) {
      let result;
      if (floor === 0 || floor === 1 || egg === 1) {
        result = floor;
      } else {
        let left = 1;
        let right = floor;
        while (left + 1 < right) {
          let x = ((left + right) / 2) | 0;
          let t1 = dp(egg - 1, x - 1);
          let t2 = dp(egg, floor - x);

          if (t1 < t2) {
            left = x;
          } else if (t1 > t2) {
            right = x;
          } else {
            left = right = x;
          }
        }
        result =
          1 +
          Math.min(
            Math.max(dp(egg - 1, left - 1), dp(egg, floor - left)),
            Math.max(dp(egg - 1, right - 1), dp(egg, floor - right))
          );
      }
      memo.set(`${egg}-${floor}`, result);
    }
    return memo.get(`${egg}-${floor}`);
  }
  return dp(K, N);
};
var num = superEggDrop2(2, 20);
console.log(num);
