/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) {
    return 0;
  }
  let arr = [];
  let res = 0;
  let index = 2;
  for (var i = 0; i < n; i++) {
    arr.push(i);
  }
  while (index !== n) {
    var l = arr[index++];
    if (l == -1) continue;
    for (var i = 2; i * l < n; i++) {
      arr[i * l] = -1;
    }
    res += 1;
  }
  return res;
};
