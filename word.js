var Letter = require("./letter.js");
var Word = function(word){
    //An array of new Letter objects representing the letters of the underlying word
    this.wordLetters = [];
    for(var i = 0; i < word.length(); i++){
        var temp = new Letter(word.charAt(i), "false");
        this.wordLetters[i] = temp;
    }

    //A function that returns a string representing the word. This should call the function on each letter object 
    //(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.returnGuessed = function(){
        var result = "";
        for(var i = 0; i < wordLetters.length(); i++){
            result += wordLetters[i].ifGuessed();
        }
        return result;
    };

    //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.makeGuess = function(guessedLetter){
        for(var i = 0; i < wordLetters.length(); i++){
            wordLetters[i].guess(guessedLetter);
        }
    };
};

module.exports = Word;