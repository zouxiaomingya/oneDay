/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let ret = [1];
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;
  while (n > 0) {
    let temp = Math.min(ret[p2] * 2, ret[p3] * 3, ret[p5] * 5);
    ret.push(temp);
    if (ret[p2] * 2 == temp) {
      p2++;
    }
    if (ret[p3] * 3 == temp) {
      p3++;
    }
    if (ret[p5] * 5 == temp) {
      p5++;
    }
    n--;
  }
  return ret[ret.length - 2];
};
