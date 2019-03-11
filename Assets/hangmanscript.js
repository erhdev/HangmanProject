
var hangmanBank = ["aesthetic" , "vaporwave" , "nostalgia" , "consume"];
var userGuesses = 15;
var userPresses = 0;
var lettersGuessed = [];
var wordInPlay = "";

var hangmanWord = hangmanBank[Math.floor(Math.random() * hangmanBank.length)];

// CODE THE GUESSING PART NEXT



// create empty string
// split hangmanWord into array
// place empty string with "_ " for each letter in array


(function () {
    hangmanWord.toUpperCase();
    hangmanLetters = hangmanWord.split("");
    for (i = 0; i < hangmanLetters.length; i++) {
       hangmanLetters.pop();
       hangmanLetters.unshift("_");    
    }
    display = hangmanLetters.join(" ");
    gameArea.textContent = display;
    console.log(hangmanWord);
    console.log(hangmanLetters);


    document.onkeydown = function() {
        userPresses++
        var userLetter = event.key;
        userLetter.toUpperCase();
        
        
        display.split("");
        
        lettersGuessed.splice(userPresses, 0, userLetter.toUpperCase());
        
        lettersGuessedDisplay = lettersGuessed;
        lettersGuessedDisplay.join(",");
        console.log(userLetter);
        guessArea.textContent = lettersGuessedDisplay;
        
        for (i = 0; i < hangmanWord.length; i++) {
            if (hangmanWord.charAt(i) === userLetter) {
                hangmanLetters.splice(i, 1, userLetter);
            }
                
            
        }
        console.log(hangmanLetters);
        display = hangmanLetters.join(" ");
        gameArea.textContent = display;
        
    
    }    
    
} ) ();


