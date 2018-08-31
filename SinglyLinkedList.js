class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
    }
    else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
 
 pop() {
   if (!this.head) {
     return undefined
   }
   var current = this.head;
   var newTail = current;
   while(current.next) {
     newTail = current;
     current = current.next
   }
   this.tail = newTail;
   this.tail.next = null;
   this.length -= 1;
   if(this.length === 0) {
     this.head = null;
     this.tail = null;
   }
   return current;
   
 }
 
 shift() {
   if(this.length === 0) {
     return undefined
   }
   var shifted = this.head;
   var newHead = shifted.next;
   shifted.next = null;
   this.head = newHead;
   this.length -= 1;
   if(this.length === 0) {
     this.tail = null;
   }
   return shifted;
 }
 
 unShift(val) {
   var newNode = new Node(val)
   if(this.length === 0) {
    this.head = newNode;
    this.tail = this.head;
    this.length += 1
   }
   else {
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1
   }
   return this;
 }
 
 get(index) {
   if (index < 0 || index >= this.length) {
     return undefined
   }
   let current = this.head;
   var i = 0;
   while (current.next && i < index) {
      current = current.next 
      i ++
   }
   return current;
 }
 
 set(index, val) {
   var foundNode = this.get(index);
   if (foundNode) {
    foundNode.val = val
    return foundNode;
   }
   else {
     return false
   }
 }
 
 insert(index, val) {
   if(index > this.length || index < 0) {
     return 'Insertion Failed, index not within range'
   }
   if (index === this.length) {
     this.push(val)
   }
   else if (index === 0) {
     this.unShift(val)
   }
   else {
    var newNode = new Node(val);
    var prevNode = this.get(index - 1)
    var afterNode = prevNode.next
    prevNode.next = newNode;
    newNode.next = afterNode;
   }
    this.length += 1;
    return this;
   }
   
  remove(index) {
    if (index < 0 || index > this.length) {
      return 'Removal Failed, Index out of range'
    }
    else if(index === this.length -1) {
      this.pop()
    }
    else if (index === 0) {
      this.shift()
    }
    else {
      var prevNode = this.get(index - 1);
      var selectedNode = this.get(index);
      var afterNode = this.get(index + 1);
      prevNode.next = afterNode;
    }
    this.length -= 1;
    return selectedNode;
  }
  
  reverse() {
   //On the Way
  }
 }
 
 module.exports = SinglyLinkedList;
