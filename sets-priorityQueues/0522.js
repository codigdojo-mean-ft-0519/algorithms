function interleaveArray(arr1, arr2){
    const newArr = [];
    let pos1 = 0;
    let pos2 = 0;
    while(pos1< arr1.length && pos2 < arr2.length){
        newArr.push(arr1[pos1]);
        newArr.push(arr2[pos2]);
        pos1++;
        pos2++;
    }
    while(pos2 < arr2.length){
        newArr.push(arr2[pos2]);
        pos2++;
    }
    while(pos1 < arr1.length){
        newArr.push(arr1[pos1]);
        pos1++;
    }
    return newArr;
}
function mergeSortedArrays(arr1,arr2){
    const newArr = [];
    pos1 =0;
    pos2 = 0;
    while(pos2 < arr2.length && pos1 < arr1.length){
        if( arr1[pos1] < arr2[pos2]){
            newArr.push(arr1[pos1]);
            pos1++;
            console.log(`pos1 ${pos1} pos2 ${pos2}`);
        }else{
            newArr.push(arr2[pos2]);
            pos2++;
            console.log(`pos1 ${pos1} pos2 ${pos2}`);
        } 
    }
    while(pos2 < arr2.length){
        newArr.push(arr2[pos2]);
        pos2++;
    }
    while(pos1 < arr1.length){
        newArr.push(arr1[pos1]);
        pos1++;
    }
    return newArr;
}
function intersectSortedArrays(arr1,arr2){
    const newArr =[];
    //run thorugh loops
    //if both have number  push to newARr
    let pos1 =0; 
    let pos2 =0;
    while(pos1 < arr1.length && pos2 < arr2.length){
        if(arr1[pos1] === arr2[pos2]){
            newArr.push(arr2[pos2]);
            pos1++;
            pos2++;
        }else if(arr1[pos1] > arr2[pos2]){
            pos2++; 
        }else{
            pos1++;
        }
    }
    return newArr;
}
function unionSortedArrays(arr1,arr2){
    pos1 = 0;
    pos2 = 0;
    newArr =[];
    while(pos1 < arr1.length || pos2 < arr2.length){
        if(pos2 === arr2.length || arr1[pos1] < arr2[pos2]){
            newArr.push(arr1[pos1]);
            pos1++;
        }else if( pos1 === arr1.length || arr1[pos1] > arr2[pos2]){
            newArr.push(arr2[pos2]);
            pos2++;
        }
        else if(arr1[pos1] === arr2[pos2]){
            newArr.push(arr1[pos1]);
            pos1++;
            pos2++;
        }
    }
    return newArr;
}
arr1 = [0,2,4,7,8];
arr2 = [1,1,1,4,8,9];
//     [1,2,2,2,6,6,7]
console.log(unionSortedArrays(arr1,arr2));