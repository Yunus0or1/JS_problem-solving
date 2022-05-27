
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var treeTraversalIterative = function (root) {
    const treeStack = [root]

    // Pre Order Iterative
    while(treeStack.length != 0){
        const node = treeStack.pop()
        if(node != null){
            console.log(node.val)
            treeStack.push(node.right)
            treeStack.push(node.left)
        }
    }
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
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(9)

root.right = new TreeNode(4)
root.right.left = new TreeNode(5)

treeTraversalIterative(root)
