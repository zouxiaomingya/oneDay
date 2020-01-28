/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  let ary = (A + " " + B).split(" ");
  let result = [];
  let obj = {};
  for (let i of ary) {
    obj[i] ? obj[i]++ : (obj[i] = true);
  }
  for (let i in obj) {
    if (obj.hasOwnProperty(i) && obj[i] === true) result.push(i);
  }
  return result;
};
