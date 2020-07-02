/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  const record = [];
  let cache = [];
  for (let i = 0; i < s.length; i++) {
      if (!s[i]) continue;
      if (s[i] === '*') cache.push(i);
      if (s[i] === '(') record.push(i);
      if (s[i] === ')') {
          if (!record.length) {
              if (!cache.length) return false;
              cache.pop();
          }
          else record.pop(s[i]);
      }
  }
  const temp = [];
  let j = 0, k = 0;
  for (let i = 0; i < s.length; i++) {
      if (i === record[j]) {
          temp.push(i);
          j++;
      }
      else if (i === cache[k]) {
          temp.pop();
          k++;
      }
  }
  return !temp.length;
};