/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i=digits.length-1; i>=0; i--) {
    let num = digits[i] + 1
    // 相加小于 10 直接结束
    if (num < 10) {
      digits[i] = num
      return digits
    } else {
      digits[i] = num % 10
    }
  }
    
  // 运行到这，首位肯定大于9了，手动进位
  digits[0] %= 10
  digits.unshift(1)  
  
  return digits
};