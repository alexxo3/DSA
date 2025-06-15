const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    // append a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if(this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = newNode;

    }

    //prepend a new node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // delete a node from the list
    delete(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    //search for a node in the list
    search(data) {
        let current = this.head;
        while(current !== null) {
            if(current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    //print the list
    printList() {
        let current = this.head;
        while(current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let list = new LinkedList();
list.append("Apple");
list.append("Banana");
list.append("Cherry");
list.printList();
list.append("Date");
list.printList();
