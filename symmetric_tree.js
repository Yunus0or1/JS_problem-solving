
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSymmetric = function (root) {
    if (root === null) return true
    else if (p === null || q === null) return false
    else if (p.val != q.val) return false

    return isSymmetric(root.left, root.right,) && isSymmetric(p.right, q.right, 'right')
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
