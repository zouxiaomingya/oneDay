/**
 * @param {number} c
 * @return {boolean}
 */

var judgeSquareSum = function(c) {
    const flag = Math.sqrt(0.5) * Math.sqrt(c)
    for(let a = 0;a <= flag; a++){
        const b = Math.sqrt(c - a*a)
        if(parseInt(b) === b){
            return true
        }
    }
    return false
};
