// write function for computer choice
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    let choice;
    switch (randomNum) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

// Play One Round
function playRound(player) {
    const computer = getComputerChoice();
    let playerPoint = 0;
    let computerPoint = 0;
    let roundMessage;
    switch (true) {
        // if equal, tie.
        case (player == computer):
            roundResult = "Tie";
            break;
        // rock vs scissors match. Rock wins.  
        case (player == "rock" || player == "scissors") 
        && (computer == "rock" || computer == "scissors"):
            roundMessage = "Rock beats scissors.";
            if (player == "rock") {playerPoint++} else {computerPoint++};
            break;
        // scissors vs paper match. Scissors wins.
        case (player == "scissors" || player == "paper") 
        && (computer == "scissors" || computer == "paper"):
            roundMessage = "Scissors beats paper.";
            if (player == "scissors") {playerPoint++} else {computerPoint++};
            break;
        // paper vs rock match. Paper wins.
        case (player == "paper" || player == "rock") 
        && (computer == "paper" || computer == "rock"):
            roundMessage = "Paper beats rock.";
            if (player == "paper") {playerPoint++} else {computerPoint++};
            break;
    };
    if (playerPoint > computerPoint) {
        roundResult = "You Win! " + roundMessage;
        return playerScore++;
    }else if (computerPoint > playerPoint) {
        roundResult = "You Lose! " + roundMessage;
        return computerScore++;
    }
};

// first to five
function game() {
    playRound(this.className);
    showResult.textContent = roundResult;
    document.body.appendChild(showResult);

    // update scores
    showPlayer.textContent = "Player Score: " + playerScore;
    showComputer.textContent = "Computer Score " + computerScore;

    theWinner();
};

function theWinner() {
    if (playerScore === 5 || computerScore === 5) {
        choices.forEach(playerChoice => {playerChoice.removeEventListener('click', game);});
        if (playerScore > computerScore) {
            showWinner.textContent = "PLAYER wins the game. Congratulations 🎉";
            document.body.appendChild(showWinner);
        } else {
            showWinner.textContent = "COMPUTER wins the game. Better luck next time.";
            document.body.appendChild(showWinner);
        };
    };
};

// Track score 
let playerScore = 0;
let computerScore = 0;
let roundResult; // replaced console.log message on playRound
let testVar;

// UI
const choices = document.querySelectorAll("button");
choices.forEach(playerChoice => {playerChoice.addEventListener('click', game);});

const showPlayer = document.querySelector('.player');
const showComputer = document.querySelector('.computer');

const showResult = document.createElement('div');
const showWinner = document.createElement('div');



