// Balance Index
// Here, a balance point is on an index, not between indices. Return the balance index where sums are
// equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2 , but
// [9,9] → -1 .





function balanceIndex(inArray) {
  var sumL=inArray[0], sumR=0;  //initializing our two variables 
      //sumL is and will be the left look and starts with the first value
      //when evaluating our index will be the hopeful answer..it will be possibly the balance index and we will look left and look right
      //sumR is the sum of the right look
  for (var  i =1; i<inArray.length; i++) { //looping through the array from almost the beginning...i is the hopeful index
      sumR = 0;  //re
      for(var j=i+1; j<inArray.length; j++){ //i =1 is used so we are only starting from the right of the hopeful index aka i
          sumR += inArray[j] //summming values to the right of the currrent/hopeful index
      }
      if (sumL==sumR){
          console.log("we have a match where sumL is: " + sumL + " sumR is: " + sumR + " and index is " + i);
          //this happens when the sum to the left of the hopeful index is the same as the sum to the right of the hopeful index aka i
          //so, that means we have a winner...we found an index where the left sum is the same as the right sum
          //note that we never count the hopeful index or include it in any of our summing..hence it is the balance point
          return i;
      }
      sumL += inArray[i]; //summing from left; we will be looking for when the left sum equals the right
  }
  return -1;
}
result = balanceIndex([9,9]);
result = balanceIndex([-2,5,7,0,3]);
console.log("index of balance: " + result);