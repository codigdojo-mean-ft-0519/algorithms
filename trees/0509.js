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

  min(){
      console.log("checking min" + this.val);
      if(this.left !== null){
          return this.left.min();
      }else return this.val;        

  }

  size(){
      let size =1;
      if(this.left !== null){
          size += this.left.size();
      }
      if(this.right !== null){
          size += this.right.size();
      }
      return size;
  }

  contains(val){
      console.log("checking node with value" + this.val);
      if(val === this.val){
          return true;
      }
      if(val < this.val){
          if(this.left !== null){
              return this.left.contains(val);
              }
          }
      else{
          if(this.right !== null){
          return this.right.contains(val);
          }
      }
      return false;
  }

  max(){
      console.log("checking max" + this.val);
      if(this.right !== null){
          return this.right.max();
      }else return this.val;        

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

isEmpty(){
  return this.root === null;
}

findMin(){ 
  if(this.isEmpty()){
      return null;
  }else{
      return this.root.min();
  }
}

findSize(){
  if(this.isEmpty()){
      return 0;
  }else{
      return this.root.size();
  }
}

ifContains(val){
  if(this.isEmpty()){
      return false;
  }else{
      return this.root.contains(val);
  }
  
}

findMax(){ 
  if(this.isEmpty()){
      return null;
  }else{
      return this.root.max();
  }
}

}



//testing:
var arr = [10, 15, 20, 13, 9, 5, 6, 1, 28];
bst = new BST();
for(var i=0; i< arr.length; i++){
  bst.addNode(arr[i]);
}



// console.log(bst.findMin());
// console.log(bst.findSize());
// console.log(bst.ifContains(77));
console.log(bst.findMax());
