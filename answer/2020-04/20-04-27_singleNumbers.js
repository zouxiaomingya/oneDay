var singleNumbers = function(nums) {
  let set = new  Set();
  let i = 0,j = nums.length - 1;
  while(i < j) {
      set.has(nums[i]) ? set.delete(nums[i]) : set.add(nums[i]);
      set.has(nums[j]) ? set.delete(nums[j]) : set.add(nums[j]);
      i++;
      j--;
  }
  return [...set].reverse();
};
