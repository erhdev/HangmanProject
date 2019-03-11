
// CODE WIN CONDITION NEXT

// establishing global variables to be used later
var hangmanBank = ["aesthetic" , "vaporwave" , "nostalgia" , "consume", "music"];
var userPresses = 0;
var lettersGuessed = [];
var hangmanWord = hangmanBank[Math.floor(Math.random() * hangmanBank.length)];
var userGuesses = Math.floor(hangmanWord.length + (hangmanWord.length / 3));



// establishing a way to reset the word in play
function newWord() {
    var hangmanWord = hangmanBank[Math.floor(Math.random() * hangmanBank.length)];
}

// code to be run upon the loading of the web app. this will pick a word, create a new array the length of the word 
// picked, fill in the array with underscores, and fill in the predefined areas with the
// guesses the player has left and the new array. 
// also logs relevant variables to the console to make sure things are working properly. 
(function () {
    newWord();
    guessesLeft.textContent = userGuesses;
    
   
    hangmanWord.toUpperCase();
    hangmanLetters = hangmanWord.split("");
    for (i = 0; i < hangmanLetters.length; i++) {
       hangmanLetters.pop();
       hangmanLetters.unshift("_");    
    }
    display = hangmanLetters.join(" ");
    gameArea.textContent = display;
    console.log(hangmanWord);
    console.log(userGuesses);
    console.log(hangmanLetters);
    
} ) ();

// This here is the real core of the code . when the user presses a letter, and ONLY a letter, this code will record the letter,
// write it into an array of guessed letters, increase the number of presses to keep the array in order,  and decrease the number of guesses left.
// The code will then scan the word in play letter for letter and if the player's guess is in fact a letter in the word, it will replace the appropriate underscore(s)
// in the hangmanLetters array, and the change will be displayed on the screen. The decrease in guesses left will also be displayed. 
// The toUpperCase business is for aesthetic value only and may be removed when the CSS is in place. 
document.onkeydown = function() {
        
    var userLetter = event.key;
    
    display.split("");

    if ((userLetter === "q") || (userLetter === "w") || (userLetter === "e") || (userLetter === "r") || (userLetter === "t") ||
    (userLetter === "y") || (userLetter === "u") || (userLetter === "i") || (userLetter === "o") || (userLetter === "p") ||
    (userLetter === "a") || (userLetter === "s") || (userLetter === "d") || (userLetter === "f") || (userLetter === "g") ||
    (userLetter === "h") || (userLetter === "j") || (userLetter === "k") || (userLetter === "l") || (userLetter === "z") ||
    (userLetter === "x") || (userLetter === "c") || (userLetter === "v") || (userLetter === "b") || (userLetter === "n") || 
    (userLetter === "m")) {
        userGuesses--
        userPresses++ 
        userLetter.toUpperCase();
        lettersGuessed.splice(userPresses, 0, userLetter.toUpperCase());
    }
    
    
    lettersGuessedDisplay = lettersGuessed;
    lettersGuessedDisplay.join(",");
    console.log(userLetter);
    guessArea.textContent = lettersGuessedDisplay;
    
    for (i = 0; i < hangmanWord.length; i++) {
        if (hangmanWord.charAt(i) === userLetter) {
            hangmanLetters.splice(i, 1, userLetter);
        }
    }
    display = hangmanLetters.join(" ");
    gameArea.textContent = display;
    guessesLeft.textContent = userGuesses;

    // this if statement is the word reset condition. I will add some "and" requirements later to reflect wins and losses.
    if (userGuesses === 0)  {
        newWord();
        console.log(hangmanWord);

        hangmanWord.toUpperCase();
        hangmanLetters = hangmanWord.split("");
        for (i = 0; i < hangmanLetters.length; i++) {
           hangmanLetters.pop();
           hangmanLetters.unshift("_");    
        }
        display = hangmanLetters.join(" ");
        gameArea.textContent = display;

        lettersGuessed = [];
        lettersGuessedDisplay = lettersGuessed;
        lettersGuessedDisplay.join(",");
        guessArea.textContent = lettersGuessedDisplay;

        userGuesses = Math.floor(hangmanWord.length + (hangmanWord.length / 3));
        guessesLeft.textContent = userGuesses;
    }

}  





