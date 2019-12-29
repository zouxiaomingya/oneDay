/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const maps = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz"
    }
    const res = [];
    for (let num of digits) {
      let tempStr = maps[num];
      if(!tempStr) continue;
      if (res.length > 0) {
        let tmp = [];
        for (let i = 0; i < res.length; i++) {
          for (let j = 1; j < tempStr.length; j++) {
            tmp.push(res[i] + tempStr[j])
          }
          res[i] += tempStr[0];
        }
        res.push(...tmp)
      } else {
        res.push(...tempStr);
      }
    }
    return res;
  };