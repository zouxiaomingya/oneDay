

// react 源码使用该判断方法。通过二进制的方式性能最大化
const TYPE_ONE = 0b00000001
const TYPE_TWO = 0b00000010
const TYPE_THREE = 0b00000100
const TYPE_FOUR = 0b00001000

// 通过 按位或 运算符来得到需要的属性 
const result = TYPE_ONE | TYPE_TWO | TYPE_FOUR
console.log(result.toString(2));
console.log(result & 1);

// 通过 按位与 运算符，判断是否是含有的值得，如果没有就是0，有就是
console.log(result & TYPE_ONE);
console.log(result & TYPE_TWO);
console.log(result & TYPE_THREE);

// 位运算符的优先级较低
console.log((result & TYPE_FOUR) === 0b00001000);
console.log(result & TYPE_FOUR);
console.log(result & true);

// console.log(result & false);


// 判断奇偶
var odd = 3;
var even = 4;
console.log(3 & 1, '基数');
console.log(4 & 1, '偶数');

// 取整

var decimal = 3.9
var decimal2 = 2.1
console.log(decimal | 0, '3.9');
console.log(decimal2 | 0, '2.1');
