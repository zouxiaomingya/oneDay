/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const str = num.toString();
  const dfs = (str, pointer) => {            // 随着dfs向下，pointer右移
      if (pointer >= str.length - 1) return 1; // 指针抵达边界和超出边界都返回1
      const temp = Number(str[pointer] + str[pointer + 1]);   // 考察该2位数
      if (temp >= 10 && temp <= 25) {
          return dfs(str, pointer + 1) + dfs(str, pointer + 2); // 2个分支的结果相加
      } else {
          return dfs(str, pointer + 1);          // 返回1个分支的结果
      }
  }
  return dfs(str, 0);
}