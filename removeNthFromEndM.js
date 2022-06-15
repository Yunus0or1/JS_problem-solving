
var removeNthFromEnd = function (head, n) {
    if (head === null) return null

    let dummyNode = new ListNode(0, head)

    let slowNode = dummyNode
    let fastNode = head

    let mainHead = head

    x = 0
    while (x != n) {
        fastNode = fastNode.next
        x = x + 1
    }
    
    while (fastNode != null) {
        fastNode = fastNode.next
        slowNode = slowNode.next
    }

    slowNode.next = slowNode?.next?.next

    return dummyNode.next
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let l1 = new ListNode(1)
let l2 = new ListNode(2)
let l3 = new ListNode(3)
let l4 = new ListNode(4)
let l5 = new ListNode(5)
l1.next = l2
l2.next = l3
l3.next = l4
l4.next = l5

n = 2
let newHead = removeNthFromEnd(l1, n)

while (newHead != null) {
    console.log(newHead.val)
    newHead = newHead.next
}
