// Reverse Word Order

// Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence. Given "This is a test" , return "test a is This" .

// Bonus: handle punctuation and capitalization. Example: given "Life is not a drill, go for it!" you should return "It for go, drill a not is lif

//  This is a mess
//  01234567890123
//    0  1  2  3

//want 8 1


let testString = "This is a mess"

function reverseWords(aString) { 
    let wordArray = stringToWord(aString);
    let newArray = [];
    let newString = ""
    for (let i = wordArray.length-1; i >= 0; i--) {
        newString += wordArray[i];
        newString += " ";
    }
   
    return newString;

}

function stringToWord(aString) { 
    let newArray = [];
    let tempString = "";
    for (let i = 0; i < aString.length; i++) {
        if (!((aString[i] === " ") || (aString[i] === "\t") || (aString[i] === "\n"))) {
            tempString  += aString[i]
            //console.log(tempString)
        }
        else {
            newArray.push(tempString);
            tempString = ""
        }
    }
    newArray.push(tempString);
    return newArray;
}




result = reverseWords(testString);
console.log(result);





