/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let result = [];
  let len = intervals.length;
  if(len == 0){
      return [];
  }
  // 按照数组的第一个大小来排序
  intervals.sort( (a,b) => a[0] - b[0]);
  let i = 0;
  while( i < len){
      let currLeft = intervals[i][0];
      let currRight = intervals[i][1];
      while(i < len - 1 && intervals[i+1][0] <= currRight){
          i++;
          currRight = Math.max(intervals[i][1],currRight);
      }
      result.push([currLeft,currRight]);
      i++;
  }
  return result;
};
