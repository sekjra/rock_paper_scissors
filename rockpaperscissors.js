function getComputerChoice() {
    let generateChoice = Math.random();
    let choice = "";
    
    if (generateChoice <= 0.34) {
        choice = "rock";
    }
    else if (generateChoice <= 0.67) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    
    return choice;
}

let playerSelection = prompt("Select your weapon: rock, paper, or scissors: ")

function play(computerChoice, playerSelection) {
    if (computerChoice === playerSelection.toLowerCase()) {
        return ("It's a draw!");
    }
    else if (computerChoice === "rock" && playerSelection.toLowerCase() === "scissors") {
        return ("You lose! Rock beats scissors!");
    }
    else if (computerChoice === "rock" && playerSelection.toLowerCase() === "paper") {
        return ("You win! Paper beats scissors!");
    }
    else if (computerChoice === "paper" && playerSelection.toLowerCase() === "rock") {
        return ("You lose! Paper beats rock!");
    }
    else if (computerChoice=== "paper" && playerSelection.toLowerCase() === "scissors") {
        return ("You win! Scissors beat paper!");
    }
    else if (computerChoice === "scissors" && playerSelection.toLowerCase() === "paper") {
        return ("You lose! Scissors beat paper!");
    }
    else if (computerChoice === "scissors" && playerSelection.toLowerCase() === "rock") {
        return ("You win! Rock beats scissors!");
    }
}

let computerChoice = getComputerChoice();
console.log("Computer choice is: " + computerChoice);
console.log(play(computerChoice, playerSelection));