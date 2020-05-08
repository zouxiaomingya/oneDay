/**
 * @param {number} x
 * @return {number}
 */
// 暴力解法
var mySqrt = function (x) {
  var re = 0;
  while (!(re * re <= x && (re + 1) * (re + 1) > x)) {
    re++;
  }
  return re;
};
// 牛顿迭代
var mySqrt = function (x) {
  if (x === 0) return 0;
  var re = 1;
  while (!(re * re <= x && (re + 1) * (re + 1) > x)) {
    re = parseInt(re - (re * re - x) / (2 * re));
  }
  return re;
};
mySqrt(10);
