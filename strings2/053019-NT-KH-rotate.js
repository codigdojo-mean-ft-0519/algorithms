// Let’s revisit strings with recursion in mind. Recursion is often quite valuable, as shown in this chapter.

// String: Rotate String

// Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that amount. Example: given ("Boris Godunov",5) , you should return "dunovBoris Go" .

let testString = "Boris Godunov"
                  1234567890123

function rotateString(myString, num) {
    let newNum = num % myString.length
    for (let i = 1; i <= newNum; i++) {
        let lastChar = myString[myString.length - 1];
        myString = lastChar + myString.substring(0, myString.length - 1);
    }
    return myString
}

result = rotateString(testString, 26);
console.log(result);
