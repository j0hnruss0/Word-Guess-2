var Word = require("./word.js");
var inquirer = require("inquirer");


function titleCard() {
    console.log("\n************************************************");
    console.log("Welcome to WordGuess! My Favorite Shows Edition!");
    console.log("************************************************");
    inquirer.prompt({
        type: "confirm",
        name: "start",
        message: "Ready to play?"

    }).then(function(ans) {
        if (ans.start) {
            startGame();
        } else if (!ans.start) {
            console.log("\nyou have selected 'NO'\nGoodbye!\n");
            return;
        }
    })
}

function startGame() {
    var gameWords = ["Breaking Bad", "The Simpsons", "The Office", "Curb Your Enthusiasm", "Seinfeld", "The X Files", "Star Trek", "Bar Rescue", "Last Week Tonight", "Aqua Teen Hunger Force"];
    var gameWord = gameWords[Math.floor(Math.random()*gameWords.length)];
    var puzzle = new Word(gameWord);
    var answer = puzzle.puzzleArray();
    var unsolved = puzzle.createPuzzle(answer);
    var picked = [];
    
    startRound(puzzle, answer, unsolved, picked);
};

function startRound(puzzle, answer, unsolved, picked) {
    if (puzzle.guesses > 1) {
        console.log("\nWhat TV Show is This? You have " + puzzle.guesses + " Guesses!");
    } else if (puzzle.guesses === 1) {
        console.log("\nOh no! You only have " + puzzle.guesses + " guess left!!");
    }
    console.log(unsolved + "\n");
    inquirer.prompt({
        type: "input",
        message: "Enter a letter from A to Z",
        name: "guess",
        validate: function(value) {
            if (value.match(/^[a-zA-Z]*$/) && value.length === 1) {
                return true;
            }
            console.log("\nPlease make a valid choice\nOne letter at a time, no numbers or special characters");
            return false;
            }
    }).then(function(ans) {
        var unchanged = unsolved;
        console.log("You entered " + ans.guess);
        // for (var i = 0; i < answer.length; i++) {
        //     if (ans.guess.toLowerCase() === answer[i].rightLetter.toLowerCase()) {
        //         console.log("CORRECT!!!");
        //     }
        // }  
        unsolved = puzzle.changePuzzle(answer, ans.guess);
        
        if (unchanged !== unsolved) {
            console.log("CORRECT!!!");
        } else {
            console.log("OOHHH NNNNOOOO");
        }
        
        startRound(puzzle, answer, unsolved);
    })
}




titleCard();