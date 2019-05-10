// Flatten
// Flatten a given array, eliminating nested and
// empty arrays. Do not alter the array; return a new
// one retaining the order. Given the array
// [1,[2,3],4,[]] , return a new [1,2,3,4] .


function flatten(inArray) {
  let newArray =[];
  for (let i=0; i < inArray.length; i++){
      //?? is inArray[i] a array thingy or just a regular value
      if (Array.isArray(inArray[i])){
          console.log(`found an array that is ${inArray[i]} `);
          for(let j=0; j<inArray[i].length; j++){
              console.log(`we found inside of the array this value  ${inArray[i][j]}`);
              //push what we found inside
              newArray.push(inArray[i][j]);
          }
      }
      else {
          //push what we found
          newArray.push(inArray[i]);
      }
  }
  return newArray;
}
//use special contructor function that includes "isArray"



testArray =[1,[2,3],4,[], {"this": "will break it"}]

console.log(Array.isArray(testArray));

console.log(flatten(testArray));

