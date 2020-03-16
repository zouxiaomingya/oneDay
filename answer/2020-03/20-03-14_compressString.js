/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    if (!S) return S
    let res = ''
    let now = S[0]
    let sum = 0;
    for (let i = 0; i <= S.length; i++) {
        if (S[i] === now) {
            sum += 1
        }
        else {
            res += (now + sum)
            now = S[i]
            sum = 1
        }
    }
    return res.length < S.length ? res : S
};