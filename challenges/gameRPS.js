/* Challenge - Rock, Paper, Scissors
- Generate the variables rock, paper and scissors
- Generate a function that receive a parameter that is the user option will play with.
- Inside of the function, create a validation to know if you win or lose
- Return the result of the match */

// Players
let ai;
let player;
// Options (variables)
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let options = ["rock", "paper", "scissors"];

game(rock);

// Validation
function game(choice) {
    player = choice;
    ai = options[Math.floor(Math.random()*3)];
    if (player === rock && ai === scissors) {
        return console.log(`You win - ${player} vs ${ai}`);
    } else if (player === paper && ai === rock) {
        return console.log(`You win - ${player} vs ${ai}`);
    } else if (player === scissors && ai === paper) {
        return console.log(`You win - ${player} vs ${ai}`);
    } else if (player === ai) {
        return console.log(`Draw - ${player} vs ${ai}`);
    } else {
        return console.log(`You lose - ${player} vs ${ai}`);
    }
}