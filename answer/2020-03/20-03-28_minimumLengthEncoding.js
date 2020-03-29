/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  let hashSet = new Set(words);
  for (let item of hashSet) {
      for (let i = 1; i < item.length; i++) {
          let target = item.slice(i);
          hashSet.has(target) && hashSet.delete(target);
      }
  }
  return [...hashSet].reduce((tar, cur) => tar += cur.length + 1, 0)
};