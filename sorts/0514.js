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
    let min = 0;
    for(let i =0;i< arr.length; i++){
        for(let j =i+1;j<arr.length; j++){
            console.log(`in the j loop ` + j);
            if(arr[j] < arr[min]){
                console.log(`checking min `+ arr[min]);
                min = j;
            }
        }
        swap(arr, i, min);
        min = i+1;
    }
    return arr;
}
function insertionSort(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        console.log(`in the first loop i ` + arr[i]);
        let j = i-1;
        while(j >= 0 && arr[j] > min){
            console.log(`second while j `+ arr[j]);
            console.log(`min ` +min);
            min = arr[j];
            j--;
        }
    }
    return arr;
}
let array = [4,8,7,1,2,66];
let temp =  [1,2,4,8,7,66];
console.log(insertionSort(array));