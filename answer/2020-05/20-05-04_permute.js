
function backtrack(list, tempList, nums) {
  if (tempList.length === nums.length) return list.push([...tempList]);
  for(let i = 0; i < nums.length; i++) {
      // 无重复数字，所以如果有相同的直接跳过
      if (tempList.includes(nums[i])) continue;
      tempList.push(nums[i]);
      backtrack(list, tempList, nums);
      tempList.pop();
  }
}
/**
* @param {number[]} nums
* @return {number[][]}
*/
var permute = function(nums) {
  const list = [];
  backtrack(list, [], nums)
  return list
};