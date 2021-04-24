/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */

var numSubarraysWithSum = function (A, S) {
  let len = A.length;
  let res = 0;
  let sum = 0;
  let l = (r = 0);
  while (r < len) {
    sum += A[r];
    while (sum > S) {
      sum -= A[l];
      l++;
    }
    if (sum === S) {
      // 给定一个符合条件的最大窗口，要再分出一个指针来找出最多符合条件的连续子窗口
      // l 指针不能动，为的是保证 [l,r] 是符合条件的最大窗口，这样在这个窗口下有多少个连续符合的子窗口都能找到
      let tempL = l,
        tempSum = sum;
      while (tempL <= r) {
        if (tempSum === S) res++;
        tempSum -= A[tempL];
        tempL++;
      }
    }
    r++;
  }
  return res;
};
