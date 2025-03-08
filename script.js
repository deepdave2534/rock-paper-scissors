function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}

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
        computerScore++;
    }
    else {
        console.log("Human wins!!");
        humanScore++;
    }
}

for(let i = 0; i < 5; i++) {
    let humChoice = getHumanChoice();
    let compChoice = getComputerChoice();
    
    playRound(humChoice, compChoice);

    console.log(compChoice);
    console.log("You chose:", humChoice);
}

console.log("Human Score:", humanScore);
console.log("Computer Score:", computerScore);

if(humanScore > computerScore) {
    console.log("Computer Wins!!!");
}
else if(humanScore == computerScore) {
    console.log("Tie!!!");
}
else {
    console.log("Human Wins!!!");
}