var username;
function nameEntry() {
var usernameArr = [];

var isText = false;
var namePresses = 0;



 document.onkeydown = function() {
    
    nameLetter = event.key;

    if ((nameLetter === "q") || (nameLetter === "w") || (nameLetter === "e") || (nameLetter === "r") || (nameLetter === "t") ||
    (nameLetter === "y") || (nameLetter === "u") || (nameLetter === "i") || (nameLetter === "o") || (nameLetter === "p") ||
    (nameLetter === "a") || (nameLetter === "s") || (nameLetter === "d") || (nameLetter === "f") || (nameLetter === "g") ||
    (nameLetter === "h") || (nameLetter === "j") || (nameLetter === "k") || (nameLetter === "l") || (nameLetter === "z") ||
    (nameLetter === "x") || (nameLetter === "c") || (nameLetter === "v") || (nameLetter === "b") || (nameLetter === "n") || 
    (nameLetter === "m") || (nameLetter === "1") || (nameLetter === "2") || (nameLetter === "3") || (nameLetter === "4") || 
    (nameLetter === "5") || (nameLetter === "6") || (nameLetter === "7") || (nameLetter === "8") || (nameLetter === "9") || 
    (nameLetter === "0") || (nameLetter === "!") || (nameLetter === "@") || (nameLetter === "#") || (nameLetter === "$") || 
    (nameLetter === "%") || (nameLetter === "^") || (nameLetter === "&") || (nameLetter === "*") || (nameLetter === "-") || 
    (nameLetter === "_") || (nameLetter === "+") || (nameLetter === "=") || (nameLetter === "?") || (nameLetter === ".") || 
    (nameLetter === ",") || (nameLetter === "/") || (nameLetter === "SPACE")  ) {
        namePresses++
        usernameArr.splice(namePresses, 0, nameLetter + " ");
        isText = true;
    }
    username = usernameArr.join("");
    console.log(username);
    console.log(nameLetter);
    console.log(namePresses);
    console.log(isText);
    whatisname.textContent = username;
    
 }
}    
function runGame() {

username.textContent = username;
// establishing global variables to be used later

// these variables all relate to the level the user is on and what words they have to guess
var bank1 = ["aesthetic" , "vaporwave" , "nostalgia" , "consume", "music"];
var bank2 = ["internet" , "nineties", "pepsi", "samples"];
var bank3 = ["neon", "mall", "sunset", "palmtree", "pleasure"];
var bankInUse;
var bankUsed = 1;

var hangmanWord;
var userGuesses;
var wordsCorrect = [];
var numWordsCorrect = 0;


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
    console.log(hangmanWord);
}

// code to be run upon the loading of the web app. this will pick a word, create a new array the length of the word 
// picked, fill in the array with underscores, and fill in the predefined areas with the
// guesses the player has left and the new array. 
// also logs relevant variables to the console to make sure things are working properly. 
function setUp() {
    generateWord();
    console.log(hangmanWord);

    guessesLeft.textContent = userGuesses;
    
    hangmanLetters = hangmanWord.split("");
    for (i = 0; i < hangmanLetters.length; i++) {
       hangmanLetters.pop();
       hangmanLetters.unshift("_");    
    }
    display = hangmanLetters.join(" ");
    wordArea.textContent = display;
    wordsLeft.textContent = bankInUse.length;
}
// success and failure functions. these run the setUp function and other stuff depending on whether the user succeeds or fails
// conditions for success and failure found below. 
function success() {
    
       // this chunk of code will add the guessed word to the array wordsCorrect, which then gets
       // displayed to the user

       wordsCorrect[numWordsCorrect] = ("  " + hangmanWord + "  ");
       numWordsCorrect++
       wordsGuessed.textContent = wordsCorrect;
       score.textContent = numWordsCorrect;

       // this line deletes the word that was guessed from the bank, which ensures there are no repeats
       bankInUse.splice(bankInUse.indexOf(hangmanWord), 1);

        // this if statement will move the user to the next level if they have completed all the words
        // on the current level

       if (bankInUse.length === 0) {
           bankUsed++
       }
setUp();
console.log(bankInUse);

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


document.onkeydown = function() {
        
    var userLetter = event.key;
    var correctLetters = 0;
    
    display.split("");

    // this specifies that the user press must be a letter to be logged
    if ((userLetter === "q") || (userLetter === "w") || (userLetter === "e") || (userLetter === "r") || (userLetter === "t") ||
    (userLetter === "y") || (userLetter === "u") || (userLetter === "i") || (userLetter === "o") || (userLetter === "p") ||
    (userLetter === "a") || (userLetter === "s") || (userLetter === "d") || (userLetter === "f") || (userLetter === "g") ||
    (userLetter === "h") || (userLetter === "j") || (userLetter === "k") || (userLetter === "l") || (userLetter === "z") ||
    (userLetter === "x") || (userLetter === "c") || (userLetter === "v") || (userLetter === "b") || (userLetter === "n") || 
    (userLetter === "m")) {
                
                userPresses++
                repeatLetter = false;
                
                // this chain of if statements ignores user presses if the same letter is guessed twice. the for loop scans the array, and if the element at i is the same
                // as the user's guess, it changes a boolean to true.
                if (userPresses > 1) {

                for (var i = 0; i < userPresses; i++) {if ("  " + userLetter  + "  "=== lettersGuessed[i]) {repeatLetter = true;}} 
                
                } else {
                    lettersGuessed.splice(userPresses, 0, "  " + userLetter + "  ");
                    userGuesses--
                }
                // if that boolean is true, this array will not make sure the guess is not added to the array. the userPresses > 1 condition is there
                // because at userPresses = 0 the key will get logged twice without that condition. 
                if ((repeatLetter !== true) &&  (userPresses > 1 )) {
                    lettersGuessed.splice(userPresses, 0, "  " + userLetter  + "  ");
                    userGuesses--
                } 
        }
    
    
    
    
    console.log(userLetter);
    guessArea.textContent = lettersGuessed;
    
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
    

    // this if statement defines the success or failure conditions and runs the appropriate function
    if (userGuesses === 0) {
        failure();
    } 
    
    if (correctLetters === hangmanWord.length) {
        success();
    }  
}  

// call setUp to make sure there's something on screen for the user
setUp();
//fin
}

