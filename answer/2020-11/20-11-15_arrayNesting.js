/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let start = i;
    let count = 0;
    while (nums[start] !== Infinity) {
      count++;
      let temp = start;
      start = nums[start];
      nums[temp] = Infinity;
    }
    if (count > ans) ans = count;
  }
  return ans;
};
