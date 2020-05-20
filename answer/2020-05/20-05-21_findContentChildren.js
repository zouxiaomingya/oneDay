/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let gIndex = 0;
  let sIndex = 0;
  let res = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  while (gIndex < g.length && sIndex < s.length) {
    if (s[sIndex] >= g[gIndex]) {
      res++;
      gIndex++;
    }
    sIndex++;
  }
  return res;
};
