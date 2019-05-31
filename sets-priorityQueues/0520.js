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
arr1 = [77,22,11,22];
arr2 = [2,6,7,2,6,2];
//     [77,2,22,6,11,7,22,6,2]
console.log(interleaveArray(arr1,arr2));