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
  size(){

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
          this.root.addNode1(node);
      }
      return this;
  }
  findMin(){ //find smallest value and return it
      let curr = this.root;
      if(curr == null){
          console.log("empty tree");
          return "empty tree";
      }
      while(curr.left){
          curr = curr.left;
      }
      console.log(curr.val);
      return curr.val;
  }
  findSize(){
      let size =0;
      let curr = this.root;
      // while(curr.left){
      //     size++;
      //     curr = curr.left;
      //     while(curr.right){
      //         size++;
      //     }
      // }      put this in the node 
  }

}
var arr = [65,777,5,77,19];
bst = new BST();
for(var i=0; i< arr.length; i++){
  bst.addNode(arr[i]);
}
bst.findMin();
console.log(bst);