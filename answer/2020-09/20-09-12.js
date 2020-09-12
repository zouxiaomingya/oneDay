/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let ret = [1];
  let num2 = 0;
  let num3 = 0;
  let num5 = 0;
  while (n > 0) {
    let temp = Math.min(ret[num2] * 2, ret[num3] * 3, ret[num5] * 5);
    ret.push(temp);
    if (ret[num2] * 2 == temp) {
      num2++;
    }
    if (ret[num3] * 3 == temp) {
      num3++;
    }
    if (ret[num5] * 5 == temp) {
      num5++;
    }
    n--;
  }
  return ret[ret.length - 2];
};
