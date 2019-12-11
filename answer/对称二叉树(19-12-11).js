const arr = [1, 2, 2, 3, 4, 4, 3];

function TreeNode(val) {
  this.value = val;
}
const sortedArrayToBST = arr => {
  //   if (arr.length === 0) {
  //     return null;
  //   }
  //   if (arr.length === 1) {
  //     return new TreeNode(arr[0]);
  //   }
  var mid = parseInt(arr.length / 2);
  var root = new TreeNode(arr[mid]);
  const [root, leftNood, rightNood] = arr;
  root.left = sortedArrayToBST(leftNood);
  root.right = sortedArrayToBST(rightNood);
  return root;
};

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}
function insert(data) {
  var n = new Node(data, null, null); //声明一个新的节点
  if (this.root == null) {
    // 如果节点为根null，声明的节点即为跟节点
    this.root = n;
  } else {
    // 如果不是的话，从根节点开始找可以插入的位置
    var current = this.root; //声明当前遍历节点，初始为根节点
    var parent; // 当前节点的父节点
    while (true) {
      // 循环遍历
      parent = current; // 存储当前节点，后边当前节点会指向其子节点
      if (data < current.data) {
        // 如果插入的数据小于当前节点的数据
        current = current.left; // 当前节点变为其左节点
        if (current == null) {
          // 如果当前节点为null 则把插入到当前节点
          parent.left = n;
          break;
        }
      } else {
        // 如果大于的话插入右节点
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}
