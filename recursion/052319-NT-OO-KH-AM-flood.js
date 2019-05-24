// Flood Fill

// Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2 dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor) ! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent . Given canvas2D of [[3,2,3,4,3],

// [2,3,3,4,0] , [7,3, 3 ,5,3] , [6,5,3,4,1] , [1,2,3,3,3] ]

// …plus startXY of [2,2] and newColor of 1 .. . … we examine the cells that are directly (not diagonally) adjacent to startXY , which is [2,2] . If any have a value of 3 (the original value at startXY ), we change its value to 1 ( newColor ) and repeat the process with its directly-adjacent neighbor cells. We repeat this until th e entire zone of similarly-colored cells is changed .

// Our canvas2D becomes: [[3,2, 1 ,4,3], [2, 1 , 1 ,4,0], [7, 1 , 1 ,5,3], [6,5, 1 ,4,1], [1,2, 1 , 1 , 1 ] ]
//3s are people that are going to be changed to zombies
// determine what is current value in the spot where we start
//canvas [0,2] =3 ?
// base case..when to stop...when you have checked length of rows and length of col..no need to check diagonals...diagonal is when x and y change by 1...if only x or y change by 1, then not diagonal

const canvas = [
    [3,2,3,4,3],
    [2,3,3,4,0], 
    [7,3,3,5,3], 
    [6,5,3,4,1], 
    [1,2,3,3,3],
    ];
  //forward progress is that startXY changes each time so we are looking at another element
function floodFill(matrix, startXY, newColor, oldColor=null) {
    console.log(matrix[startXY[1]][startXY[0]]);

    let theX = startXY[0];
    let theY = startXY[1];
    let curColor = matrix[theY][theX];
    if (oldColor === null) {
        oldColor = curColor;
    }
    if (curColor !== oldColor) {
        return 'anything or nothing because we want to stop with direction';
    }
    matrix[theY][theX] = newColor;


    if (theY+1 < matrix.length) { //y is a row
          //number of rows is matrix.length  if aa = matrix.length-1, then we can use matrix[aa][2] to be the third value on the last row, so maatrix[aa].length is num of columns
        //keep going down
        floodFill(matrix, [theX, theY + 1], newColor, oldColor); // new Color is static, repass each time
    }
    if (theY-1 >= 0) { //y is a row
        //number of rows is matrix.length  if aa = matrix.length-1, then we can use matrix[aa][2] to be the third value on the last row, so maatrix[aa].lengh is num of columns
      //keep going down
      floodFill(matrix, [theX, theY - 1], newColor, oldColor); // new Color is static, repass each time
  }

  if (theX+1 < matrix[theY].length) { //y is a row
    //number of rows is matrix.length  if aa = matrix.length-1, then we can use matrix[aa][2] to be the third value on the last row, so maatrix[aa].lengh is num of columns
  //keep going down
    floodFill(matrix, [theX+1, theY], newColor, oldColor); // new Color is static, repass each time
}
    
if (theX-1 >=0) { //y is a row
    //number of rows is matrix.length  if aa = matrix.length-1, then we can use matrix[aa][2] to be the third value on the last row, so maatrix[aa].lengh is num of columns
  //keep going down
    floodFill(matrix, [theX-1, theY], newColor, oldColor); // new Color is static, repass each time
}
    
    return matrix;
}

result = floodFill(canvas, [2, 2], 9);
console.log(result);
