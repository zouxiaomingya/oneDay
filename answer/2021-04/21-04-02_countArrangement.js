/**
 * @param {number} N
 * @return {number}
 */

// 没做出来，多看几遍
 var countArrangement = function(N) {
  if (N === 0) return 0;
  let ans = 0,
      map = new Map(),
      checkMap = new Map();
  
  // 构建一个 1 - N 的数组
  // 同时构建出一个各个位置可以放置数字的 「位置 -> 可放值数组」 的 map 结构
  for (let i = 1; i <= N; i++) {
    checkMap.set( i, true );
    let temp = [];
    for (let j = 1; j <= N; j++) {
      if (j % i === 0 || i % j === 0) temp.push( j );
    }
    map.set(i, temp);
  }

  function backtrack(curr) {
    // 判断满足条件，统计一次，退出此次递归
    if (curr.length === N) {
      ans++;
      return ;
    }
    
    // curr的长度不够，继续拿下一个位置的数
    let need = map.get( curr.length + 1 );
    /*
      这里的过程稍微复杂一点，逐行解释：
      - 首先判断这个数字使用过没有，如果使用过就不能在使用了，直接跳过
      - 把这个数字放到 curr 中
      - 设置这个数字为不可使用
      - 继续递归
      - 要把刚才使用的数字从 curr 中 pop 掉
      - 同时设置这个数字可使用，继续回溯
    */
    for (let i = 0; i < need.length; i++) {
      if (checkMap.get( need[i] ) === false) continue;
      curr.push( need[i] );
      checkMap.set( need[i], false );
      backtrack( curr );
      curr.pop();
      checkMap.set( need[i], true );
    }
    
  };
  backtrack([]);
  
  return ans;
};
