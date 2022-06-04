
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//     let arrayL3 = []
//     let remainder = 0


//     while (l1 != null || l2 != null) {
//         let val1 = 0
//         let val2 = 0

//         if (l1 != null) {
//             val1 = l1.val
//         }

//         if (l2 != null) {
//             val2 = l2.val
//         }

//         let sum = val1 + val2 + remainder

//         if (sum >= 10) {
//             remainder = 1
//             sum = sum - 10
//         } else {
//             remainder = 0
//         }

//         arrayL3.push(sum)

//         if (l1 != null)
//             l1 = l1.next

//         if (l2 != null)
//             l2 = l2.next
//     }

//     if (remainder > 0) {
//         arrayL3.push(remainder)
//     }

//     let l3 = new ListNode()
//     const headL3 = l3

//     for (let i = 0; i < arrayL3.length; i++) {
//         l3.val = arrayL3[i]

//         if (i != arrayL3.length -1){
//             l3.next = new ListNode()
//             l3 = l3.next
//         }

//     }

//     return headL3
// };

var addTwoNumbers = function (l1, l2) {
    let remainder = 0

    let l3 = new ListNode()
    const headL3 = l3

    while (l1 != null || l2 != null) {
        let val1 = 0
        let val2 = 0

        if (l1 != null) {
            val1 = l1.val
        }

        if (l2 != null) {
            val2 = l2.val
        }

        let sum = val1 + val2 + remainder

        if (sum >= 10) {
            remainder = 1
            sum = sum - 10
        } else {
            remainder = 0
        }

        l3.val = sum
        if ((l1 != null && l1.next != null) || (l2 != null && l2.next != null)) {
            l3.next = new ListNode()
            l3 = l3.next
        }


        if (l1 != null)
            l1 = l1.next

        if (l2 != null)
            l2 = l2.next
    }


    if (remainder > 0) {
        l3.next = new ListNode(remainder)
    }

    return headL3
};


const l1 = new ListNode(2)
h1 = new ListNode(2)
h2 = new ListNode(3)

l1.next = h1
h1.next = h2

const l2 = new ListNode(5)
h1 = new ListNode(6)
h2 = new ListNode(3)

l2.next = h1
h1.next = h2


let l3 = addTwoNumbers(l1, l2)

while (l3 != null) {
    console.log(l3.val)
    l3 = l3.next
}