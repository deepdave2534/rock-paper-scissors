function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}

console.log("You chose:", getHumanChoice());

// 1 => rock  2 => paper  3 => scissors

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        console.log("It's a tie");
    }
    else if((humanChoice == 1 && computerChoice == 2) || (humanChoice == 2 && computerChoice == 3) || 
            (humanChoice == 3 && computerChoice == 1)) {
        console.log("Computer wins!!");
    }
    else {
        console.log("Human wins!!");
    }
}