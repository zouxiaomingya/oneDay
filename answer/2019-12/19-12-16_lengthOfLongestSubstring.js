/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var ls = "";
  var length = ls.length;
  // 等于长度。 'abc'charAt(3) === ''  可以满足 index > -1 进入更新长度
  for (i = 0; i <= s.length; i++) {
    let index = -1;
    index = ls.indexOf(s.charAt(i));
    if (index > -1) {
      length = ls.length > length ? ls.length : length;
      ls = ls.substr(index + 1, s.length);
    }
    ls += s.charAt(i);
  }
  return length;
};