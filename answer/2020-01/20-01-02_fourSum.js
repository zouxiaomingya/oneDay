var fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b);
  const storeArr = []
  const storeStrMap = new Map()
  for (var middlefirst = 1; middlefirst < nums.length - 2; middlefirst++) {
    for (var middleSecond = middlefirst + 1; middleSecond < nums.length - 1; middleSecond++) {
      // 第二个数 等于 下一个数字，就不要遍历这个。因为下一次是一样的
      if (middleSecond - 1 !== middlefirst && nums[middleSecond] === nums[middleSecond - 1]) {
        continue
      };
      var start = 0;
      var end = nums.length - 1;
      while (start < middlefirst && end > middleSecond) {
        const sum = nums[start] + nums[middlefirst] + nums[middleSecond] + nums[end];
        const mapKey = [nums[start], nums[middlefirst], nums[middleSecond], nums[end]].join();
        if (sum === target && !storeStrMap.has(mapKey)) {
          storeStrMap.set(mapKey, true)
          storeArr.push([nums[start], nums[middlefirst], nums[middleSecond], nums[end]]);
          end--;
          start++;
          continue
        }
        sum > target ? end-- : start++;
      }
    }
  }
  return storeArr;
};