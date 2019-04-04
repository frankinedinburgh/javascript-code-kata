function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
    let newNode= new Node(value, this.head, null)
    if(this.head) this.head.prev = newNode;
    else this.head = newNode;
}

let node1 = new Node(100, 'node2', null)
console.log(LinkedList.prototype.addToHead(100))
