var testArray=[4,8,12];

function doAverage(inArray){
    var sum=0
    for(i=0; i<inArray.length;i++){
        sum += inArray[i];
    }
    var average = sum/inArray.length;

    return "the average values in the input array is:  " + average;
}
var results = doAverage(testArray);
console.log(results);

// Balance Point
// Write a function that returns whether the given array has a balance point between indices, where one
// side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true ( between indices 3 & 4 ), but
// [1,2,4,2,1] → false .

var sampleArray1 = [1,2,3,4,10];
var sampleArray2 = [1,2,4,2,1];

function balancePoint(inArray) {
    var sumL=0, sumR=0;
    for (var  i =0; i<inArray.length; i++) {
        sumL += inArray[i];
        sumR = 0;
            for(var j=inArray.length-1; j>0 ; j--){
                console.log("i is:  " + i + " and j is:  "  + j);
                sumR += inArray[j]
                console.log("sumL is: " + sumL + "and sumR is: " + sumR);
                if (sumL == sumR) {
                    console.log("we got a match when index is;  " + i);
                    //return "we got a match when index is;  " + i
                }
            }
    }
}

function balancePoint2(inArray) {
    var sumL=0, sumR=0;  //initializing our two variables to 0
        //sumL will be adding from the left; sumR will add from the left, but starting where sumL leaves off
        //sumL adds the numbers from the left increasing with one more value with each outer loop iteration
    for (var  i =0; i<inArray.length; i++) { //looping through the array from the beginning to the end
        sumL += inArray[i]; //summing from left; we will be looking for when the left sum equals the right
        sumR = 0;
            for(var j=i+1; j<inArray.length; j++){
                //sumR += inArray[j] //summming from where L left off to see if the right will match.
                }
                sumR = sum(inArray,i+1);
            if (sumL==sumR){
                console.log("we have a match where sumL is: " + sumL + " sumR is: " + sumR + " and index is " + i);
                return true;
            }
    }
    return false;
}


function balancePoint3(inArray) {
  var sumL=0, sumR=0;  //initializing our two variables to 0
      //sumL will be adding from the left; sumR will add from the left, but starting where sumL leaves off
      //sumL adds the numbers from the left increasing with one more value with each outer loop iteration
  sumL=sum(inArray);
  for (var  i =0; i<inArray.length; i++) { //looping through the array from the beginning to the end
      var amount = inArray[i];
      sumL -= amount;
      sumR += amount;
      // sumL += inArray[i]; //summing from left; we will be looking for when the left sum equals the right
      // sumR = 0;
      //     for(var j=i+1; j<inArray.length; j++){
      //         //sumR += inArray[j] //summming from where L left off to see if the right will match.
      //         }
      //     sumR = sum(inArray,i+1);
          if (sumL==sumR){
              console.log("we have a match where sumL is: " + sumL + " sumR is: " + sumR + " and index is " + i);
              return true;
          }
  }
  return false;
}

function sum(arrToSum, startIndex){ //sums an array starting at startIndex through the end of the array
    let total=0;
    for(let i=startIndex ;i<arrToSum.length;i++){
        total += arrToSum[i];
    }
    return total;
}

console.log("result should be: " + sum([4,5,5,6]));

resultsBalanced = balancePoint2(sampleArray2);
console.log(resultsBalanced);