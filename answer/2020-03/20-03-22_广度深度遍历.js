const obj = {
  name: "中国",
  id: "1",
  children: [
    {
      name: "浙江",
      id: "1-1",
      children: [
        {
          name: "杭州",
          id: "1-1-1"
        },
        {
          name: "宁波",
          id: "1-1-2"
        }
      ]
    },
    {
      name: "上海",
      id: "1-2"
    },
    {
      name: "江西",
      id: "1-3",
      children: [
        {
          name: "南昌",
          id: "1-3-1"
        },
        {
          name: "景德镇",
          id: "1-3-2"
        }
      ]
    }
  ]
};
// 广度 Breadth-First Search
function bfs(source, goal) {
  // 深拷贝原始数据
  var res = [source];
  // 每一层的数据都 push 进 res
  // res 动态增加长度
  for (var i = 0; i < res.length; i++) {
    var curData = res[i];
    // 匹配成功
    if (curData.name === goal) {
      // 返回当前对象及其父节点所组成的结果
      return res[i].id;
    }
    // console.log(curData.name);
    // 如果有 children 则 push 进 res 中待搜索
    if (curData.children) {
      res.push(...curData.children);
    }
  }
  // 没有搜索到结果，默认返回空数组
  return [];
}
// const a = bfs(obj, "1");
// console.log(a);

// DFS - Depth-Firs Search
function dfs(source, goal) {
  var res = [source];
  for (let i = 0; i < res.length; i++) {
    var curData = res[i];
    console.log(curData.name);

    if (curData.name === goal) {
      console.log(curData.name, goal);
      // 返回当前对象及其父节点所组成的结果
      return curData.id;
    }
    if (curData.children) {
      for (let i = 0; i < curData.children.length; i++) {
        const result = dfs(curData.children[i], goal);
        if (result !== "没找到") {
          return result;
        }
      }
    }
  }

  return "没找到";
}

const a = dfs(obj, "上海");
console.log(a);
