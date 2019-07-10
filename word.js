var Letter = require("./letter.js");

var Word = function(gameWord) {
    
    this.guesses = 9;
    this.picked = [];
    this.puzzleArray = function() {
        var wordArray = [];
        for (var i = 0; i < gameWord.length; i++) {
            var rightLetter = gameWord[i];
            wordArray.push(new Letter(rightLetter));
        };
    
        return wordArray;
    }

    this.createPuzzle = function(wordArray) {
        var puzzle = [];
        for (var j = 0; j < wordArray.length; j++) {
            puzzle.push(wordArray[j].shownChar());
        }

        return puzzle.join(" ");
    }

    this.changePuzzle = function(wordArray, playerGuess) {
        //var wordArray = this.puzzleArray();
        
        for (var k = 0; k < wordArray.length; k++) {
            wordArray[k].updateChar(playerGuess);
        }

        return this.createPuzzle(wordArray);
        
    }
    
};

module.exports = Word;

// var newWord = new Word("Testing again");
// var newArray = newWord.puzzleArray();

// console.log(newWord.changePuzzle(newArray, "t"));
// console.log(newArray);
