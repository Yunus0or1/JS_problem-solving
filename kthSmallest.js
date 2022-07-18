/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var kthSmallest = function (root, k) {
    let array = []
    let found = false

    const inOrder = (node) => {
        if (node === null || found) return
        inOrder(node.left)
        array.push(node.val)
        if (array.length === k) {
            found = true
        }
        inOrder(node.right)
    }


    inOrder(root)
    return array[1]
};

let root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.left.left.left = new TreeNode(1)

k = 3
console.log(kthSmallest(root, k))

