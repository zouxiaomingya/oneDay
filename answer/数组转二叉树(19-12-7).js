function BinarySearchTree(keys) {
  let Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  let root = null;
  let insertNode = (node, newNode) => {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };
  this.insert = key => {
    let newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  keys.forEach(key => {
    this.insert(key);
  });

  return root;
}
const keys = [8, 3, 10, 1, 6, 14, 4, 7, 13];
const treeNode = BinarySearchTree(keys);
console.log(treeNode);
