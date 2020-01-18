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
var levelOrderBottom = function(root) {
  var arr = [];
  function pushVal(node, index) {
    if (node == null) {
      return;
    }
    if (!arr.hasOwnProperty(index)) {
      arr[index] = [];
    }
    arr[index].push(node.val);
    index = index + 1;
    pushVal(node.left, index);
    pushVal(node.right, index);
  }
  pushVal(root, 0);
  return arr.reverse();
};
