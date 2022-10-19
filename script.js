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
    if (playerPoint > computerPoint){
        roundResult = "You Win! " + roundMessage;
        return playerScore++;
    }else if (computerPoint > playerPoint) {
        roundResult = "You Lose! " + roundMessage;
        return computerScore++;
    }
};

// Track score 
let playerScore = 0;
let computerScore = 0;
let roundResult;

const choices = document.querySelectorAll("button");

choices.forEach(playerChoice => {playerChoice.addEventListener('click', 
    () => {
        playRound(playerChoice.className); 
        newDiv.textContent = roundResult;
        document.body.appendChild(newDiv);
    })
});

const newDiv = document.createElement('div');




