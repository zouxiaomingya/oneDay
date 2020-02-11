/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(nums.length===0) return null;
  //取中点为根节点
  let mid = Math.floor(nums.length/2);
  let node =  new TreeNode(nums[mid]);
  //获取两边的子数组分别用于构造子树
  let left = nums.slice(0,mid);
  let right = nums.slice(mid+1);
  //递归
  node.left = sortedArrayToBST(left);
  node.right = sortedArrayToBST(right);
  return node;
};
