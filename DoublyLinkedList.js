class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val) {
        var newNode = new Node(val);
        
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        
        else {
            this.tail.next = newNode; //The previous tail will point to the newly created tail node
            newNode.prev = this.tail; //The new tail will point back to the old tail
            this.tail = newNode; // Setting the tail to be the newly created node
        }
        this.length ++;
        return this
    }
    
    pop() {
        
        let popped = this.tail; // saving a pointer to the old tail
        
        if(this.length === 0) {
            return undefined
        }
        
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        
        else {
            this.tail = popped.prev; // setting the new tail to be one node previous to the old tail
            popped.prev = null; // prevent the popped item from accessing its prev property (sever the connection)
            this.tail.next = null; // removing the next link on the new tail
        }
        
        this.length --;
        return popped; //return the popped node
    }
    
    shift() {
        
        let oldHead = this.head; // save pointer to the head that is being removed
         
        if ( this.length === 0 ) {
            return undefined
        }
        
        if ( this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        
        else {
            this.head = oldHead.next; // assigning new head
            this.head.prev = null; // The head shouldn't point back to anything
    
            oldHead.next = null; //Sever the reference
        }
        
        this.length -= 1;
        return oldHead;
    }
    
    unShift(val) {
        let newNode = new Node(val);
        
        if( this.length === 0 ) {
            this.head = newNode;
            this.tail = newNode;
        }
        
        else {
            this.head.prev = newNode; // The old head will point back to the new one
            newNode.next = this.head; // The new head will point forward to the old one
            this.head = newNode; //Replacing the head property with the new node
        }
        
        this.length ++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length ) { //Edge Cases
            return null
        }

        let mid = Math.floor(this.length / 2); //Find a midpoint in the list 

        if(index <= mid) { //If the index provided leans more towards the lower half, start from the head and move up
            var i = 0;
            var current = this.head;

            while (current.next && i < index) {
                current = current.next;
                i ++
            }
            console.log('from head')
            return current;
        }

        else if (index >= mid) {  //If the index leans more towards the upper half, start from the tail and move down 
            var i = this.length - 1;
            var current = this.tail;

            while (current.prev && i > index) {
                current = current.prev;
                i --
            }
            console.log('from tail')
            return current
        }
    }
    
    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode !== null) {
            foundNode.val = val;
            return true;
        }

        else { 
            return false
        }
    }

    insert(index, val) {
        if(index === 0) {
            return this.unShift(val);
        
        }
        else if (index === this.length) {
            return this.push(val);
            
        }
        let currentNode = this.get(index);
        if(currentNode === null) {
           return false
        }
        else { 
            let newNode = new Node(val);
            let previousNode = currentNode.prev; //Grab the node at the index before
            previousNode.next = newNode;// => point it toward the newly inserted node
            currentNode.prev = newNode;//  point the node ahead of the new node back at it
            newNode.next = currentNode;
            newNode.prev = previousNode;
        }
        this.length ++;
        return true
    }

    remove(index) {
        if(index < 0 || index >= this.length) {
            return false;
        }

        if(index === 0) {
            return this.shift()
        }

        if(index === this.length - 1) {
            return this.pop()
        }

        let removeNode = this.get(index);
        let prevNode = removeNode.prev;
        let afterNode = removeNode.next;

        prevNode.next = afterNode; //Connect the nodes before and after the removed node
        afterNode.prev = prevNode;

        removeNode.next = null; //Sever the old node's connection
        removeNode.prev = null;

        this.length --;
        return removeNode;
        
    }
}
