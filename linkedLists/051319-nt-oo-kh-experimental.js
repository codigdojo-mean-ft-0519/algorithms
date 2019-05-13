

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




}

const list = new List();
console.log(list);
console.log(`this is objname.instance variable or field:  ${list.head}`);
list.pushFront("Kent");
list.pushFront("Nina");
list.pushFront("OO");

console.log(`this is list.head:  `,list.head);

console.log(`this is list.head.next:  `,list.head.next);

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

