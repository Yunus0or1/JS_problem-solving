
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSymmetric = function (root) {
    const nodeList = []

    const inorderTraversalTree = (rootTree, nodeList) => {
        if (rootTree === null) {
            return
        }


        inorderTraversalTree(rootTree.left, nodeList)
        nodeList.push(rootTree.val)
        inorderTraversalTree(rootTree.right, nodeList)

    }

    inorderTraversalTree(root,nodeList)

    console.log(nodeList)

    let i = parseInt(nodeList.length / 2) - 1
    let j = parseInt(nodeList.length / 2) + 1

    while (i != 0 && j != nodeList.length - 1){
        if(nodeList[i] != nodeList[j]){
            return false
        }
        i = i - 1
        j = j + 1
    }

    return true
};

// Test Case - 1
// let root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.left.left = new TreeNode(3)
// root.left.right = new TreeNode(4)

// root.right = new TreeNode(2)
// root.right.left = new TreeNode(4)
// root.right.right = new TreeNode(3)

// Test Case - 2
// let root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.left.right = new TreeNode(3)

// root.right = new TreeNode(2)
// root.right.right = new TreeNode(3)

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(2)

root.right = new TreeNode(2)
root.right.left = new TreeNode(2)


console.log(isSymmetric(root))
