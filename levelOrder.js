function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var levelOrder = function (root, k) {
    let queue = []
    let result = []
    const level = {}

    if (root == null) return result

    result.push([root.val])
    queue.push(root)
    level[root.val] = 0

    while (queue.length != 0) {
        let node = queue.shift()
        let currentLevel = level[node.val]

        if (node.left != null) {
            queue.push(node.left)
            level[node.left.val] = currentLevel + 1

            if (result[currentLevel + 1] === undefined) {
                result.push([node.left.val])
            } else {
                result[result.length - 1].push(node.left.val)
            }
        }

        if (node.right != null) {
            queue.push(node.right)
            level[node.right.val] = currentLevel + 1

            if (result[currentLevel + 1] === undefined) {
                result.push([node.right.val])
            } else {
                result[result.length - 1].push(node.right.val)
            }
        }
    }

    return result
};

let root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.right.left = new TreeNode(9)
root.right.left.left = new TreeNode(99)
root.right.right = new TreeNode(8)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.left.right.right = new TreeNode(-3)
root.left.left.left = new TreeNode(1)
root.left.left.left.left = new TreeNode(-7)

console.log(levelOrder(root))

