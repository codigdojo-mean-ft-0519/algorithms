
let testArray = [2, 5, "MEAN is mean", "JAVA is fun and TS is too"]

//steps to recursion:
// 1. need a base case:  how do I stop
// 2.  forward progress:  how do we get to the next one...how to get idx to meet that condition
// 3.  Need recursion...need to call self
function printArray(arr, idx =0) {
    //call printArray()  this time pass in an index
    //console.log("index at top of function is", idx);
    //how to stop...how to stop
    let arrayLength = arr.length;
    //guard statement...while not at end of array
    //recursion takes place of any while
    if (idx == arrayLength) {
        return
    }
    console.log("array value is ", arr[idx], "at idx of", idx);  //first time through will be zero..after that will be new passed in parameter
    idx++ //go to the next element..."forward progress"
    return printArray(arr, idx)
}

result = printArray(testArray);
console.log("weather?",result);