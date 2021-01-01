// Initilise the variables
let win = 0;
let lose = 0;
let draw = 0;

// Play a round of 3
for (let i = 0; i < 3; i++) {
    // prompt user and set default vaule to "Rock"
    let playerChoice = window.prompt("Chose Rock✊, Paper✋, or Scissors✌️?", "Rock");
    const playerSelection = playerChoice.toLowerCase(); // Convert choice to lower case
    const computerSelection = computerPlay();
    
    function computerPlay() {
        let computerChoice = Math.floor(Math.random() * 3) + 1;
        if (computerChoice == 1) {
            return "rock";
        } else if (computerChoice == 2) {
            return "paper";
        } else return "scissors";
    }

    function playRound(playerSelection, computerSelection) {
        if (computerSelection === "rock" && playerSelection === "paper") {
            win += 1;
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if (computerSelection === "rock" && playerSelection === "scissors") {
            lose += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        } else if (computerSelection === "paper" && playerSelection === "scissors") {
            win += 1;
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else if (computerSelection === "paper" && playerSelection === "rock") {
            lose += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        } else if (computerSelection === "scissors" && playerSelection === "paper") {
            lose += 1;
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        } else if (computerSelection === "scissors" && playerSelection === "rock") {
            win += 1;
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else draw += 1;
        return `The computer chose ${computerSelection} and you chose ${playerSelection}! We have a draw!`;
    };

// Checking Values ...
console.log(`The computer chose ${computerSelection} and you chose ${playerSelection}!`);
console.log(playRound(playerSelection, computerSelection));
console.log("Wins: " + win + "; Loses: " + lose + "; Draws: " + draw);
};

// Check the outcome
if (win > lose) {
    console.log("YOU WIN!")
} else if (lose > win) {
    console.log("YOU LOSE!")
} else if (draw > win || draw > lose) {
    console.log("IT'S A DRAW!")
};