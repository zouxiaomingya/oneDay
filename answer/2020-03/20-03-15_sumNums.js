/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    if(n === 1) return 1
    return n + sumNums(n - 1)
};