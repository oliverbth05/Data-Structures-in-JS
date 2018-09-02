class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.last = null;
        this.first = null;
        this.length = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }

        else { 
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length ++;
        return this;
    }

    dequeue() {
        if (this.length === 0) {
           return null
        }

        else if (this.length === 1) {
            this.first = null;
            this.last = null;
        }

        else { 
            this.first = this.first.next;
        }

        this.length --;
        return this;
    }
}
