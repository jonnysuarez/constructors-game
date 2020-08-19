var Letter = function(character, beenGuessed) {
    //A string value to store the underlying character for the letter
    this.storeChar = character;

    //A boolean value that stores whether that letter has been guessed yet
    this.beenGuessed = beenGuessed;

    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore)
    //if the letter has not been guessed
    this.ifGuessed = function () {
        if (this.beenGuessed == true) {
            return this.storeChar;
        } else {
            return "_";
        }
    };

    //A function that takes a character as an argument and checks it against the underlying character, updating the stored 
    //boolean value to true if it was guessed correctly
    this.guess = function(input){
        if(input == this.storeChar){
            this.beenGuessed = "true";
        }
    };
};

module.exports = Letter;