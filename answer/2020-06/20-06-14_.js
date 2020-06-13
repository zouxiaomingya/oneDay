/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
// 题目的意思是除了第一个可以不是 k 位 其他都需要时 k位。所需倒叙比较便利
var licenseKeyFormatting = function (S, K) {
  let arr = S.toUpperCase().split("-").join("").split("").reverse();
  let targetArr = [];
  let i = 0;
  let tmp = "";
  while (i < arr.length) {
    // 此处要注意顺序，若是tmp+=arr[i]的话则顺序会不对
    tmp = arr[i] + tmp;
    if (tmp.length == K) {
      console.log(tmp);
      targetArr.unshift(tmp);
      tmp = "";
    }
    if (i == arr.length - 1 && tmp.length) {
      // 是否处理到了最后一个并且tmp中还有字符
      targetArr.unshift(tmp);
    }
    i++;
  }
  return targetArr.join("-");
};

licenseKeyFormatting("5F3Z-2e-9-w", 4);
