const checkStraightLine = function (coordinates) {
  // 判断数组中有没有2个以上的点
  const len = coordinates.length;
  if (len <= 2) return true;

  // 得到数组中的前两个点
  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];

  // 创建一个求斜率 K 的方法
  // 又因为y2-y1和x2-x1有可能等于0，所以要排除这两种情况
  function getK(x, y) {
    if (x1 == x) return Infinity;
    if (y1 == y) return -Infinity;
    return (y - y1) / (x - x1);
  }

  //获取K的值
  const k = getK(x2, y2);

  // 之后就计算后面的点的K值，只要不相等那就证明不能连成一条线
  for (let i = 2; i < len; i++) {
    if (k != getK(coordinates[i][0], coordinates[i][1])) return false;
  }

  return true;
};

// 判断三个点 每两个点的斜率是否相同
var checkStraightLine = function(coordinates) {
  if(coordinates.length === 2) return true
  const [x1, y1] = coordinates[0], [x2, y2] = coordinates[1]
  for(let i = 2; i < coordinates.length; i++) {
      const [x3, y3] = coordinates[i]
      if((x2 - x1) * (y3 - y1) !== (y2 - y1) * (x3 - x1)) return false
  }
  return true
};
