/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  const len = S.length;
  if (len === 0) return "";
  //用于存放字符及其数量
  let hashMap = {};
  for (let i = 0; i < S.length; i++) {
    if (hashMap[i]) {
      hashMap[i] += 1;
    } else {
      hashMap[i] = 1;
    }
  }
};
