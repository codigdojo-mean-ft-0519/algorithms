class BTNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
    addNode1(node){
        if(node.val < this.val){
            if(this.left == null){
                this.left = node;
            }else{
                this.left.addNode1(node);
            }
        }else{
            if(this.right == null){
                this.right = node;
            }else{
                this.right.addNode1(node);
            }
        }
    }
}


class BST{
    constructor(){
        this.root = null;
    }
    addNode(val){
        var node = new BTNode(val);
        if(this.root == null){
            this.root = node;
        }else{
          var curr = this.root;
          while (curr) {
            if (node.val < curr.val) {
              if (curr.left === null) {
                curr.left = node;
                break;
              } else {
                curr = curr.left;
              }
            } else {
              if (curr.right === null) {
                curr.right = node;
                break;
              } else {
                curr = curr.right;
              }
            }
          }
        }
        return this;
    }

}
var arr = [65, 777, 5, 77, 19];
var bst = new BST();
for(var i=0; i< arr.length; i++){
    bst.addNode(arr[i]);
}

console.log(bst);