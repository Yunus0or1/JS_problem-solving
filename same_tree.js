
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Bad Approach
// var isSameTree = function (p, q) {

//     const pTreeNodeList = []
//     const qTreeNodeList = []

//     const inorderTraversalTree = (rootTree, nodeList) => {
//         if (rootTree === null) {
//             nodeList.push(null)
//             return
//         }

//         nodeList.push(rootTree.val)
//         inorderTraversalTree(rootTree.left, nodeList)

//         inorderTraversalTree(rootTree.right, nodeList)

//     }

//     inorderTraversalTree(p, pTreeNodeList)
//     inorderTraversalTree(q, qTreeNodeList)

//     console.log(pTreeNodeList)
//     console.log(qTreeNodeList)

//     if(JSON.stringify(pTreeNodeList) === JSON.stringify(qTreeNodeList)){
//         return true
//     }

//     return false

// };


var isSameTree = function (p, q, type) {
    console.log(p, q, type)
    if (p === null && q === null) return true
    else if (p === null || q === null) return false
    else if (p.val != q.val) return false

    return isSameTree(p.left, q.left, 'left') && isSameTree(p.right, q.right, 'right')

}

let p = new TreeNode(1)
p.left = new TreeNode(2)
p.left.left = new TreeNode(4)
p.left.right = new TreeNode(5)
p.right = new TreeNode(3)

let q = new TreeNode(1)
q.left = new TreeNode(2)
q.right = new TreeNode(3)
q.left.left = new TreeNode(4)
q.left.right = new TreeNode(5)

// let p = new TreeNode(1)
// p.left = new TreeNode(1)

// let q = new TreeNode(1)
// q.right = new TreeNode(1)

console.log('----------------------------------')
console.log(isSameTree(p, q, 'main'))
