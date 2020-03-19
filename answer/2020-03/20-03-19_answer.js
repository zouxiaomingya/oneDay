// 1.事件监听处理器
function EventEmitter() {
  this.map = {};
  this.on = (type, fn) => {
    if (this.map[type]) {
      this.map[type].push(fn);
    } else {
      this.map[type] = [fn];
    }
  };
  this.off = (type, fn) => {
    var listFn = this.map[type];
    if (listFn) {
      this.map[type] = listFn.filter(_fn => _fn.name !== fn.name);
    }
  };
  this.emit = (type, ...params) => {
    var listFn = this.map[type];
    listFn.forEach(_fn => {
      _fn(...params);
    });
  };
}

// 2 题目：请通过代码实现大整数（可能比Number.MAX_VALUE大）相加运算。
// 请通过代码实现大整数（可能比Number.MAX_VALUE大）相加运算
class BigInt {
  constructor(str) {
    this.num = str;
  }

  plus(bigInt) {
    const maxLen = Math.max(this.num.length, bigInt.num.length);
    const str1 = this.num
      .split("")
      .reverse()
      .join("");
    const str2 = bigInt.num
      .split("")
      .reverse()
      .join("");
    let sign = 0;
    let result = "";
    for (let i = 0; i < maxLen; i++) {
      const temp1 = str1[i] ? str1[i] : 0;
      const temp2 = str2[i] ? str2[i] : 0;
      let sum = ~~temp1 + ~~temp2 + sign;
      sign = sum >= 10 ? 1 : 0;
      let res = sum % 10;
      result = res + result;
    }
    return result;
  }
}

// 3. 题目：实现一个可以缓存其他函数的高阶函数memoize。能够实现：当入参相同时，可以不经过计算，直接返回结果。

const memoize = fn => {
  const map = {};
  return function(...rest) {
    const key = JSON.stringify(rest);
    if (map[key]) {
      return map[key];
    }
    map[key] = fn(...rest);
    return map[key];
  };
};

// 4. 题目：实现快速排序

function quicksort(array) {
  if (array.length <= 1) return array;
  const [head, ...rest] = array;
  let left = [];
  let right = [];
  for (let i of rest) {
    i < head ? left.push(i) : right.push(i);
  }
  return [...quicksort(left), head, ...quicksort(right)];
}

// 5. 实现多叉树的广度度优先搜索
function bfs(tree, name) {
  if (tree.name === name) return { name, code: tree.name };
  function deep(list) {
    if (list.length < 1) return null;
    var childTree = [];
    var obj = { name };
    for (let item of list) {
      if (item.name === name) {
        obj.code = item.code;
        break;
      } else {
        childTree.concat(item.children);
      }
    }
    if (obj.code) {
      return obj;
    } else {
      return deep(childTree);
    }
  }
  return deep(tree.children);
}
var tree = {
  name: "中国",
  children: [
    {
      name: "北京",
      children: [
        {
          name: "昌平区"
        }
      ]
    },
    {
      name: "浙江省",
      children: [
        {
          name: "杭州市",
          code: 0571
        },
        {
          name: "宁波市"
        }
      ]
    }
  ]
};
