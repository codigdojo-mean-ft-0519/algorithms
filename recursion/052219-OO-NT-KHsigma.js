

// Recursive Factorial

// Given num , return the product of ints from 1 up to num . If less than zero, treat as zero. If not integer, truncate. Experts tell us 0! is 1 . rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).


let numbertest = 6  //so if 3, then 3*2*1=6

//steps to recursion:
// 1. need a base case:  how do I stop....when number is 0
// 2.  forward progress:  how do we get to the next one...how to get idx to meet that condition...idx--
// 3.  Need recursion...need to call self

// so the recursion could be:  add number coming i to the next lower number 


function recursiveFactorial(number) {
    //let sumNumber = number
    // console.log("this should start as 3:  " + number)

    if (number <= 1) { // We are counting down from number to zero, when we get to zero, get out
        return number
    }
    //merge number += with number--
    //it is the winding and unwinding that is the magic...when the recursion is done, then the summing happens
    //during the recursion, the winding up,  the variable is about counting down
    //summing happens in the unwinding
    return recursiveFactorial(number-1) *number;
}

let something = recursiveFactorial(numbertest);
console.log("result is", something)