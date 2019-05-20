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
    for(let i = 1; i < arr.length; i++){
        let min = arr[i];
        console.log(`in the first loop i ` + arr[i]);
        let j = i-1;
        while(j >= 0 && arr[j] > min){
            console.log(`second while j `+ arr[j]);
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = min;
        console.log(`min ` +min)
    }
    return arr;
}
function combineSort(arr1, arr2){
    let a = 0;
    let b = 0
    while(a < arr1.length &&  b < arr2.length){
        if( arr2[b] < arr1[a]){
            arr1[a+1]//fix
        }
        a++;
    }
    return arr1;
}
let array1 = [1,3,5,7];
let array2 =  [2,6,8];
console.log(combineSort(array1,array2));