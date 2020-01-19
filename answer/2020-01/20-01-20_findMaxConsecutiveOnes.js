/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let index = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      temp = Math.max(index, temp);
      index = 0;
    } else {
      index++;
    }
  }
  temp = Math.max(index, temp);
  return temp;
};
var num = findMaxConsecutiveOnes([1,1,1,1,1,0,1,1,1,1,1,1,1,0,0])
console.log(num);
