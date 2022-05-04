
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var mergeTwoLists = function (list1, list2) {
    let newList = []

    while(list1 != null){
        newList.push(list1.val)
        list1 = list1.next
    }

    while(list2 != null){
        newList.push(list2.val)
        list2 = list2.next
    }


    newList = newList.sort()

    let head = new ListNode(newList[0], new ListNode(newList[1]))
    let tmp = head

    for (let i = 1; i < newList.length; i++) {
        tmp.next = new ListNode(newList[i], new ListNode(newList[i + 1]))
        tmp = tmp.next
    }


    while (head.next != null){
        head = head.next
    }

    
    return newList
};

list1 = [], list2 = [0]

console.log(mergeTwoLists(list1, list2))