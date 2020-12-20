const computerSelection = computerPlay();
const playerSelection = "rock";

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3 ) + 1;
    if (computerChoice == 1){
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else return "scissors";
}

console.log(`The computer chose ${computerSelection} and you chose ${playerSelection}!`);

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`; 
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }  else if (computerSelection === "paper" && playerSelection === "rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`; 
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else return `The computer chose ${computerSelection} and you chose ${playerSelection}! We have a draw!`;
  }

console.log(playRound(playerSelection, computerSelection));
