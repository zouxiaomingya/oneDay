/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    var maxNum = Math.ceil(target / 2);
    var i = 1;
    var result = [];
    while(i < maxNum){
        var sum = 0;
        for(let j = i; j <= maxNum; j ++){
            sum += j;
            if(sum === target){
                result.push(new Array(j - i + 1).fill(i).map((item, index) => item + index))
            }
            if(sum > target) break;
        }
        i++;
    }
    return result;

};