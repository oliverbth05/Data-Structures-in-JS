class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0
    }

    //Removing from the beginning of a singly linked list is faster than removing from the end.
    //The most recently added node, conceptually, will start at the index of 0

    //Push will essentially function like unshift, because we are working at the beginning of the list.
    
    //Last refers to the last variable added to the stack, and first refers to the first variable added.
    //Last is the top of the stack, and first is the bottom
    
    push(val) {

        let newNode = new Node(val);

        if (this.length === 0) {
            this.last = newNode;
            this.first = newNode;
        }

        else {
            var temp = this.last;
            this.last = newNode;
            this.last.next = temp;  
        }

        this.length ++;
        return this.length, newNode;
        
    }
    
    //Pop will function like shift
    pop() {
        if (this.length === 0) {
            return null
        }

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        }

        else {
            var popped = this.last;
            var newLast = popped.next;
            this.last = newLast;
        }

        this.length --;
        return this.length, popped;
    }
}
