/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {

    if(!head) return null; 
    if(!head.next) return head; 

    var mainHead = head;

    while (head.next.next != null) {
        if (head.val === head.next.val) {
            head.next = head.next.next
            head = head
        } else {
            head = head.next
        }
    }

    // Last Check
    if (head.val === head.next.val) {
        head.next = null
    }

    return mainHead
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function printNode(head) {
    while (head != null) {
        console.log(head.val)
        head = head.next
    }
}

const head = new ListNode(1)
head.next = new ListNode(1)
head.next.next = new ListNode(2)
// head.next.next.next = new ListNode(3)
// head.next.next.next.next = new ListNode(3)

const newHead = deleteDuplicates(head)
printNode(newHead)