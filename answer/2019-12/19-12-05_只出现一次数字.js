// 通过这题了解到 位运算符；
// 1. 交换律：a ^ b ^ c <=> a ^ c ^ b
// 2. 任何数于0异或为任何数 0 ^ n => n
// 3. 相同的数异或为0: n ^ n => 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let single = 0;
    for(let i of nums){
        single ^= i
    }
    return single;
};