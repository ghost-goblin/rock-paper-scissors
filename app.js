// Button Event Listeners for Player Selection
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerSelection = e.target.id;
        console.log(playerSelection);
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
        // Check some values
        console.log(`The computer chose ${computerSelection} and you chose ${playerSelection}!`);
        console.log(playRound(playerSelection, computerSelection));
    });
});