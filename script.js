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

// get computer choice
const computerSelection = getComputerChoice();
console.log("computer chose: " + computerSelection);

// get VALID user choice. If invalid, repeat prompt
let rawInput;
while (rawInput != "rock" && rawInput != "paper" && rawInput != "scissors") {
    let askUser = prompt("Rock, paper or scissors?");
    rawInput = askUser.toLowerCase();
}
const playerSelection = rawInput;

// Track score
let playerScore = 0;
let computerScore = 0;

// Play One Round
function playRound(player, computer){
    let roundMessage;
    switch (true) {
        // if equal, tie.
        case (player == computer):
            console.log("Tie.");
            break;
        // rock vs scissors match. Rock wins.  
        case (player == "rock" || player == "scissors") 
        && (computer == "rock" || computer == "scissors"):
            roundMessage = "Rock beats scissors.";
            if (player == "rock") {playerScore++} else {computerScore++};
            break;
        // scissors vs paper match. Scissors wins.
        case (player == "scissors" || player == "paper") 
        && (computer == "scissors" || computer == "paper"):
            roundMessage = "Scissors beats paper.";
            if (player == "scissors") {playerScore++} else {computerScore++};
            break;
        // paper vs rock match. Paper wins.
        case (player == "paper" || player == "rock") 
        && (computer == "paper" || computer == "rock"):
            roundMessage = "Paper beats rock.";
            if (player == "paper") {playerScore++} else {computerScore++};
            break;
    };
    if (playerScore > computerScore){
        console.log("You Win! " + roundMessage);
        return playerScore;
    }else if (computerScore > playerScore) {
        console.log("You Lose! " + roundMessage);
        return computerScore;
    }
};

// run
playRound(playerSelection, computerSelection);
