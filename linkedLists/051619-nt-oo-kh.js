/*

SList: Kth-Last Node

Given k, return the value that is ‘k’ nodes from the list’s end. If given (list,1) , return the list’s last value. If given (list,4) , return the value at the node that has exactly 3 nodes following it.
*/


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
                console.log(`current is:   at index of ${i}`);
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
            while(current !==null) {
                console.log(`value for index ${i} is:  ${current.val}`);
                current = current.next;
                i++;
            }
            return current !==null ? "idex returns" + current.val : undefined;
        }
        else {
            return undefined;
        }
    return idex;
    }

    getLength(){
        let current =this.head;
        let total =0;
        while(current) {
            current = current.next;
            total++;
            //console.log(`current is:   at index of ${total}`);
        }
        return total

    }

    kLastNode(k){
        //Given k, return the value that is ‘k’ nodes from the list’s end. If given (list,1) , return the list’s last value. If given (list,4) , return the value at the node that has exactly 3 nodes following it.
        //k is a value that is that far back from the end of the list
        //if list length is 4, and k is 1, then we want the 4th element
        //If given (list,1) , return the list’s last value. If given (list,4) , return the value at the node that has exactly 3 nodes following it.
        //k max is list length...if k is list length, then return the value of first node
        if (k<=0){
            return null;
        }
        //count to the end to get the total number of list
        let listLength = this.getLength()
        let targetIndex=listLength-k
        if (targetIndex<0){
            console.log("ted?")
            return null;
        }
        console.log("target index " + targetIndex)
        let current =this.head;
        while(targetIndex>0){
            current=current.next

            targetIndex--
            console.log(current.val);
        }
            console.log(current)
        return current.val;
    }

    kLastNode2(k){
        //Given k, return the value that is ‘k’ nodes from the list’s end. If given (list,1) , return the list’s last value. If given (list,4) , return the value at the node that has exactly 3 nodes following it.
        //k is a value that is that far back from the end of the list
        //if list length is 4, and k is 1, then we want the 4th element
        //If given (list,1) , return the list’s last value. If given (list,4) , return the value at the node that has exactly 3 nodes following it.
        //k max is list length...if k is list length, then return the value of first node
        if (k<=0){
            return null;
        }
        let current = this.head;
        while (current && (k>0)){ //stop when at the last, or 
            current=current.next
            k--
        }
        if (k>0){ //this happens when we exit while because end of list, but k still has value, thath means k was bigger than the list, so get out
            return null;
        }
        let follower=this.head
        while (current){
            current=current.next;
            follower=follower.next;
        }
        return follower.val;
    } //end of class

    //SList: Is Palindrome

    // Return whether a list is a palindrome. String palindromes read the same front-to-back and back-to-front. Here, compare node values . N.B.: to be accurate in JavaScript, use === instead of == , since 1 == true == [1] == "1" .

    // 1) Traverse the given list from head to tail and push every visited node to stack.
    // 2) Traverse the list again. For every visited node, pop a node from stack and compare data of popped node with currently visited node.
    // 3) If all nodes matched, then return true, else false
    

    isPalindrome(){  
        let testArr = [];
        let current = this.head;
        //Go through the list, and fill up an array with all of the values of each node.
        //I.e. testArr at index 0 would be the value of this.head
        while (current){
            testArr.push(current.val);
            current = current.next;
        }
        current = this.head;
        while(current){
            if ((testArr.pop()!=current.val)){
                return false;
            }
            current = current.next;
        }
        return true;
    }



}

const list = new List();
console.log(list);
console.log(`this is objname.instance variable or field:  ${list.head}`);
// list.pushFront("Kent");
// list.pushFront("Nina");
// list.pushFront("OO");
// list.pushFront("Ted");
// list.pushFront("Larry");


list.pushFront("R");
list.pushFront("A");
list.pushFront("D");
list.pushFront("A");
list.pushFront("R");

list.outputAll();  //Larry, Ted, OO, Nina, Kent

//result = list.getByIndex(4);
//console.log(`result is ${result}`);

console.log(list.kLastNode2(5));

console.log(list.isPalindrome());


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

