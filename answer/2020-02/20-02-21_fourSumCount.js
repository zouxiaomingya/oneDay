/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const record = new Map();
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
        var sum_ab =A[i] + B[j];
      if (record.has(sum_ab)) {
        record.set(sum_ab, record.get(sum_ab) + 1);
      } else {
        record.set(sum_ab, 1);
      }
    }
  }
  let res = 0;
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      var sum_cd = -(C[i] + D[j]);
      if (record.has(sum_cd)) {
        res += record.get(sum_cd);
      }
    }
  }
  return res;
};