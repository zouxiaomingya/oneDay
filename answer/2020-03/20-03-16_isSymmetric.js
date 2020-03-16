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
var isSymmetric = function(root) {
    if(root === null) return true;
    const isEqual = (left, right) => {
        // 都为 null 对称
        if(left === null && right === null) return true;
        // 一边 null，一边非 null，不对称
        if(left === null || right === null) return false;
        if(left.val !== right.val) return false;
        // 左边的左边和右边的右边是对称位置，右边的右边和 右边的左边是对称位置
        return isEqual(left.left, right.right) && isEqual(left.right, right.left);
    }
    return isEqual(root.left, root.right);

};