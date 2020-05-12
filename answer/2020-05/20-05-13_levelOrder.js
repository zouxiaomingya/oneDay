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
var levelOrder = function (root) {
  if (root == null) return [];
  var arr = [root]
  var res = []
  while (arr.length > 0) {
      var n = arr.length
      var now = []
      while (n > 0) {
          var node = arr.shift()
          now.push(node.val)
          if (node.left != null) arr.push(node.left)
          if (node.right != null) arr.push(node.right)
          n--;
      }
      res.push(now)
  }
  return res
};