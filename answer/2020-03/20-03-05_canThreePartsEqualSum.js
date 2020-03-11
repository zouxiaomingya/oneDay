/**
 * @param {number[]} A
 * @return {boolean}
 */
// 能够分成3 等分 所以是 3的倍数
var canThreePartsEqualSum = function(A) {
    let target = A.reduce((acc, num) => acc += num, 0)
    // 总和必须能整除3，否则直接return false
    if (target % 3 !== 0) return false
    target /= 3
    let sum = 0
    // 加多一个变量time计算划分数，最后这个time要 >= 3，否则边际情况，比如[1,-1,1,-1,1,-1,1,-1,1,-1,1,-1]会过不了
    let time = 0
    for(let i = 0; i < A.length; i++) {
        sum += A[i]
        if (sum === target) {
            sum = 0
            time++
        }
    }
    return time >= 3
};