

// Censor

// Create a function that, given string and array of ‘naughty words’ , returns new string with naughty words changed to “x” chars. Given ("Snap crackle pop nincompoop!", ["crack", "poop"]) , you should return "Snap xxxxxle pop nincomxxxx!" (after giggling a little bit).

// Second: handle capitalization appropriately.

testString = "Snap crackle pop nincompoop!";
//            012345678901
//            0123 0123456
testNaughtyWords = ["crack", "poop", "dang it"];

function censor(inputString, inputArray) {
    //outer loop grabs an element in array
    //inner loop searches through looking for a match
    //that seems not so hard, but what to do with the match?  I guess maybe remember the index where it started, and the ending index and loop again replacing those characters with xxxx
    for (let i = 0; i < inputArray.length; i++){
        const word = inputArray[i];
        // console.log("word is:  ", word);
        for (let j = 0; j < inputString.length; j++) { // choose a starting character...running through entire string
            //console.log(`input string at position j ${inputString[j]}`); // this outputed each letter of the input string on different lines
            let k = 0
            for (; k <word.length; k++) { // compare char by char word to string position
                if ((inputString[j+k] != word[k])) { // comparing string char to word char going through the word
                    //  console.log("we did not get a match, so forget this potential string match");
                    break // 
                } 

                // console.log(`we found a match of char ${inputString[j+k]} at index of ${j}`)
                // console.log(`word[j] : ${word[j+k]} and string part is ${inputArray[j]}`);

            }
            // if something/k made it to the end of the word, then we found a match and need to replace with xsxxx
            if (k === word.length) {
                //we found a match
                console.log("matching word is:  ", word);
                //need to replace k through j + word.length
                let newString = ""; 
                for (let m = 0; m < inputString.length; m++) {
                    if (m < j || m>= j+ word.length) {
                        //leave alone
                        newString += inputString[m];
                    }
                    else {
                        newString += "x"
                    }
                }
                console.log(`newString is  ${newString}`)
                inputString = newString;
            }

        }

    }
        

    return  //returning cleaned string    
}

result = censor(testString, testNaughtyWords);
console.log(result);