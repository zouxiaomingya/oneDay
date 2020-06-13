var findRadius = function(houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  let res = 0;
  let i = 0; // 房子指针
  let j = 0; // 暖气指针
  let r = 0; // 半径
  while(i < houses.length && j < heaters.length) {
      // 房子用右边的暖气
      if (houses[i] <= heaters[j]) {
          r = heaters[j] - houses[i];
          i += 1;
      // 房子左右两边的暖气都可用的时候，用距离小的那边的
      } else if (j < heaters.length - 1) {
          r = Math.min(heaters[j+1] - houses[i], houses[i] - heaters[j]);
          if (houses[i] < heaters[j+1]) {
              i += 1;
          } else {
              j += 1;
          }
      // 暖气指针指到最后一位时，房子只能用左边的暖气
      } else {
          r = houses[i] - heaters[j];
          i += 1
      }
      res = Math.max(res, r)
  }
  return res;
};
