// Longest Word

// Create a function that, given a string of words, returns the longest word. Example: given

// "Snap crackle pop makes the world go round!" , return "crackle" .

// Bonus: handle punctuation.



testString = "Snap crackle pop makes the world go round!";

function longestWord(inString) {
    const newArray = stringToWord(inString);
    // console.log(newArray);
    let currentMaxString = "";
    let currentMaxIndex = 0;
    
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].length > currentMaxString.length) {
            currentMaxString = newArray[i];
            currentMaxIndex = i
        }
        // console.log("current max String:  ", currentMaxString, "and Index is  ", currentMaxIndex);
    }
    return currentMaxString
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

result = longestWord(testString);
// console.log(result);


// Unique Words

// Given a string, retain words that occur only once . Given "Sing! Sing a song; sing out loud; sing out strong." , return "Sing! Sing a song; loud; strong" . Punctuation is part of the word: "Sing!" is not "Sing" .


const testString2 = "Sing! Sing a song; sing out loud; sing out strong.";

function uniqueWords(inString) {
    let newArray = stringToWord(inString)
    // console.log("new Array of words ", newArray)
    let stringBuilder = ""
    let notFound = false;

    //for each element in array, loop comparing all elements
    for (let i = 0; i < newArray.length; i++) {
        let j = 0;
        for (; j < newArray.length; j++) {

            if ((i != j) && (newArray[i] === newArray[j])) {
                // console.log("I am in the if and newArray of i is: ", newArray[i], " and newArray of j ", newArray[j]);
                break
            }
        }
        // console.log("j is ", j)
        if (j == newArray.length) {
            stringBuilder += newArray[i] + " "
            // console.log("string:  ", stringBuilder);
        }
    }
    return stringBuilder
}

result2 = uniqueWords(testString2);
console.log(result2);


