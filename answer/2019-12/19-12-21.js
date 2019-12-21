/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  function getSum(n) {
    let sum = 0;
    for (let i = 0; i < n.toString().length; i++) {
      sum += n.toString()[i] ** 2;
    }
    return sum;
  }
  while (n !== 1) {
    if ([4, 16, 37, 58, 89, 145, 42, 20].indexOf(n) !== -1) break;
    n = getSum(n);
  }

  return n === 1 ? true : false;
};
