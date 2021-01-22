/**
 * @param {number[]} A
 * @return {number}
 */

var numberOfArithmeticSlices = function (A) {
  let difference,
    j,
    res = 0;
  for (let i = 0, len = A.length - 2; i < len; ) {
    difference = A[i + 1] - A[i];
    j = i + 1;
    while (A[j + 1] - A[j] === difference) j++;
    if (j - i > 1) res += ((j - i) * (j - i - 1)) / 2;
    i = j;
  }
  return res;
};
