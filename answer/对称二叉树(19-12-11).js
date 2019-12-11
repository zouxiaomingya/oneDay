/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  console.log(root)
  if (!root) {
  return true;
}
return isSameTree(root.left, root.right);
};
const isSameTree = (leftChild, rightChild) => {
  if (leftChild === null) {
    return rightChild === null;
  }
  if (rightChild === null) {
    return leftChild === null;
  }
  if (leftChild.val !== rightChild.val) {
    return false;
  }
  return isSameTree(leftChild.left, rightChild.right) && isSameTree(leftChild.right, rightChild.left);
};