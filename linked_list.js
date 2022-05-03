class LinkedList {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

let n1 = new LinkedList(1)
let n2 = new LinkedList(2)

n1.next = n2

let n = n1

while (n != null) {
    console.log(n.value)
    n = n.next
}