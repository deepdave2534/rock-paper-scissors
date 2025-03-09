let humanScore = 0;
let computerScore = 0;
let rounds = 0;
const maxRounds = 5;

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

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

    // Disable buttons after game ends
    document.querySelectorAll("button").forEach(button => button.disabled = true);
}

function playRound(humanChoice) {
    if (rounds >= maxRounds) return; // Stop the game after 5 rounds

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

    rounds++;

    // Update UI elements
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("round-count").textContent = rounds;
    document.getElementById("result").textContent = resultText;

    if (rounds === maxRounds) {
        declareWinner();
    }
}
