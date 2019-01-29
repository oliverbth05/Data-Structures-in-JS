//Undirected Adjacency List

class Graph {
    
    constructor() {
        this.adjacencyList = {}
    }
    
    addVertex(vertex) {
        this.adjacencyList[vertex] = []
    }
    
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => v !== v2 )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter( v => v !== v1 )
        console.log(`Edge Removed ${v1} and ${v2}`);
    }
    
    removeVertex(v) { //Goes through the array of edges, removing them, before deleting the vertex itself
      while (this.adjacencyList[v].length) { 
        let adj = this.adjacencyList[v].pop();
        this.removeEdge(adj, v);
      }    
      delete this.adjacencyList[v]
    }
    
    dfsRecursive(start) {
        var visited = {}
        var results = []
        var adjacencyList = this.adjacencyList;
        
        (function traverse(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            results.push(vertex);
            
            for ( var i = 0 ; i < adjacencyList[vertex].length; i++ ) {
                if ( visited[adjacencyList[vertex][i]] ) {
                    continue
                }
                traverse(adjacencyList[vertex][i])
            }
            return results
        })(start)
    }
    
    dfsIterative(start) {
        let stack = []
        let visited = {};
        let results = [];
        
        stack.push(start);
        
        while (stack.length) {
            console.log(stack)
            let vertex = stack.pop();
            
            if (visited[vertex]) continue;
            
            visited[vertex] = true;
            results.push(vertex);
            stack = stack.concat(this.adjacencyList[vertex])
        }
        
        return results
    }
}

let g = new Graph();

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

g.dfsIterative('A')
