class Node {
  constructor(element){
    this.next = null;
    this.element = element;
  }
}


// Linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);
    let temp;
    // if list is empty then add the element and make it head
    // else go till last 
    if(this.head === null) {
      this.head= node;
    } else {
      temp = this.head;
      while(temp.next) {
        temp = temp.next;
      }
      temp.next = node;
    }
    this.size++;
  }

  print() {
    let temp = this.head;
    while(temp) {
      console.log(temp.element);
      temp = temp.next
    }
  }
}

const linked = new LinkedList();
linked.add(5);
linked.add(6);

linked.print();


