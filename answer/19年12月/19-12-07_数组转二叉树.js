// 按顺序插入
// [1,2,3,4,5,6]
/**
 *     1
 *   2   2
 *  3 4 5 6
 */
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


// [13, 21, 15, 29, 3, 55]
/**
 *      13
 *    3     21
 *        15  29
 *              55
 */
function Node(data,left,right) {
    this.data = data;
    this.left = left;
    this.right = right;
}
//定义插入对象
function BST(){
    this.root = null;
    this.insert = insert;
    this.show = ()=>{
       console.log(this.root);
    }
}
function insert(data) {
    //实例化Node对象
    let n = new Node(data,null,null);
    //如果不存在节点，则此节点是根节点
    if(this.root == null){
        this.root = n;
    }else{
        //存在根节点时，定义current白能量等于根节点
        let current = this.root;
        let parent;
        while(current){
            parent = current;
            //当插入的值小于根节点的值时，将值作为左节点插入
            if(data<current.data) {
                current = current.left;
                if(current == null) {
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        } 
    }
}
const bst = new BST();
bst.insert(13);
bst.insert(21);
bst.insert(15);
bst.insert(29);
bst.insert(3);
bst.insert(55);
bst.show();