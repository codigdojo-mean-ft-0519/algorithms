// Recursive Sigma

// Write a recursive function that given a number returns sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

let numbertest = 4  //so if 7, then 5+4+3+2+1=28

//steps to recursion:
// 1. need a base case:  how do I stop....when number is 0
// 2.  forward progress:  how do we get to the next one...how to get idx to meet that condition...idx--
// 3.  Need recursion...need to call self

// so the recursion could be:  add number coming i to the next lower number 


function recursiveSigma(number) {
    //let sumNumber = number
    // console.log("this should start as 3:  " + number)

    if (number <= 0) { // We are counting down from number to zero, when we get to zero, get out
        return number
    }
    //merge number += with number--
    //it is the winding and unwinding that is the magic...when the recursion is done, then the summing happens
    //during the recursion, the winding up,  the variable is about counting down
    //summing happens in the unwinding
    return recursiveSigma(number-1) +number;
}

let something = recursiveSigma(numbertest);
console.log("result is", something)