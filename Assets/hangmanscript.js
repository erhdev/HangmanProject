
var hangmanBank = ["aesthetic" , "vaporwave" , "nostalgia" , "hyper-consumerism"];
var userGuesses = 15;
var userPresses = 0;
var lettersGuessed = [];
var wordInPlay = "";

var hangmanWord = hangmanBank[Math.floor(Math.random() * hangmanBank.length)];


// create empty string
// split hangmanWord into array
// place empty string with "_ " for each letter in array


(function () {
    hangmanLetters = hangmanWord.split("");
    for (i = 0; i < hangmanLetters.length; i++) {
       hangmanLetters.pop();
       hangmanLetters.unshift("_");    
    }
    display = hangmanLetters.join(" ");
    gameArea.textContent = display;
    console.log(hangmanWord);
    console.log(hangmanLetters);
} ) ();


document.onkeydown = function() {
    var userPress = event.key;
    lettersGuessed.splice(userPresses, 0, userPress.toUpperCase());
    userPresses++
    lettersGuessedDisplay = lettersGuessed;
    lettersGuessedDisplay.join(",");
    console.log(userPress);
    guessArea.textContent = lettersGuessedDisplay;
}    
