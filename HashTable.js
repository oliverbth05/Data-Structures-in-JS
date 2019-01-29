class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }
    
    _hash(key) {
        let total = 0;
        let prime = 31;
        
        for ( let i = 0 ; i < Math.min(key.length, 100) ; i++ ) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        
        return total;
    }
    
    set(key, value) {
        var index = this._hash(key);
        if(this.keyMap[index]) {
            var val = [key, value]; 
            this.keyMap[index].push(val) 
            //At each index of the keymap is an array of elements.
            //Each element is itself an array of length 2, representing the key and value.
        }
        
        else {
            this.keyMap[index] = [[key, value]]
        }
        return this.keyMap
    }
    
    get(key) {
        var index = this._hash(key);
        if (!this.keyMap[index]) { 
            return 'Value is undefined'
        }
        if (this.keyMap.length > 1) {
            for (let el of this.keyMap[index]) {
                if (el[0] === key) {
                    return el[1]
                }
            }
            return 'Key Undefined'
        }
        return this.keyMap[index][0][1]
    }
    
    keys() {
        let keys = []
        for (var i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (var j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }
        
        return keys
    }
    
    values() {
        let values = []
        for (var i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (var j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1])
                }
            }
        }
        
        return values
    }
}

var table = new HashTable();
table.set('blue', 'value')
table.set('red', 'value')
console.log(table.values());



