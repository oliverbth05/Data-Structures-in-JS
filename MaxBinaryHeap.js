class MaxBinaryHeap {
    
    constructor(){
        this.values = [];
    }
    
    bubbleUp() { //Helper method for insert method
        
        let idx = this.values.length - 1; //Grabs the most recently added node
        const element = this.values[idx];
        
        while(idx > 0) { //If the index reaches 0, the comparisons should stop
            
            let parentIdx = Math.floor((idx - 1) / 2); //Formula for calculating parent index given child index
            let parent = this.values[parentIdx];
            
            if(element <= parent) {
                break;
            }
            
            else { //If the child element is greater than the parent ==> swap.
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                idx = parentIdx; //Update the index to find the new parent
            }
            
        }
    }
    
    trickleDown() { //Helper method for ExtractMax
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];
        
        while (true) {
            
            let leftIdx = ((2 * idx) + 1);
            let rightIdx = ((2 * idx) + 2);
            
            let leftChild, rightChild; // Simply initializing the variable, no guarantee of there being a child
            let swap = null;
            
            if ( leftIdx < length ) { //Checking if its a valid index
                leftChild = this.values[leftIdx];
                
                if(leftChild > element) {
                    swap = leftIdx  //
                }
            }
            
            if (rightIdx < length) {
                rightChild = this.values[rightIdx];
                
                if(swap === null && rightChild > element || (swap !== null && rightChild > leftChild)) { //Checking if the right child is the larger of the two
                    swap = rightIdx
                }
            }
            
            if (swap === null) {
                break; //If no swaps occurred, the loop terminates
            }
            //Do the swap
            
            this.values[idx] = this.values[swap];
            this.values[swap] = element
            idx = swap; //Update the index
        }
    }
    
    insert(val) {
       this.values.push(val);
       this.bubbleUp();
    }
    
    extractMax() {
        let max = this.values[0];    // Remove the greatest number which is at index 0 
        let end = this.values.pop();
        
         //Edge case: if the array has 1 item left, skip the assignment and trickleDown
        
        if (this.values.length > 0) {
            this.values[0] = end; 
            this.trickleDown();
        }
      
        return max
        
    }
}
