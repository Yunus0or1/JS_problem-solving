
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var inorderTraversal = function (root) {

    if(root === null) {
        return
    }

    const nodeList = []

    const inorderTraversalTree = (rootTree, nodeList) => {
        if (rootTree === null) {
            return
        }

        inorderTraversalTree(rootTree.left, nodeList)
        nodeList.push(rootTree.val)
        inorderTraversalTree(rootTree.right, nodeList)

    }

    inorderTraversalTree(root, nodeList)

    return nodeList
};

let root = new TreeNode(1)



console.log(inorderTraversal(root))
