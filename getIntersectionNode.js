var getIntersectionNode = function (headA, headB) {
    const setData = new Set()

    while (headA != null) {
        setData.add(headA)
        headA = headA.next
    }


    while (headB != null) {
        if(setData.has(headB)){
            return headB
        }
        headB = headB.next
    }

    return null

};

function ListNode(val) {
    this.val = val;
    this.next = null;
}


let a = new ListNode(4)
let b = new ListNode(1)

let c = new ListNode(5)
let d = new ListNode(6)
let e = new ListNode(1)

let f = new ListNode(8)
let g = new ListNode(4)
let h = new ListNode(5)

a.next = b
b.next = f

c.next = d
d.next = e
e.next = f

f.next = g
g.next = h

console.log(getIntersectionNode(a, c))