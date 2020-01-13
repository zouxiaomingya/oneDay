/**
 * @param {number[]} nums
 * @return {string}
 */
// 通过定义一个方法，来判断数字谁在前面谁在后
var largestNumber = function(nums) {
  if(Math.max(...nums) === 0) return '0';
  return nums.sort((a, b) => (b + '' + a) - ( a + '' + b)).join('');
};