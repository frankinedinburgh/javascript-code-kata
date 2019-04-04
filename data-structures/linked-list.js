/*

 What is a linked-list ?
 Linked List is Dynamic data Structure.
 Linked List can grow and shrink during run time.
 Insertion and Deletion Operations are Easier.
 Efficient Memory Utilization ,i.e no need to pre-allocate memory

{
	value: 7
	next: nextNode,
	prev: prevNode

}

- Add to Tail
- Add to Head
- Remove from Tail
- Remove from Head
- Search Method
- Big 0 Notation and calculating the runtime of a function

 */

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
	let newNode = new Node(value, this.head, null);
	if(this.head) this.head.prev = newNode;
	else this.tail = newNode;
	this.head = newNode;
};

LinkedList.prototype.addToTail = function (value){
	let newNode = new Node(value, null, this.tail);
	if (this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
	if(!this.head) return null;
	let val = this.head.value;
	this.head = this.head.next;
	if(this.head) this.head.prev = null;
	else this.tail = null;
	return val;
};

LinkedList.prototype.removeTail = function (){
	if (!this.tail) return null;
	let val = this.tail.value;
	this.tail = this.tail.prev;
	if (this.tail) this.tail.next = null;
	else this.head = null;
	return val;
};

LinkedList.prototype.search = function(searchValue) {

	let currentNode = this.head;
	while(currentNode) {

		if(currentNode.value === searchValue) return currentNode.value;
		currentNode = currentNode.next;
	}

	return null;
};


LinkedList.prototype.indexOf = function(value) {

	if (!this.head) return null;
	let index = 0;
	let current = this.head;
	while(current) {
		if(current.value === value) return index;
		index++
		current = current.next;
	}

	return index;
}




const ll= new LinkedList();
ll.addToHead(90)
ll.addToHead(290)
ll.addToHead(245)
ll.addToHead(345)



console.log(ll.indexOf(290))
