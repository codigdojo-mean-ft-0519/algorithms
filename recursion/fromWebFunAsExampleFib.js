function fibonacci(x){
    var sum = 0;
    var arr = [0,1];
    var i = 2;
while (i <= x && x != 0 && x != 1){ //starting from the very first number in the sequence until we reach our desired end number..
    sum = arr[i-2] + arr[i-1]; //keep track of the current sum of all of the numbers
    arr[i] = sum; //use an array to keep track of the value of the sum at that current point
    i++;
}
    var fibnum = arr[x];
    return fibnum;
}
fibonacci(9);