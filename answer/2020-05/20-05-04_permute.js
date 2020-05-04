var searchRange = function(nums, target) {
  if(!nums.length) return [-1,-1];
  let left = 0;
  let right = nums.length -1;
  let start = -1;
  let end = -1;
  while(left <=right) {
      let mid = left + Math.floor((right -left)/2);
      if(nums[mid] === target) {
          start = mid;
          end = mid 
          while(start > left && nums[start-1] === target) {
              start--;
          }
          while(end < right && nums[end+1] === target) {
              end++;
          }
          return [start,end]
      } else if(nums[mid] > target) {
          right = mid - 1;
      } else {
          left = left + 1;
      }
  }
  return [-1,-1]
};