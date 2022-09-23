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

// get VALID user choice. If invalid, repeat prompt
function getUserInput() {
    let rawInput;
    while (rawInput != "rock" && rawInput != "paper" && rawInput != "scissors") {
        let askUser = prompt("Rock, paper or scissors?");
        rawInput = askUser.toLowerCase();
    }
    return rawInput;
};

// Play One Round
function playRound(player, computer) {
    let roundMessage;
    let playerPoint = 0;
    let computerPoint = 0;
    switch (true) {
        // if equal, tie.
        case (player == computer):
            console.log("Tie.");
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
        playerScore = playerScore + playerPoint;
        console.log("You Win! " + roundMessage + " Player Score: " + playerScore + " Computer Score: " + computerScore);
        return playerScore;
    }else if (computerPoint > playerPoint) {
        computerScore = computerScore + computerPoint;
        console.log("You Lose! " + roundMessage + " Player Score: " + playerScore + " Computer Score: " + computerScore);
        return computerScore;
    }
};

// Track score 
let playerScore = 0;
let computerScore = 0;

// play five rounds
function game() {
    while (playerScore != 3 && computerScore != 3) {
        playRound(getUserInput(), getComputerChoice());
    }
    if (playerScore > computerScore) {
        console.log("Player wins the game!");
    }else {
        console.log("Computer wins the game!");
    }
}

alert("First to three.");
game();