// Players
let playerOne;
let ai;
// Options
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let options = ["rock", "paper", "scissors"];
// Events
let winner = "You win";
let loser = "You lose";
let draw = "Draw";
let result;

game(rock);


// Rules
function game(playerChoice) {
    playerOne = playerChoice;
    ai = Math.floor(Math.random()*3);

    if (playerOne === rock && ai === scissors) {
        result = winner;
    } else if (playerOne === paper && ai === rock) {
        result = winner;
    } else if (playerOne === scissors && ai === paper) {
        result = winner;
    } else if (playerOne === ai) {
        result = draw;
    } else {
        result = loser;
    }
    return console.log(result, playerOne, ai);
}
