// write function for computer choice
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    let choice;
    switch(randomNum){
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
console.log(computerSelection);

// get VALID user choice. If invalid, repeat prompt
let rawInput;
while(rawInput != "rock" && rawInput != "paper" && rawInput != "scissors"){
    let askUser = prompt("Rock, paper or scissors?");
    rawInput = askUser.toLowerCase();
    console.log(rawInput);
}
const playerSelection = rawInput;
console.log(playerSelection);

// a round of RPS. Get both user and computer choice.
	// if equal, tie.
	// rock vs scissors match up. Rock wins.  
	// scissors vs paper match up. Scissors wins.
	// paper vs rock match up. Paper wins