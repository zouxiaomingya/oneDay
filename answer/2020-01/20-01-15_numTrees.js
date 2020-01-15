/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var arr = [1, 1];
    for(let i = 2; i <= n; i++){
        arr[i] = 0;
        for(let j = 1; j <= i; j++){
            arr[i] += arr[j-1] * arr[i-j]
        }
    }
    return arr[n]
};