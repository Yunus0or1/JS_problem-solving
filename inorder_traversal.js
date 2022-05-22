
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var inorderTraversal = function (root) {
    while(root != null){
        console.log(root.val)
        inorderTraversal(root.left)
        inorderTraversal(root.right)
    }
};


let root = new TreeNode(1)
let left = new TreeNode(2)
root.left = left

console.log(inorderTraversal(root))
