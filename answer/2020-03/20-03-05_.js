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
var diameterOfBinaryTree = function(root) {
    let result = 0;
    const deepTree = root => {
        if(!root)return 0;
        let left = root.left ? deepTree(root.left) + 1 : 0;
        let right = root.right ? deepTree(root.right) + 1 : 0;
        
        result = Math.max(left + right, result);
        return Math.max(left, right);
    }
    deepTree(root);
    return result;
};