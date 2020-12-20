const computerSelection = computerPlay();
const playerSelection = "Rock";

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3 ) + 1;
    if (computerChoice === 1){
        return "Rock ✊";
    } else if (computerChoice === 2) {
        return "Paper ✋";
    } else return "Scissors ✌️";
}

console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    // your code here!
  }


console.log(playRound(playerSelection, computerSelection));