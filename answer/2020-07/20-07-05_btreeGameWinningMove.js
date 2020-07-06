var btreeGameWinningMove = function(root, n, x) {
    let xNode;
    let all = tools(root);
    let part1 = xNode.leftChild;
    let part2 = xNode.rightChild;
    //parent分支对应的节点数
    let part3 = all-part1-part2-1;
    
    if(part1+part2+1<part3 || part1+part3+1<part2 || part2+part3+1<part1){
        return true;
    }
    return false;
    
    // node及其子节点的总节点数
    function tools(node){
        if(node.val===x){
            xNode=node;
        }
        // 左分支节点数
        let leftChild = node.leftChild = node.left?tools(node.left):0;
        // 右分支节点数
        let rightChild = node.rightChild = node.right?tools(node.right):0;
        // 总节点数
        return leftChild+rightChild+1;
    }
};