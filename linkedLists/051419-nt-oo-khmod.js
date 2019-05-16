//SList: Reverse

// Reverse the node sequence. Given an SList object, the .head property should point to the previously-last node, and the rest of the nodes should follow similarly from back to front.

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}


class List {
    constructor() {
        this.head = null;
    }

    popBack () {
        if (!this.head) {
            return null;
        }
        var returnVal;
        if (!this.head.next) {
            returnVal = this.head.val;
            this.head = null;
            return returnVal;
        }
        var runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }
        returnVal = runner.next.val;
        runner.next = null;
        return returnVal;
    }
    pushFront(value) {
        var oldHead = this.head;
        this.head = new Node(value);
        this.head.next = oldHead;
    }
    popFront() {
        var returnVal = null;
        if (this.head) {
            returnVal = this.head.val;
            this.head = this.head.next;
        }
        return returnVal;
    }
    contains(value) {
        var runner = this.head;
        while (runner) {
            if (runner.val === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    removeVal(value) {
        if (!this.head) {
            return false;
        }
        if (this.head.val === value) {
            this.head = this.head.next;
            return true;
        }
        var runner = this.head;
        while (runner.next) {
            if (runner.next.val === value) {
                runner.next = runner.next.next;
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    back () {
        if (!this.head) {
            return null;
        }
        var runner = this.head;
        while (runner.next) {
            runner = runner.next;
        }
        return runner.val;
    }
    pushBack (value) {
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }
    reverse() {
        let current=this.head;
        let previous=null;
        let next=null;
        while(current){
            //2 is next to our current (which starts as the head)
            //In a classic swap, next would be like temp
            next=current.next;//this.head.next is 2
            //Eventually, we want 2 to be ahead of 1, so we define our previous as 2
            current.next=previous;
            //previous now is 1 (this.head)
            previous=current;
            //current is now 2 
            current = next;
        }
        this.head=previous;
        return this;
    }
    getByIndex(idex){
        if (idex > -1) {

            let current =this.head;

            let i =0;
            while((current !==null) && (i < idex)) {
                current = current.next;
                i++;
                console.log(`current is:  ${current.val}`);
            }
            return current !==null ? current.val : undefined;
        }
        else {
            return undefined;
        }
    return idex;
    }

    outputAll(){
        if (0 > -1) {

            let current =this.head;

            let i =0;
            while(current.next !==null) {
                current = current.next;
                i++;
                console.log(`value for index ${i} is:  ${current.val}`);
            }
            return current !==null ? current.val : undefined;
        }
        else {
            return undefined;
        }
    return idex;
    }




}
const list = new List();
console.log(list);
console.log(`this is objname.instance variable or field:  ${list.head}`);
list.pushFront("Kent");
list.pushFront("Nina");
list.pushFront("OO");
list.outputAll();

result = list.getByIndex(1);
console.log(`result is ${result}`);


// const list = new List();
// console.log(list);
// console.log(`this is objname.instance variable or field:  ${list.head}`);
// list.pushFront("Kent");
// list.pushFront("Nina");
// list.pushFront("OO");
// list.reverse();

// console.log(`this is list.head:  `,list.head);

// console.log(`this is list.head.next:  `,list.head.next);
// console.log(list);

//we have six functions we need to turn into methods:
/*
List {
  head: null,
  pushBack: [Function],
  popBack: [Function],
  pushFront: [Function],
  popFront: [Function],
  contains: [Function],
  removeVal: [Function] }

*/

