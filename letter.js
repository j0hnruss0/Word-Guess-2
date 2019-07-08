var Letter = function(rightLetter) {
    this.rightLetter = rightLetter;
    this.isGuessed = false;
    this.shownChar = function() {
        if (this.isGuessed === false) {
            return "_";
        }
        return rightLetter;
    };
    this.updateChar = function(playerGuess, rightLetter) {
        if (playerGuess.toLowerCase() === rightLetter && this.isGuessed === false) {
            this.isGuessed = true;
        }
    }
};

console.log(new Letter("a").shownChar());