/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let left = 0,
      right = 0
    for (let i = 0; i < S.length; i++) {
      if (S[i] == '(') {
        left++
      } else {
        if (left > 0) {
          left--
        } else {
          right++
        }
      }
    }
    return left + right
  }