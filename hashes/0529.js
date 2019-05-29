class HashMap{
    constructor(size){
        this.capacity = size;
        this.entries = 0;
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
        const entry = table[index];
        for(let i=0; i < entry.length; i++){
            if (entry[i][0] === key){
             entry[i][1] = value;
                return true;
            }
        }
        this.entries ++;
        entry.push([key,value]);
        return true;     
    }
    isEmpty(){
        return this.entries === 0
    }
    find(key){
        if( this.isEmpty()){
            return false;
        }
        const index = this.generateHashKey(key, this.capacity);
        const table = this.table;
        const entry = table[index]  || [];
        // console.log('index: ', index);
        // console.log('key: ', key);
        // console.log(this.table);
        for(let i=0; i < entry.length; i++){
            // console.log('current index ', index);         
            // console.log('current i ', i);
            if (entry[i][0] === key){
                return entry[i][1];
            }
        }
        return null;
    }
}
var x = new HashMap(10);
console.log(x.add('tacoCat', "tacos"));
console.log(x.add('cattaco', "nottacos"));
console.log(x.add('airplanes', "crashing"));
console.log(x.add('kittens', "exploding"));
console.log(x.add('name', "bob"));
console.log(x.add('mane', "somethingelse"));


console.log(x.find('mane'));
console.log(x.find('notthere'));
console.log(x.find('kittens'));
console.log(x.find('cattaco'));

// console.log(x);
