
class Node{
    constructor(item){
        this.item = item
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
}

// creating a linked list
const myList = new LinkedList();

//assigning item values
myList.head = new Node(1);
let second = new Node(2);
let third = new Node(3);

// connecting nodes
myList.head.next = second
second.next=third;

// traverse the list
let current = myList.head

while(current != null){
    console.log(current.item)
    current = current.next
}
