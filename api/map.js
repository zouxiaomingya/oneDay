// 实现简易 map
Array.prototype.myMap = function(fn) {
  var len = this.length;
  //创建新数组
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(fn(this[i], i, this));
  }
  return arr;
};
