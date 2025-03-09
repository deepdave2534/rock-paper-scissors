let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

let rounds = 0;

function declareWinner() {
    let finalResult = "";
    if (humanScore > computerScore) {
        finalResult = "You win the game!";
    } else if (humanScore < computerScore) {
        finalResult = "Computer wins the game!";
    } else {
        finalResult = "It's a tie!";
    }
    document.getElementById("final-result").textContent = finalResult;
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    
    let resultText = "";

    if (humanChoice === computerChoice) {
        resultText = "It's a tie!";
    } 
    else if (
        (humanChoice === 1 && computerChoice === 3) || 
        (humanChoice === 2 && computerChoice === 1) || 
        (humanChoice === 3 && computerChoice === 2)
    ) {
        resultText = "You win this round!";
        humanScore++;
    } 
    else {
        resultText = "Computer wins this round!";
        computerScore++;
    }

    // Update scores and result message
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("result").textContent = resultText;

    rounds++;

    if(rounds == 4) {
        declareWinner();
    }
}
