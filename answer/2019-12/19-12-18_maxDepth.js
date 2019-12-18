/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root == null) {
     return 0;
   } else {
     var left_height = maxDepth(root.left);
     var right_height = maxDepth(root.right);
     return Math.max(left_height, right_height) + 1;
   }
};