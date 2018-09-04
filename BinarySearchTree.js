class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    //  this.frequency = 0;  A possible way of handling duplicate nodes in a tree
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    
    insert(val) {
        
        let newNode = new Node(val);
        
        if (!this.root) {
            this.root = newNode;   
        }
        
        else {
            let complete = false;
            let current = this.root; //A reference to keep track of location in the tree, starts at the root and moves accordingly
        
            while(!complete) {
                
                if (newNode.value === current.value) { //Default way of handling duplicates
                    return false
                }
                
                if (newNode.value > current.value) {
                    if (!current.right) { //If a left or right value does not exist, it will be set as the new node, and the loop will break.
                        
                        current.right = newNode;
                        complete = true;
                    }
                    
                    else { 
                    current = current.right; //Moves the pointer further down the tree
                    }
                        
                }
                
                else if (newNode.value < current.value) {
                    if (!current.left) { //If a left or right value does not exist, it will be set as the new node, and the loop will break.
                       current.left = newNode;
                       complete = true;
                    }
                    
                    else {
                        current = current.left; //Moves the pointer further down the tree
                    }
                    
                }
            }
        }
    }
    
    find(val) {
        if (!this.root) {
            return false;
        }
        
        let current = this.root;
        let found = false;
        
        while(!found) {
            
            if (current.value === val) {
                
                return true
            }
            
            else if (val > current.value) {
                
                if(!current.right) { 
                    
                    return false
                }
                
                else {
                    current = current.right;
                }
               
            }
            
            else if (val < current.value) {
                
                if(!current.left) {
                    
                    return false
                }
                
                else {
                    current = current.left;
                }
                
            }
        }
    }
}
