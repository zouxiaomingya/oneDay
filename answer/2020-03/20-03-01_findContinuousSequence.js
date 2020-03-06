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

// 数学算法
// javascript 数学算法
// 首项是 i , 末项是 j, 目标值是 x.
// 公示 ( i + j )( j - i + 1) = 2x
// 解得  j = Math.sqrt(2*x + i*i - i + 1/4) - 1/2
// 如果 j 是个整数 所以该解是符合要求的
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    var result = [];
    for(let i = 1; i <= Math.ceil(target / 2); i++){
        var j = Math.sqrt(2*target + i*i - i + 1/4) - 1/2
        if(j % 1 === 0 ){
            result.push(new Array(j - i + 1).fill(i).map((item, index) => item + index))
        }
    }
    return result
};