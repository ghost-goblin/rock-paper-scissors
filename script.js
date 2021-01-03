// Initilise the variables
let playerScore = 0;
let computerScore = 0;

const player = document.getElementById('player');
const computer = document.getElementById('computer');

// Button Event Listeners for Player Selection 😀
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerSelection = e.target.id;
        const computerSelection = computerPlay();

        // 🖥️ The Computer Selection
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
                playerScore += 1;
                player.innerHTML = playerScore;
                return `You win! ${playerSelection} beats ${computerSelection}!`;
            } else if (computerSelection === "rock" && playerSelection === "scissors") {
                computerScore += 1;
                computer.innerHTML = computerScore;
                return `You lose! ${computerSelection} beats ${playerSelection}!`;
            } else if (computerSelection === "paper" && playerSelection === "scissors") {
                playerScore += 1;
                player.innerHTML = playerScore;
                return `You win! ${playerSelection} beats ${computerSelection}!`;
            } else if (computerSelection === "paper" && playerSelection === "rock") {
                computerScore += 1;
                computer.innerHTML = computerScore;
                return `You lose! ${computerSelection} beats ${playerSelection}!`;
            } else if (computerSelection === "scissors" && playerSelection === "paper") {
                computerScore += 1;
                computer.innerHTML = computerScore;
                return `You lose! ${computerSelection} beats ${playerSelection}!`;
            } else if (computerSelection === "scissors" && playerSelection === "rock") {
                playerScore += 1;
                player.innerHTML = playerScore;
                return `You win! ${playerSelection} beats ${computerSelection}!`;
            } else return;
        };


        // Check some values ...
        playRound(playerSelection, computerSelection);
        console.log("Player Score: " + playerScore + "; Computer Score: " + computerScore);
    });
});