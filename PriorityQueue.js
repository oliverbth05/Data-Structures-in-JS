class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }

}

//Works like a minimum binary heap, where smaller values bubble up to the top, in this case priority.

class PriorityQueue {
    constructor() {
        this.values = []
    }
    
     bubbleUp() { 
        
        let idx = this.values.length - 1; 
        const element = this.values[idx];
        
        while(idx > 0) { 
            
            let parentIdx = Math.floor((idx - 1) / 2); 
            let parent = this.values[parentIdx];
            
            if(element.priority >= parent.priority) {
                break;
            }
            
            else { 
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                idx = parentIdx;
            }
            
        }
    }
    
    trickleDown() { 
        
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];
        
        while (true) {
            
            let leftIdx = ((2 * idx) + 1);
            let rightIdx = ((2 * idx) + 2);
            
            let leftChild, rightChild;
            let swap = null;
            
            if ( leftIdx < length ) { 
                leftChild = this.values[leftIdx];
                
                if(leftChild.priority < element.priority) {
                    swap = leftIdx 
                }
            }
            
            if (rightIdx < length) {
                rightChild = this.values[rightIdx];
                
                if(swap === null && rightChild.priority < element.priority || (swap !== null && rightChild.priority < leftChild.priority)) { 
                }
            }
            
            if (swap === null) {
                break; 
            }
         
            
            this.values[idx] = this.values[swap];
            this.values[swap] = element
            idx = swap; 
        }
    }
    
     enqueue(value, priority) {
         
        let newNode = new Node(value, priority);
        
        this.values.push(newNode);
        this.bubbleUp();
    }
    
    dequeue() {
        
        let max = this.values[0]; 
        let end = this.values.pop();
        
        if (this.values.length > 0) {
            this.values[0] = end; 
            this.trickleDown();
        }
      
        return max
        
    }
}
