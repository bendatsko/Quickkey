var input = document.getElementById("words-input")
// var wordList = document.getElementById("word-set").textContent

var wordList = "where use life these world during new these with interest lead well make lead to should during a course will problem child mean again since course where out again around may off if between because form few both order too take must present fact not begin this part after follow will problem"

//track the number of characters that the user has typed (all I have to do is get the number of characters in the words-input field)

let typedInput = "" 
let currentTotalChars = 0

//for generating the word list
let generateWordList = true
let totalSpaces = 0
let totalChars = 0
let totalWords = 0


//i am going to get the number of words in the word list by getting the number of spaces
//then I am going to divide the number of characters by the number of spaces to get the total number of words



//I need to iterate through the generated word list and make a word div, make a new div each time there is a space



    while (generateWordList) {
        console.log("generating word list")

        totalChars = wordList.length

        for(let i = 0; i < totalChars; i++) {
            if(wordList.charAt(i) === " ") {
                totalSpaces++
            }

            var word = document.createElement("div");
            word.appendChild(document.createTextNode(wordList.charAt(i)));
            document.getElementById('word-set').appendChild(word);

            
        }

        totalWords = totalSpaces + 1




        generateWordList = false;
    }






input.onkeydown = function() {
    
    typedInput = input.textContent
    currentTotalChars = typedInput.length


    if(wordList.charAt(currentTotalChars - 1) != typedInput.charAt(currentTotalChars - 1)) {
        console.log("an error occured at the character " + typedInput.charAt(currentTotalChars - 1) + "( should be " + wordList.charAt(currentTotalChars - 1) + ") which has the character index " + (currentTotalChars - 1))

        let firstPartString = typedInput.substring(0, typedInput.length - 2)  //i store the incorrect character for later
        let lastCharacterTruncate = typedInput.substring(typedInput.length-1, typedInput.length) //i store the last character for later
        let incorrectChar = typedInput.charAt(currentTotalChars-1)
        
        //create the span element


    }
    
}   



