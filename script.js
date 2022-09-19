// write function for computer choice
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    let choice;
    console.log(randomNum);
    switch(randomNum){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    return choice;
}

console.log(getComputerChoice());


// get computer choice

// get VALID user choice. If invalid, repeat prompt

// a round of RPS. Get both user and computer choice.
	// if equal, tie.
	// rock vs scissors match up. Rock wins.  
	// scissors vs paper match up. Scissors wins.
	// paper vs rock match up. Paper wins