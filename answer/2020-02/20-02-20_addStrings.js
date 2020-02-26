/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let addStrings = function(num1, num2) {
  let carry = 0; //进位
  let res = []; //结果数组
  let i = num1.length - 1;
  let j = num2.length - 1;
  //倒序遍历两个字符串,长度短的不够的补0
  while (i >= 0 || j >= 0) {
    let n1 = i >= 0 ? +num1[i] : 0;
    let n2 = j >= 0 ? +num2[j] : 0;
    
    let num = n1 + n2 + carry;//当前位置数字
    carry = Math.floor(num / 10);
    res.unshift(num % 10);
    i--;
    j--;
  }
  //最后的进位
  if (carry === 1)res.unshift(1);
  return res.join('');
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let a = num1.split('')
  let b = num2.split('')
  let c = 0
  let res = ''
  while(a.length||b.length||c){
    c += ~~a.pop() + ~~b.pop()
    res = c%10 + res
    c = c>9
  }
  return res
};