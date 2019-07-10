var Letter = function(rightLetter) {
    this.rightLetter = rightLetter;
    this.isGuessed = false;
    this.shownChar = function() {
        if (this.isGuessed === false && this.rightLetter !== " ") {
            return "_";
        }
        return rightLetter;
    };
    this.updateChar = function(playerGuess) {
        if ((playerGuess.toLowerCase() === this.rightLetter.toLowerCase() && this.isGuessed === false) || this.rightLetter === " ") {
            this.isGuessed = true;
        }
    }
};

module.exports = Letter;
