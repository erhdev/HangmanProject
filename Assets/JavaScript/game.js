// establishing global variables to be used later

// these variables all relate to the level the user is on and what words they have to guess
var bank1 = ["aesthetic" , "vaporwave" , "nostalgia" , "consume", "music"];
var bank2 = ["internet" , "nineties", "pepsi", "samples"];
var bank3 = ["neon", "mall", "sunset"];
var bankInUse;
var bankUsed = 1;

var hangmanWord;
var userGuesses;


// these variables all relate to the user's inputs
var userPresses = 0;
var lettersGuessed = [];
var correctLetters = 0;

function generateWord() {
    switch (bankUsed) {

    case 1:
        bankInUse = bank1;       
    break;

    case 2:
        bankInUse = bank2;
    break;

    case 3:
        bankInUse = bank3;
    break;

    case 4:
    break; 

    case 5:
    break;

    
    }
    hangmanWord = bankInUse[Math.floor(Math.random() * bankInUse.length)];
    userGuesses = Math.floor(hangmanWord.length + (hangmanWord.length / 3));
    userLevel.textContent = bankUsed;
}

// code to be run upon the loading of the web app. this will pick a word, create a new array the length of the word 
// picked, fill in the array with underscores, and fill in the predefined areas with the
// guesses the player has left and the new array. 
// also logs relevant variables to the console to make sure things are working properly. 
function setUp() {
    generateWord();
    console.log(hangmanWord);

    guessesLeft.textContent = userGuesses;
    
   
    hangmanWord.toUpperCase();
    hangmanLetters = hangmanWord.split("");
    for (i = 0; i < hangmanLetters.length; i++) {
       hangmanLetters.pop();
       hangmanLetters.unshift("_");    
    }
    display = hangmanLetters.join(" ");
    wordArea.textContent = display;
}

function success() {
setUp();
console.log(bankInUse);

hangmanWord.toUpperCase();
hangmanLetters = hangmanWord.split("");

for (i = 0; i < hangmanLetters.length; i++) {
   hangmanLetters.pop();
   hangmanLetters.unshift("_");    
}

display = hangmanLetters.join(" ");
wordArea.textContent = display;

lettersGuessed = [];
lettersGuessedDisplay = lettersGuessed;
lettersGuessedDisplay.join(",");
guessArea.textContent = lettersGuessedDisplay;

userGuesses = Math.floor(hangmanWord.length + (hangmanWord.length / 3));
guessesLeft.textContent = userGuesses;
}

function failure() {
    setUp();

    hangmanWord.toUpperCase();
    hangmanLetters = hangmanWord.split("");
    for (i = 0; i < hangmanLetters.length; i++) {
       hangmanLetters.pop();
       hangmanLetters.unshift("_");    
    }
    display = hangmanLetters.join(" ");
    wordArea.textContent = display;

    lettersGuessed = [];
    lettersGuessedDisplay = lettersGuessed;
    lettersGuessedDisplay.join(",");
    guessArea.textContent = lettersGuessedDisplay;

    userGuesses = Math.floor(hangmanWord.length + (hangmanWord.length / 3));
    guessesLeft.textContent = userGuesses; 
}
// This here is the real core of the game. when the user presses a letter, and ONLY a letter, this code will record the letter,
// write it into an array of guessed letters, increase the number of presses to keep the array in order,  and decrease the number of guesses left.
// The code will then scan the word in play letter for letter and if the player's guess is in fact a letter in the word, it will replace the appropriate underscore(s)
// in the hangmanLetters array, and the change will be displayed on the screen. The decrease in guesses left will also be displayed. 
// The toUpperCase business is for aesthetic value only and may be removed when the CSS is in place. 

document.onkeydown = function() {
        
    var userLetter = event.key;
    var correctLetters = 0;
    
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
    wordArea.textContent = display;
    guessesLeft.textContent = userGuesses;
    
    for (i = 0; i < hangmanLetters.length; i++) {
        if (hangmanLetters[i] === hangmanWord.charAt(i)) {
            correctLetters++
        }
    }
    

    // this if statement is the word reset condition. I will add some "and" requirements later to reflect wins and losses.
    if (userGuesses === 0) {
        failure();
    } 
    
    if (correctLetters === hangmanWord.length) {
       console.log(bankInUse.indexOf(hangmanWord)) 
       bankInUse.splice(bankInUse.indexOf(hangmanWord), 1);

        // this if statement will move the user to the next level if they have completed all the words
        // on the current level

       if (bankInUse.length === 0) {
           bankUsed++
       }

       success();
    }  
}  


setUp();




// flavor
