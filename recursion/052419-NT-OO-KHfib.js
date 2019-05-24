
//steps to recursion:
// 1. need a base case:  how do I stop....when number is 0
// 2.  forward progress:  how do we get to the next one...how to get idx to meet that condition...idx--
// 3.  Need recursion...need to call self

//Recursive Fibonacci
// Write rFib(num) . Recursively compute and return num th Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2 , rFib(-2) = rFib(0) =0 .

// the answer for time x is the sum of answers of the previous two times
//so fib(6) = fib(5) + fib(4)  fib(n) = fib(n-1) + fib(n-2)
//when the stack unwinds we will pick up returns along the way back.  so those returns will be the previous fib results
//two base cases...in one case go back to 1. if <   ..in the other, but back to the previous two  ex  
let testNum = 2

let count =0 
function rFib(num) {
    num = Math.floor(num);
    count++
    if (num <= 0) {
        return 0
    }
    else if (num<=1) {
        return 1
    }
    return rFib(num-1) + rFib(num-2) ;
}

result = rFib(testNum);
console.log(result);
console.log("we called rFib count times", count)