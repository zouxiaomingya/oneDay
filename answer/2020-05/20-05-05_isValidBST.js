/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const tree = {
  val: 10,
  left: { val: 5, left: null, right: null },
  right: {
    val: 15,
    left: { val: 6, left: null, right: null },
    right: { val: 20, left: null, right: null },
  },
};
var isValidBST = function (root) {
  if (!root) return true;
  if (root.left && root.val <= root.left.val) return false;
  if (root.right && root.val >= root.right.val) return false;
  return isValidBST(root.left) && isValidBST(root.right);
};
isValidBST(tree)
