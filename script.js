// Initilise the variables
let playerScore = 0;
let computerScore = 0;

const player = document.getElementById('player');
const computer = document.getElementById('computer');
const score = document.getElementById('score');
const refresh = document.getElementById('refresh')
let gameOver = false;


// Button Event Listeners for Player Selection 😀
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    refresh.addEventListener('click', refreshGame);

    function refreshGame(e) {
        console.log('Refresh Game!');
        playerScore = 0;
        computerScore = 0;
        computer.innerHTML = computerScore;
        player.innerHTML = playerScore;
        score.innerHTML = '';
        gameOver = false;
        button.addEventListener('click', playGame);
    }

    button.addEventListener('click', playGame);
    function playGame(e) {
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
                score.innerHTML = `You win! ${playerSelection} beats ${computerSelection}!`;
            } else if (computerSelection === "rock" && playerSelection === "scissors") {
                computerScore += 1;
                computer.innerHTML = computerScore;
                score.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}!`;
            } else if (computerSelection === "paper" && playerSelection === "scissors") {
                playerScore += 1;
                player.innerHTML = playerScore;
                score.innerHTML = `You win! ${playerSelection} beats ${computerSelection}!`;
            } else if (computerSelection === "paper" && playerSelection === "rock") {
                computerScore += 1;
                computer.innerHTML = computerScore;
                score.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}!`;
            } else if (computerSelection === "scissors" && playerSelection === "paper") {
                computerScore += 1;
                computer.innerHTML = computerScore;
                score.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}!`;
            } else if (computerSelection === "scissors" && playerSelection === "rock") {
                playerScore += 1;
                player.innerHTML = playerScore;
                score.innerHTML = `You win! ${playerSelection} beats ${computerSelection}!`;
            } else score.innerHTML = "It's a draw!";
        };

        playRound(playerSelection, computerSelection);

        // Check some values ...
        console.log("Player Score: " + playerScore + "; Computer Score: " + computerScore);
        if ((playerScore + computerScore) === 5) {
            gameOver = true;

        };
        if (gameOver) {
            console.log('G A M E   O V E R !');
            score.innerHTML = 'GAME OVER';
            button.removeEventListener('click', playGame);
        }
    };
});