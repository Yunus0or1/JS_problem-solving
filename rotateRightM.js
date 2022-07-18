
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var rotateRight = function (head, k) {
    if (head === null) return null

    let tail = head
    let len = 1
    while (tail.next != null) {
        tail = tail.next
        len = len + 1
    }

    if (k >= len) {
        k = k % len
    }

    if (k === 0) return head

    let newTail = head
    let tmpHead = head
    let i = 0

    while (i != k) {
        tmpHead = tmpHead.next
        i = i + 1
    }

    while (tmpHead.next != null) {
        tmpHead = tmpHead.next
        newTail = newTail.next
    }

    let newHead = newTail.next
    newTail.next = null
    tail.next = head


    return newHead
};

function printNode(head) {
    while (head != null) {
        console.log(head.val)
        head = head.next
    }
}


let head = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(4)
let n5 = new ListNode(5)
let n6 = new ListNode(6)

// head.next = n2
// n2.next = n3
// n3.next = n4
// n4.next = n5

k = 1
console.log(rotateRight(head, k))





