/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
    let index = 0
    const recBuild = (inLeft, inRight) => {
        if(inLeft === inRight) {
            return null
        }
        const rootVal = preorder[index]
        const root = new TreeNode(rootVal)
        // 获取根节点在 中序 里面的 index
        const inorderIndex = inorder.indexOf(rootVal);
        index++
        // 在中序中 在根节点左边的 是 左子树中的
        root.left = recBuild(inLeft, inorderIndex)
        // 在中序中 在根节点右边的 是 右子树中的
        root.right = recBuild(inorderIndex+1, inRight)
        return root
    }
    return recBuild(0, inorder.length)
  };

  // 方法二
  var buildTree = function(preorder, inorder) {
    if(!preorder.length && !inorder.length)
      return null;
    var root = preorder[0];
    var pos = inorder.indexOf(root);
    var midLeft = inorder.slice(0, pos), midRight = inorder.slice(pos+1);
    var preLeft = preorder.slice(1, pos+1), preRight = preorder.slice(pos+1);
  
    var tree = new TreeNode(root);
    tree.left = buildTree(preLeft, midLeft);
    tree.right = buildTree(preRight, midRight);
    return tree;
  };