function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3 ) + 1;
    if (computerChoice == 1){
        return "Rock✊";
    } else if (computerChoice == 2) {
        return "Paper✋";
    } else return "Scissors✌️";
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "Rock✊" && playerSelection == "Rock") {
        return `The computer chose ${computerSelection} and you chose ${playerSelection}! We have a draw!`;
    } else if (computerSelection == "Paper✋" && playerSelection == "Rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (computerSelection == "Scissors✌️" && playerSelection == "Rock") {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
  }

const computerSelection = computerPlay();
const playerSelection = "Rock";
console.log(playRound(playerSelection, computerSelection));