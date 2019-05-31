// String to Word Array

// Given a string of words (with spaces, tabs and linefeeds), returns an array of words. Given "Life is not a drill!" return ["Life", "is" "not", "a", "drill!"] .

//Bonus: handle punctuation.


let testString = "Life is not a drill!"

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

result = stringToWord(testString);
 console.log(result);





