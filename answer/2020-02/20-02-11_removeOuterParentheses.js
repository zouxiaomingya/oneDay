/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = (S) => {
  let result = ''
  let start = 0
  let count = 0
  for (let i = 0; i < S.length; i++) {
    count += S[i] === '(' ? 1 : -1
    if (count === 0) {
      result += S.substring(start + 1, i)
      start = i + 1
    }
  }
  return result
}