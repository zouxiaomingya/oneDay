/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */

var superEggDrop = function (K, N) {
  var memo = new Map();
  function dp(egg, floor) {
    if (!memo.has(`${egg}-${floor}`)) {
      let result;
      if (floor === 0) {
        result = 0;
      } else if (egg === 1) {
        result = floor;
      } else {
        let lo = 1;
        let hi = floor;
        while (lo + 1 < hi) {
          let x = ((lo + hi) / 2) | 0;
          let t1 = dp(egg - 1, x - 1);
          let t2 = dp(egg, floor - x);

          if (t1 < t2) {
            lo = x;
          } else if (t1 > t2) {
            hi = x;
          } else {
            lo = hi = x;
          }
        }
        result =
          1 +
          Math.min(
            Math.max(dp(egg - 1, lo - 1), dp(egg, floor - lo)),
            Math.max(dp(egg - 1, hi - 1), dp(egg, floor - hi))
          );
      }
      memo.set(`${egg}-${floor}`, result);
    }
    return memo.get(`${egg}-${floor}`);
  }
  return dp(K, N);
};
var num = superEggDrop(2, 100);
console.log(num);
