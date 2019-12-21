/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
    return "1";
  }
  var res = "1";
  for (var i = 2; i <= n; i++) {
    let tmp = "";
    let c = 0;
    for (var j = 0, len = res.length; j < len; j++) {
      if (res[j] != res[j + 1]) {
        tmp += `${c + 1}${res[j]}`;
        c = 0;
      } else {
        c++;
      }
    }
    if (c != 0) {
      tmp += `${c}${res[res.length - 1]}`;
    }
    res = tmp;
  }
  return res;
};
