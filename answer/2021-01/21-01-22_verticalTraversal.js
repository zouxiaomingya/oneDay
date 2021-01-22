/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  if (!root) {
      return [];
  }
  // 二维数组 存坐标和值，形式如 [[x, y, val], [...]]

  // 先dfs前序遍历记录下节点坐标和值
  let locationList = [];

  const dfs = function (root, x, y) {
      if (!root) {
          return;
      }
      locationList.push([x, y, root.val]);
      dfs(root.left, x - 1, y - 1);
      dfs(root.right, x + 1, y - 1);
  };
  dfs(root, 0, 0);

  // 按照x升序，y降序，val升序
  locationList = locationList.sort((a, b) => {
      if (a[0] != b[0]) {
          return a[0] - b[0];
      }
      if (a[1] != b[1]) {
          return b[1] - a[1];
      }
      return a[2] - b[2];
  });

  // curValOfX当前遍历的节点的x的值，默认先取第一个节点的x值
  let curValOfX = locationList[0][0];
  let result = [[locationList[0][2]]];

  // 从第2个节点开始遍历坐标数组，把x相同的val分成一组
  for (let i = 1; i < locationList.length; i++) {
      let location = locationList[i];
      let x = location[0];
      if (x == curValOfX) {
          let last = result[result.length - 1];
          last.push(location[2]);
      } else {
          curValOfX = x;
          result.push([location[2]]);
      }
  }
  return result;
};
