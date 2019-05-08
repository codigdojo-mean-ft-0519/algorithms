var exampleArray = [2,3,7,10,14,23,34,36,42,45,50,66,71,75];
// xray vision [0,1,2, 3, 4, 5, 6, 7, 8,9, 10,11,12,13]
//Question: Does our array contain 34?
//Method: Divide the array in half. If the array is odd, look at the value of the center item.
//In this case, our array is odd (13 indexes) - so the middle is 7. The value of 7 is 36.
    //If the array is even, look at the value .... figure out later
//If the value of the middle item is greater than our desired value...look left.
    //Think of what you have as a new mini array that is from the zero index until the middle index.
    //i.e. - halfArray = []
//If the value of the middle item is less than our desired value...look right.
    //Create a new mini array that is from the middle index until the end index.


function binarySearch(myArray, desiredVal){
    //Create variables that define the start of our range
    var startRange = 0;
    var endRange = myArray.length-1;
    var midPoint = Math.floor((endRange - startRange)/2 + startRange);
    while (startRange < endRange){
        if (desiredVal > myArray[midPoint]){
            startRange = midPoint+1;
        }
        else if (desiredVal < myArray[midPoint]){
            endRange = midPoint-1;
        }
        else{
            return true;
        }
    midPoint = Math.floor((endRange - startRange)/2 + startRange);
    }
    return false;
}

// // console.log(binarySearch(exampleArray,14));
// console.log(binarySearch(exampleArray,71));
console.log(binarySearch(exampleArray,72));
console.log(binarySearch(exampleArray,75));