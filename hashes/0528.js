class HashMap{
    constructor(size){
        this.capacity = size;
        // this.table = [  [  ['name', 'bob'], ['mane', 'brown']  ], [  ['age', 34]  ]  ];
        //            this.table[index][i][0]
        this.table = [];
    }
    generateHashKey(key, size) {
        let hash = 0;
    
        if (key.length == 0) { 
          return hash;
        }
        
        for (let i = 0; i < key.length; i++) {
          const char = key.charCodeAt(i);
          hash = ((hash << 5) - hash) + char;
          hash &= hash; // Convert to 32bit int
        }
        return (hash % size + size) % size;
    }
    add(key, value) {
        if( key === undefined){
            return false;
        }
        const index = this.generateHashKey(key, this.capacity);
        const table = this.table;
        if( table[index] === undefined){
            table[index] = [];
        }
        const entries = table[index];
        for(let i=0; i<entries.length; i++){
            if(entries[i][0] === key){
                entries[i][1] = value;
                return true;
            }
        }
        entries.push([key,value]);
        return true;
        // this.table[index][this.capacity][0] = key;
        // this.table[index][this.capacity][1] = value;        
    }
}
var x = new HashMap(10);
// console.log(x.generateHashKey("stirng", 42));
// console.log(x.generateHashKey('name', 10));
console.log(x.add('tacoCat', "tacos"));
console.log(x.add('cheese', "four"));
console.log(x.add('eeesch', "anything"));
console.log(x);

// {
//     name: 'bob',
//     age: 34,
// }