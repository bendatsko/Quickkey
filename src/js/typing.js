var inputDOM = document.getElementById("words-input");
var wordListTable = document.getElementById("word-set");
var wordList = "where use life these world during new these with interest lead well make lead to should during a course will problem child mean again since course where out again around may off if between because form few both order too take must present fact not begin this part after follow will problem";
var totalChars = wordList.length;
var lineCharCount = 0;
var lineCharMax = 80;
var lineInt = 0;
var totalLineCount = Math.round(totalChars / lineCharMax);
var totalSpaces = 2;
var wordTotal = 50;
// Handle user test type selection
document.getElementById("test-25").onclick = function () {
    document.getElementById("test-25").style.color = "#F75656";
    document.getElementById("test-50").style.color = "#C8C9CA";
    document.getElementById("test-100").style.color = "#C8C9CA";
    document.getElementById("test-200").style.color = "#C8C9CA";
    wordTotal = 10;
    document.getElementById("reset-container").style.marginTop = "60vh";
    generateWordList(wordTotal);
    resetWordList();
};
document.getElementById("test-50").onclick = function () {
    document.getElementById("test-25").style.color = "#C8C9CA";
    document.getElementById("test-50").style.color = "#F75656";
    document.getElementById("test-100").style.color = "#C8C9CA";
    document.getElementById("test-200").style.color = "#C8C9CA";
    document.getElementById("caret").style.opacity = "0";
    wordTotal = 25;
    document.getElementById("reset-container").style.marginTop = "60vh";
    generateWordList(wordTotal);
    resetWordList();
};
document.getElementById("test-100").onclick = function () {
    document.getElementById("test-25").style.color = "#C8C9CA";
    document.getElementById("test-50").style.color = "#C8C9CA";
    document.getElementById("test-100").style.color = "#F75656";
    document.getElementById("test-200").style.color = "#C8C9CA";
    document.getElementById("caret").style.opacity = "0";
    wordTotal = 50;
    document.getElementById("reset-container").style.marginTop = "71vh";
    generateWordList(wordTotal);
    resetWordList();
};
document.getElementById("test-200").onclick = function () {
    document.getElementById("test-25").style.color = "#C8C9CA";
    document.getElementById("test-50").style.color = "#C8C9CA";
    document.getElementById("test-100").style.color = "#C8C9CA";
    document.getElementById("test-200").style.color = "#F75656";
    document.getElementById("caret").style.opacity = "0";
    wordTotal = 100;
    document.getElementById("reset-container").style.marginTop = "80vh";
    generateWordList(wordTotal);
    resetWordList();
};
function generateWordList(totalWords) {
    var appendToString = "";
    var english = [
        "the",
        "be",
        "of",
        "and",
        "a",
        "to",
        "in",
        "he",
        "have",
        "it",
        "that",
        "for",
        "they",
        "I",
        "with",
        "as",
        "not",
        "on",
        "she",
        "at",
        "by",
        "this",
        "we",
        "you",
        "do",
        "but",
        "from",
        "or",
        "which",
        "one",
        "would",
        "all",
        "will",
        "there",
        "say",
        "who",
        "make",
        "when",
        "can",
        "more",
        "if",
        "no",
        "man",
        "out",
        "other",
        "so",
        "what",
        "time",
        "up",
        "go",
        "about",
        "than",
        "into",
        "could",
        "state",
        "only",
        "new",
        "year",
        "some",
        "take",
        "come",
        "these",
        "know",
        "see",
        "use",
        "get",
        "like",
        "then",
        "first",
        "any",
        "work",
        "now",
        "may",
        "such",
        "give",
        "over",
        "think",
        "most",
        "even",
        "find",
        "day",
        "also",
        "after",
        "way",
        "many",
        "must",
        "look",
        "before",
        "great",
        "back",
        "through",
        "long",
        "where",
        "much",
        "should",
        "well",
        "people",
        "down",
        "own",
        "just",
        "because",
        "good",
        "each",
        "those",
        "feel",
        "seem",
        "how",
        "high",
        "too",
        "place",
        "little",
        "world",
        "very",
        "still",
        "nation",
        "hand",
        "old",
        "life",
        "tell",
        "write",
        "become",
        "here",
        "show",
        "house",
        "both",
        "between",
        "need",
        "mean",
        "call",
        "develop",
        "under",
        "last",
        "right",
        "move",
        "thing",
        "general",
        "school",
        "never",
        "same",
        "another",
        "begin",
        "while",
        "number",
        "part",
        "turn",
        "real",
        "leave",
        "might",
        "want",
        "point",
        "form",
        "off",
        "child",
        "few",
        "small",
        "since",
        "against",
        "ask",
        "late",
        "home",
        "interest",
        "large",
        "person",
        "end",
        "open",
        "public",
        "follow",
        "during",
        "present",
        "without",
        "again",
        "hold",
        "govern",
        "around",
        "possible",
        "head",
        "consider",
        "word",
        "program",
        "problem",
        "however",
        "lead",
        "system",
        "set",
        "order",
        "eye",
        "plan",
        "run",
        "keep",
        "face",
        "fact",
        "group",
        "play",
        "stand",
        "increase",
        "early",
        "course",
        "change",
        "help",
        "line",
    ];
    for (var i = 0; i < totalWords; i++) {
        var word = english[Math.floor(Math.random() * english.length)];
        appendToString = appendToString + word + " ";
    }
    console.log(appendToString);
    wordList = appendToString.slice(0, -1);
}
populateWordList();
function populateWordList() {
    //generate divs from word list and create wordlist table
    totalChars = wordList.length;
    lineCharCount = 0;
    lineCharMax = 80;
    lineInt = 0;
    totalLineCount = Math.round(totalChars / lineCharMax);
    generateWordList(wordTotal);
    // creating all necessary lines and assigning them ids
    for (var lines = 0; lines <= totalLineCount; lines++) {
        var t0 = document.createElement("table");
        var elementID = "t" + lines;
        t0.setAttribute("id", elementID);
        wordListTable.appendChild(t0);
    }
    //populate all tables with divs, each of which contains a character
    for (var i = 0; i < wordList.length; i++) {
        lineCharCount++; //number of characters in the current line
        var lineStr = "t" + lineInt; //the name of the current line
        var th = document.createElement("TH"); //creates the next cell in the row
        document.getElementById(lineStr).appendChild(th); //adds the newest element to the current line
        var availableSpace = lineCharMax - lineCharCount;
        // One-Dimensional Search text wrapping algorithm
        var charsUntilNextWord = 0;
        var wrapToken = "";
        if (wordList.charAt(i) === " ") {
            charsUntilNextWord++;
            th.appendChild(document.createTextNode(String.fromCharCode(160)));
            var foundNextSpace = false;
            while (!foundNextSpace) {
                wrapToken = wrapToken + wordList.charAt(i + charsUntilNextWord);
                // console.log(wrapToken)
                if (wordList.charAt(i + charsUntilNextWord) === " ") {
                    totalSpaces++;
                    break;
                }
                if (i + charsUntilNextWord > wordList.length) {
                    break;
                }
                charsUntilNextWord++;
            }
            //  console.log(wrapToken + " chars until next word = " + charsUntilNextWord)
        }
        if (availableSpace < charsUntilNextWord) {
            //change the line
            changeLineTypical(availableSpace, charsUntilNextWord, wrapToken, i);
        }
        th.appendChild(document.createTextNode(wordList.charAt(i)));
        th.setAttribute("id", i + "");
        th.setAttribute("class", "character");
    }
    function changeLineTypical(availableSpace, charsUntilNextWord, wrapToken, i) {
        //change the line
        if (availableSpace < charsUntilNextWord) {
            // console.log("JUST MADE A NEW LINE!!!!")
            lineInt++;
            lineCharCount = 0;
            for (var j = 0; i < wrapToken.length; j++) {
                lineCharCount++; //number of characters in the current line
                var lineStr = "t" + lineInt; //the name of the current line
                var th = document.createElement("TH"); //creates the next cell in the row
                document.getElementById(lineStr).appendChild(th); //adds the newest element to the current line
                th.appendChild(document.createTextNode(wordList.charAt(j)));
                th.setAttribute("class", "character");
            }
        }
        return i;
    }
}
// =============
// actual typing
// =============
var textFocused = false;
var typedCharIndex = 0;
wordListTable.onclick = function () {
    console.log("the text field has been focused");
    document.getElementById("caret").style.opacity = "100";
    document
        .getElementById(typedCharIndex.toString())
        .appendChild(document.getElementById("caret"));
    textFocused = true;
};
//disables spacebar pagedown
window.addEventListener("keydown", function (e) {
    if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
    }
});
var keysPressed = {};
document.addEventListener("keydown", function (event) {
    if (textFocused === true) {
        keysPressed[event.key] = true;
        var foundSpace = false;
        if (keysPressed["Control"] && event.key == "Backspace") {
            // alert(event.key);
            var key = event.keyCode || event.charCode;
            document.getElementById((typedCharIndex - 1).toString()).style.color =
                "#C8C9CA";
            typedCharIndex--;
            for (var i = typedCharIndex; !foundSpace; i--) {
                var currentKey = document
                    .getElementById((i - 1).toString())
                    .innerHTML.toString();
                console.log(key.toString());
                if (currentKey === "&nbsp; ") {
                    // console.log("space found; current char: " + (currentKey + 1))
                    foundSpace = true;
                    typedCharIndex = i + 1;
                    break;
                }
                if (currentKey !== "&nbsp; ") {
                    // console.log(document.getElementById((i).toString()).innerHTML.toString())
                    foundSpace = false;
                    document.getElementById(i.toString()).style.color = "#C8C9CA";
                }
                // console.log(document.getElementById((i).toString()).innerHTML)
            }
            // if(foundSpace) {
            // // if(wordList.charAt(typedCharIndex - 2) === " " && wordList.charAt(typedCharIndex - 1) !== " ") {
            //     console.log("yeah yeah cool")
            //     document.getElementById((typedCharIndex - 1).toString()).style.color = "#C8C9CA"
            //     typedCharIndex--
            // }
            // console.log(foundSpace)
            // console.log(wordList.charAt(typedCharIndex - 2))
            // if(wordList.charAt(typedCharIndex) === " ") {
            // console.log("just do a regular backspace lol")
            // }
        }
        // if (keysPressed['Tab']) {
        //     console.log("tab backspace lol")
        //     textFocused = true
        //     document.getElementById("reset-container").style.boxShadow = "0px 0 10px rgba(255, 255, 255, 0.25)"
        // }
        // if (keysPressed['Enter']) {
        //     console.log("FUCK LOL")
        //     // document.getElementById("reset-container").style.boxShadow = "0px 0 10px rgba(255, 255, 255, 0.25)"
        // }
        //     if(key === 9) {
        //         textFocused = true
        //         document.getElementById("reset-container").style.boxShadow = "0px 0 10px rgba(255, 255, 255, 0.25)"
        //         console.log(textFocused)
        // }
        // if(key === 13) {
        //     textFocused = true
        //     resetWordList()
        //     }
    }
});
document.addEventListener("keyup", function (event) {
    delete keysPressed[event.key];
});
var timestamp0 = 0;
var timestamp1 = 0;
document.onkeydown = function () {
    console.log("keystroke recognized");
    if (textFocused === true) {
        // console.log(textFocused)
        var key = event.keyCode || event.charCode;
        var divContents = document
            .getElementById(typedCharIndex.toString())
            .innerHTML.charCodeAt(0) - 32;
        if (typedCharIndex === 0) {
            console.log("the timer has been started");
            var t0 = Date.now();
            var t0Date = new Date(t0);
            timestamp0 = t0Date.getTime();
            console.log(timestamp0);
        }
        if (typedCharIndex === wordList.length - 1) {
            console.log("the timer has been ended");
            document.getElementById("caret").style.opacity = "0";
            // enableTimer = false
            // let totalWords = wordList.length
            var t1 = Date.now();
            var t1Date = new Date(t1);
            timestamp1 = t1Date.getTime();
            var totalTime = (timestamp1 - timestamp0) / 1000;
            console.log(totalTime);
            var rawWPM = wordTotal / (totalTime / 60);
            var wrongChars = 0;
            //calculate number of errors
            for (var i = 0; i < wordList.length; i++) {
                // console.log(i.toString())
                // console.log(document.getElementById(i.toString()).style.color)
                if (document.getElementById(i.toString()).style.color === "rgb(247, 86, 86)" && document.getElementById(i.toString()).innerHTML !== "&nbsp; ") {
                    wrongChars++;
                }
            }
            console.log("number of wrong characters: " + wrongChars);
            var percentageCharsCorrect = (totalChars - (wrongChars)) / totalChars;
            console.log("percentage of characters that are correct: " +
                wordTotal +
                "\nTotal number of characters: " +
                totalChars);
            var adjustedWPM = Math.round(rawWPM * percentageCharsCorrect);
            // console.log(adjustedWPM)
            console.log("WPM OUTPUT FOR DEBUG: " +
                percentageCharsCorrect +
                "\n" + "total chars: ", totalChars +
                "\n" + "wrong chars: ", wrongChars +
                "\n" + "raw wpm: ", rawWPM +
                "\n" + "adjusted wpm: ", adjustedWPM);
            document.getElementById("speedDisplay").innerHTML =
                adjustedWPM.toString();
            document.getElementById("accuracyDisplay").innerHTML =
                Math.round(percentageCharsCorrect * 100).toString() + "%";
            // document.getElementById("caret").style.opacity = "0"
        }
        // tests for correct character then sets it to white
        if (key === divContents) {
            // console.log("ok cool they match yay")
            document.getElementById(typedCharIndex.toString()).style.color = "white";
            typedCharIndex++;
        }
        // tests for the incorrect character then sets it to red
        if ((65 <= key && key <= 90) || key === 32) {
            if (key !== divContents) {
                // console.log("ok cool they match yay")
                document.getElementById(typedCharIndex.toString()).style.color =
                    "#F75656";
                typedCharIndex++;
            }
        }
        //tests for backspace then removes the character
        if (key === 8) {
            // console.log(document.getElementById(typedCharIndex.toString()).innerHTML)
            document.getElementById((typedCharIndex - 1).toString()).style.color =
                "#C8C9CA";
            typedCharIndex--;
        }
        document
            .getElementById(typedCharIndex.toString())
            .appendChild(document.getElementById("caret"));
    }
};
// }
var resetBtn = document.getElementById("reset-container");
function resetWordList() {
    document.getElementById("caret").style.opacity = "0";
    document
        .getElementById("word-set")
        .appendChild(document.getElementById("caret"));
    for (var i = 0; i <= totalLineCount; i++) {
        document.getElementById("t" + i.toString()).remove();
    }
    typedCharIndex = 0;
    populateWordList();
    document.getElementById("speedDisplay").innerHTML = "XX";
    document.getElementById("accuracyDisplay").innerHTML = "XX";
    timestamp0 = 0;
    timestamp1 = 0;
    totalSpaces = 0;
}
resetBtn.onclick = function () {
    resetWordList();
};
//see if you can figure out how to generate wordsets from random sets of words using a library or something
//if you can get that done you can clean up the code and the UI and then publish version 1.0!
