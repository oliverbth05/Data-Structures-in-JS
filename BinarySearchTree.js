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
    
    bfSearch() { //Breadth First Search
        let queue = [];
        let visited = [];
        
        if (!this.root) {
            return null
        }
        
        else {
            queue.push(this.root)
            
            while (queue.length > 0) {
                let current = queue.shift();
                visited.push(current.value);
                
                if (current.left) {
                    queue.push(current.left)
                }
                
                if (current.right) {
                    queue.push(current.right)
                }
                
            }
            
            return visited
        }
    }
    
    dfpreSearch() { //Depth First Pre Order Search
        let visited = [];
        let current = this.root;
        
        function traverse(node) {
            visited.push(node.value);
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(current);
        return visited;
    }
    
    dfpostSearch() { //Depth First Post Order Search
        let visited = [];
        let current = this.root;
        
        function traverse(node) {
            
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            
            visited.push(node.value);
        }
        traverse(current);
        return visited;
    }
    
    dforderSearch() { //Depth First In Order Search
        let visited = [];
        let current = this.root;
        
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            
            visited.push(node.value);
            
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(current);
        return visited;
    }
    
    
}
