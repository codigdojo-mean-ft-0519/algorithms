function bubbleSort(arr){
    let sorted = false;
    while(!sorted){
        // console.log('in the while');
        sorted = true;
        for(let i =0; i< arr.length-1; i++){
            // console.log(arr[i] +", "+ arr[(i+1)]);
            if(arr[i] > arr[i+1]){
                swap(arr, i, i+1);
                sorted = false;
                // console.log(`sorting`);
                // temp = arr[i];
                // arr[i] = arr[i+1];
                // arr[i+1] = temp;
            }
        }
    }
    return arr;
}
function swap(arr,from, to){
    const temp = arr[from];
    arr[from] = arr[to];
    arr[to] = temp;
    return arr;
}
function selectionSort(arr){
    let min = arr[0];
    for(let i =0;i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        // for( let j = i+1; j < arr.length; j++){
        //     swap(arr, i, i+1);
        // }
    }
    return min;
}
let array = [1,3,4,1,-7];
console.log(selectionSort(array));