var detectCycle = function (head) {
  const set = new Set()

  while (head != null) {
    if (set.has(head)) {
      return head
    }
    set.add(head)
    head = head.next
  }

  return null

};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function printNode(head) {
  while (head != null) {
    console.log(head.val)
    head = head.next
  }
}

const head = new ListNode(3)
h1 = new ListNode(2)
h2 = new ListNode(0)
h3 = new ListNode(-4)

head.next = h1
h1.next = h2
h2.next = h3
h3.next = h1


console.log(detectCycle(head))