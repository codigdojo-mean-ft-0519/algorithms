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
        // console.log('key', key, 'index ', index);
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
    remove(key){
        if( this.isEmpty()){
            return false;
        }
        const index = this.generateHashKey(key, this.capacity);
        const table = this.table;
        const entry = table[index]  || [];
        for( const [idx,[kay,value]] of entry.entries()){
            // console.log(idx,kay,value);
            if(kay === key){
                // console.log('before splice', entry);
                entry.splice(idx,1);
                // console.log('after splice',entry);
                return value;
            }
            
        }
        return null;
        // console.log('index: ', index);
        // console.log('key: ', key);
        // console.log(this.table);
        // for(let i=0; i < entry.length; i++){
        //     // console.log('current index ', index);         
        //     // console.log('current i ', i);
        //     if (entry[i][0] === key){
        //         console.log('entry before splice',entry);                
        //         let temp = entry.splice(i,1);
        //         console.log('entry after splice',entry);
        //         console.log("temp ",temp);
        //         return temp[0][1];
        //         // entry[i][1] = null;  
        //         // return entry[i][1];
        //         // return table;
        //     }
        // }
    }
    grow(){
        const oldTable = this.table;
        this.table = [];
        const newSize = (this.capacity * 1.5);
        this.capacity = newSize;
        for( let i =0; i< oldTable.length;i++){
            const entry = oldTable[i] || [];
            for(const [key,value] of entry ){
                this.add(key, value);
            }
            // for(let j =0; j< entry.length ;j++){
            //     console.log('entry at j ',entry[j]);
            //     this.add(entry[j][0], entry[j][1]);
            // }
        }
        // console.log('this is our table',this.table);
        return this.table;
    }
}

var x = new HashMap(10);
console.log(x.add('tacoCat', "tacos"));
console.log(x.add('cattaCo', "nottacos"));
console.log(x.add('airplanes', "crashing"));
console.log(x.add('kittens', "exploding"));
console.log(x.add('snettik', "not-exploding"));
console.log(x.add('name', "bob"));
console.log(x.add('mane', "somethingelse"));

console.log(x.grow());
console.log(x.find('kittens'));

// console.log(x);
